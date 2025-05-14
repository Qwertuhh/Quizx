import "./envConfig.ts";

const env = ({
  modelCredentials: {
    apiKey: process.env.AIMODEL_API_KEY,
  }
});

export default env