export const clientConfig = {
  entry: ["./client.js"],
  output: {
    filename: "ssrClient.js",
    path: path.join(__dirname, "./build/client")
  }
};
