const { createProxyMiddleware } = require('http-proxy-middleware');

class ProxyServices {
  static createProxy(target) {
    // Usa directamente la función createProxyMiddleware, no this.createProxyMiddleware
    return createProxyMiddleware({
      target: target,
      changeOrigin: true,
      pathRewrite: (path, req) => path.replace(req.baseUrl, ''),
      onProxyReq:(proxyReq, req) => {
        if (req.body && Object.keys(req.body).length){
            const bodyData = JSON.stringify(req.body);

            proxyReq.setHeader('Content-Type', 'application/json'); 
            proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
            proxyReq.write(bodyData);
        }
      }
    });
  }
}

module.exports = ProxyServices;

