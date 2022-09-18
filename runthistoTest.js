var express = require("express");
var app = express();





app.get("/url", (req, res, next) => {
    res.status(500).json({
        "Code": 500,
        "Description": "Card not Found",
        "Id": -1,
        "Module": "servicesparticipantcards"
    });


});
// res.json({ message: 'Category inserted' });
/* res.json({
     "conversation": [{
             "bot": {
                 "confidence": 1.0,
                 "intentId": "projects/corp-webex-cloud-prd/locations/global/agent/intents/0b9ae9c1-93ed-496d-8c6e-2385a71cc181",
                 "intentName": "Default Welcome Intent",
                 "parameters": {

                 },
                 "reply": "Please speak or enter your employee Number.  If you don't know your employee number speak or enter 0.",
                 "timestamp": 1661452043426
             },
             "customer": {
                 "query": "Hello",
                 "sentiment": 0.0,
                 "timestamp": 1661452043426
             }
         },
         {
             "bot": {
                 "confidence": 1.0,
                 "intentId": "projects/corp-webex-cloud-prd/locations/global/agent/intents/a9b571f5-9bae-412b-8156-46d80fc4d18e",
                 "intentName": "getEmployeeNumber",
                 "parameters": {
                     "employeeNumber": "135092"
                 },
                 "reply": "<speak>The number you entered is <say-as interpret-as=characters>135092</say-as>. Is this correct? If so, say yes or press 1. If not, say no, or press 2.</speak>",
                 "timestamp": 1661452051215
             },
             "customer": {
                 "query": "1350 92",
                 "sentiment": 0.0,
                 "timestamp": 1661452051215
             }
         },
         {
             "bot": {
                 "confidence": 1.0,
                 "intentId": "projects/corp-webex-cloud-prd/locations/global/agent/intents/94183fe0-671b-4f0f-bcd7-4853ad1b2883",
                 "intentName": "Handled Intent",
                 "parameters": {
                     "employeeNumber": "135092",
                     "option0": "",
                     "yesno": "yes"
                 },
                 "reply": "Thank You.",
                 "timestamp": 1661452056459
             },
             "customer": {
                 "query": "yes",
                 "sentiment": 0.0,
                 "timestamp": 1661452056459
             }
         }
     ]
 });*/



//app.listen(process.env.PORT || 5000) () => {
//console.log("Server running on port 5000");
//});

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'PARASHAR APP'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});