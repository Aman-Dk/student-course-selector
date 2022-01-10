const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/*',
    createProxyMiddleware({
      target: 'https://student-courseselector-backend.herokuapp.com/',
      changeOrigin: true,
    })
  );
};