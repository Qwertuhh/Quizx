import "./envConfig.ts";

const env = ({
  modelCredentials: {
    apiKey: process.env.AIMODEL_API_KEY || "AIzaSyBixgokLwIPw4oHZ9K5AB0OcxPYDcAtT10",
  }
});

export default env