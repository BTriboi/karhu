module.exports = {
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com"],
  },
  distDir: "out",
};
