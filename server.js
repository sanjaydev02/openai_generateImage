const express = require('express');
const dotenv = require('dotenv');
const { env } = require('dotenv');
dotenv.config();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apikey: process.env.OPENAI_API_KEY,
});
const Openai = new OpenAIApi(configuration);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;
app.use('/openai', require('./routes/openAiRoute'));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
