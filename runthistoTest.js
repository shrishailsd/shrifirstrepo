var express = require("express");
var app = express();


app.get("/url", (req, res, next) => {
    res.status(200).json({
        "AddressLine1": "3505 Fifth St",
        "AddressLine2": "APt 8",
        "BankAccountNumber": "",
        "BankAccountTypeCode": 0,
        "BankName": "",
        "BankRoutingNumber": "",
        "BirthDate": "19610704",
        "CardNumber": "1100800194873726",
        "CardReimbAvail": false,
        "City": "jackson height",
        "Country": "US",
        "DentalCoverage": "",
        "DentalID": "",
        "Division": "Division 1",
        "DriverLicenceNumber": "",
        "EligibilityDate": "20180717",
        "Email": "sriram.ramanujam@gmail.com",
        "EmployeeSSN": "184594822",
        "EmployeeStatus": 2,
        "EmployerName": "THE ABC TEST GROUP",
        "EndStageRenalDisease": false,
        "FirstName": "michael",
        "Gender": 1,
        "HealthPlanID": "",
        "HealthcareCoverageDefault": "",
        "HearingCoverage": "",
        "HighDeductableHealthPlanEligible": false,
        "HospitalCoverage": "",
        "LastName": "AYRES",
        "LastUpdated": "/Date(1668610288050-0600)/",
        "MaritalStatus": 0,
        "MedicalCoverage": "",
        "MedicareBeneficiary": 0,
        "MedicareID": "",
        "MiddleInitial": "",
        "MobileNumber": "",
        "MotherMaidenName": "",
        "PBMID": "",
        "PersonCode": "",
        "PharmacyCoverage": "",
        "Phone": "423-424-6176",
        "Prefix": "",
        "ProcessingNotes": "",
        "ReimbursementMethod": 1,
        "ReimbursementMethodList": [{
                "Description": "None",
                "ReimbursementMethod": 0
            },
            {
                "Description": "Check",
                "ReimbursementMethod": 1
            },
            {
                "Description": "Direct Deposit",
                "ReimbursementMethod": 2
            }
        ],
        "Remarks": "",
        "ShippingAddressCity": "",
        "ShippingAddressCountry": "",
        "ShippingAddressLine1": "",
        "ShippingAddressLine2": "",
        "ShippingAddressState": "",
        "ShippingAddressZip": "",
        "State": "NY",
        "TerminationDate": "        ",
        "UserDefinedField": "",
        "VisionCoverage": "",
        "VisionID": "",
        "Zip": "11372",
        "BankAcctValStatus": 0,
        "BankAcctValStatusDesc": "",
        "CarrierName": "",
        "MedicalDed": 0,
        "MedicalDedPtd": 0
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
    var result = 'SHRISHAIL APP'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});