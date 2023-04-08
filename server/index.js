// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { faNetworkWired } = require('@fortawesome/free-solid-svg-icons');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(cors());
require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


app.post('/api/medicines', (req, res) => {
    const { medicines } = req.body;
  console.log(medicines);
  res.send(req.body);
  const now = new Date();
  const start = new Date(now.toDateString()+' '+medicines.StartTime);
  let delay = start.getTime() - now.getTime();
  console.log(delay);
  if(delay<0){
    delay=0;
  }

  setTimeout(() => {
      client.messages
  .create({
     body:"It is time to take your medicine " +  medicines.NameofMedicine,
     from: '+14068046817',
     to: '+919519769840'
   })
  .then(message => console.log(message.sid));
  },delay)

  });
  



  app.listen(process.env.PORT || 5000, function() {
    console.log("Server up and running at port 5000.");
  })