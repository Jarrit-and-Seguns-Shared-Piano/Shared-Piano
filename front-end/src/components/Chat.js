import { useState, useEffect,useRef } from "react"
import {Modal,Button,Form,FormControl,Row,Col} from 'react-bootstrap'
import socket from "../socket"
import { BsFillChatDotsFill } from "react-icons/bs";

function Chat({color}){
    const messageEl = useRef(null)
    const [msgCount,setMsgCount] = useState({text: '', count: 0})
    const [smShow, setSmShow] = useState(false);
    const [message, setMessage] = useState("")
    const [newMessages, setNewMessages] = useState([])
   

        function sendMessage(e){
            e.preventDefault()
            socket.emit('send message', message)
            setMessage("")
        }
       
    useEffect(() => {
        if (messageEl.current) {
          const callback = function(mutationsList, observer) {
            for(const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    const { target } = mutation;
                     target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
                }
            }
        };
          const config = { childList: true, subtree: true }
          const observer = new MutationObserver(callback);
          observer.observe( messageEl.current, config);
        }
       
      }, [messageEl.current])

    useEffect(() => {
        socket.on('receive message', ({messages}) => {
            setNewMessages(messages)
            console.log(messages)
            if(messages.length) {
               setMsgCount(prev => {
                   const number =  messages.length - prev.count
                return {...prev,text:`${number}`}
                })
            }
        })
    }, [])

    return (
        <>
        <div>
        <span className='notif'>{msgCount.text}</span>
        <Button id='chatBtn'  variant="success" onClick={() =>{ setSmShow(true);
        console.log(messageEl)
        if(messageEl.current) {
            messageEl.current.scrollTop = messageEl.current.scrollHeight
        } 
        }}><BsFillChatDotsFill style={{height: '1.5em' ,width: '1.5em'}}/></Button>
        </div>
        <Modal
            size="sm"
            show={smShow}
            onShow={() => {
                messageEl.current.scrollTop = messageEl.current.scrollHeight
            }}
            onHide={() =>{
                setMsgCount(prev => {
                return {...prev,text:'', count: newMessages.length}
                });
                 setSmShow(false)}}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton={()=> console.log('sdcsf')} >
            <Modal.Title id="example-modal-sizes-title-sm">
                Chat
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="chatContainer" ref={messageEl}>
            {newMessages.map((newmessage,i) => {
                if(newmessage.color === color){
                    return <div key={i} className='timeCont'> <span style={{fontSize: '10px',color:'gray',paddingRight: '3px'}}>{newmessage.time}  </span><div className="messages user" > {newmessage.message}</div></div>
                } else {
                    return <div key={i} className='receiveCont '>
                    <span className='receiveSpan' style={{background: newmessage.color}} >{newmessage.name[0]} </span>
                    <div className="messages receive">{newmessage.message} </div>
                    <span style={{fontSize: '10px',color:'gray',paddingLeft: '3px'}}>{newmessage.time}</span>
                    </div>
                }
            })}
            </div> 
           
            <Form  onSubmit={(e) => sendMessage(e)} >
            <hr style={{marginBottom: '5px',marginTop: '5px'}}/>
            <Row className="align-items-center">
            <Col sm={8} className="my-1">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                    Chat Input
                </Form.Label>
                <FormControl
                id="message input" value={message} onChange={(e) => {setMessage(e.target.value)}}
                placeholder="Type here..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                </Col>
                 <Col xs="auto" className="my-1">
                <Button variant="outline-success" type='submit'>
                Send
                </Button>
                </Col>
              </Row>
            </Form>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default Chat