const fs = require('fs');
const google = require('googleapis');
const express = require('express');
const app = express();
const OAuth2Data = require('../credentials.json');

const CLIENT_ID = OAuth2Data.client_id;
const CLIENT_SECRET = OAuth2Data.client_secret;
// const REDIRECT_URL = OAuth2Data.client.redirect


const port = process.env.port || 5000;
app.listen(port, () => console.log(`Express server running at ${port}`));
