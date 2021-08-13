const  createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
    console.log(app)
  app.use(
    '/socket.io',
    createProxyMiddleware({
      target: 'https://shared-piano-backend.herokuapp.com',
      changeOrigin: true,
    })
  );
}; 