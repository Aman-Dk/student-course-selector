const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://student-courseselector-backend.herokuapp.com',
      changeOrigin: true,
    })
  );
};

// module.exports = function(app) {
//   app.use(createProxyMiddleware('/api', {
//     target: "http:localhost:8080/",
//     changeOrigin: true,
//     pathRewrite: {
//                 '^/api/': '/', // remove base path
//             }
//     } ));
// };