const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/assets',
    createProxyMiddleware({
      target: 'https://memate-website.s3.ap-southeast-2.amazonaws.com',
      changeOrigin: true,
      pathRewrite: {
        '^/assets': '/assets'
      }
    })
  );
};