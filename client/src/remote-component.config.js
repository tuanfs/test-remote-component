module.exports = {
  resolve: {
    react: require("react"),
    fallback: {http: require.resolve("stream-http")},
  },
}
