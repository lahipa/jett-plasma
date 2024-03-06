import httpProxy from "http-proxy";

const API_URL = process.env.APP_BACKEND;
const proxy = httpProxy.createProxyServer();

// Make sure that we don't parse JSON bodies on this route:
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function handler (req, res) {
  return new Promise((resolve, reject) => {
    req.url = req.url.replace(/^\/api/, "");

    proxy.web(req, res, {
        target: API_URL,
        autoRewrite: false,
        changeOrigin: true
    }, (err) => {
      if (err) return reject(err);

      resolve();
    });
  });
};
