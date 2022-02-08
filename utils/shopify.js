import Client from "shopify-buy";

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: "the-karhu-assignment-btriboi.myshopify.com",
  storefrontAccessToken: "d3a36bf1896af29335727b42acde0428",
});

export { client };
