var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
    res.json({
        "ResponseHeader": {
            "ResponseDateTime": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            "StatusCode": 0,
            "StatusMessage": "SUCCESS"
        },
        "TransactionInfoList": [{
                "AgentId": 1094012,
                "BeneficiaryFullName": "Moises Rivera",
                "CanceledBy": 0,
                "CanceledDateTime": null,
                "ConfirmedBy": 0,
                "ConfirmedDateTime": null,
                "CountryFrom": null,
                "CountryTo": null,
                "CustomerExpCode": 0,
                "CustomerTelNo": null,
                "IsComplianceLegal": false,
                "IsComplianceOps": false,
                "IsHighValueCustomer": null,
                "IsKrogerToKroger": false,
                "IsOfflineCorresp": false,
                "IsOnLegalHold": false,
                "IsOnhold": false,
                "IsPosted": false,
                "IsReadyForPayAgent": false,
                "IsResend": false,
                "IsResendError": false,
                "IsToCancel": false,
                "OrderDate": "2022-08-02T09:51:29.060",
                "OrderId": 1510911416,
                "OrderNumber": null,
                "OrderReferenceNumber": "12013788835",
                "OrderStatus": "RECVD",
                "PaidBy": 0,
                "PaidDateTime": null,
                "PayAgentId": 0,
                "PayAgentLocID": 0,
                "PayCurrency": null,
                "PayoutAmount": {
                    "Amount": 392,
                    "CurrencyCode": "USD",
                    "CurrencyDescription": "Dollars"
                },
                "PayoutCity": "San Salvador",
                "PayoutState": "SS",
                "RecAgentLocationId": 0,
                "SendAmount": {
                    "Amount": 392,
                    "CurrencyCode": "USD",
                    "CurrencyDescription": "Dollars"
                },
                "SendCurrency": null,
                "SenderFullName": "Moises Rivera Bolanos  ",
                "StatusTime": "2022-08-02T10:54:22.220",
                "ToCancelbyDesc": null,
                "VoidedBy": 0,
                "VoidedDateTime": null
            },
            {
                "AgentId": 1094012,
                "BeneficiaryFullName": "Hilda Rivera Bolanos",
                "CanceledBy": 0,
                "CanceledDateTime": null,
                "ConfirmedBy": 0,
                "ConfirmedDateTime": null,
                "CountryFrom": null,
                "CountryTo": null,
                "CustomerExpCode": 0,
                "CustomerTelNo": null,
                "IsComplianceLegal": false,
                "IsComplianceOps": false,
                "IsHighValueCustomer": null,
                "IsKrogerToKroger": false,
                "IsOfflineCorresp": false,
                "IsOnLegalHold": false,
                "IsOnhold": false,
                "IsPosted": false,
                "IsReadyForPayAgent": false,
                "IsResend": false,
                "IsResendError": false,
                "IsToCancel": false,
                "OrderDate": "2022-07-17T08:30:36.663",
                "OrderId": 1362370816,
                "OrderNumber": null,
                "OrderReferenceNumber": "5100015140040",
                "OrderStatus": "RECVD",
                "PaidBy": 0,
                "PaidDateTime": null,
                "PayAgentId": 0,
                "PayAgentLocID": 0,
                "PayCurrency": null,
                "PayoutAmount": {
                    "Amount": 100,
                    "CurrencyCode": "USD",
                    "CurrencyDescription": "Dollars"
                },
                "PayoutCity": "San Salvador",
                "PayoutState": "SS",
                "RecAgentLocationId": 0,
                "SendAmount": {
                    "Amount": 100,
                    "CurrencyCode": "USD",
                    "CurrencyDescription": "Dollars"
                },
                "SendCurrency": null,
                "SenderFullName": "Moises Rivera Bolanos  ",
                "StatusTime": "2022-07-18T14:32:35.000",
                "ToCancelbyDesc": null,
                "VoidedBy": 0,
                "VoidedDateTime": null
            }
        ]
    });
});

//app.listen(process.env.PORT || 5000) () => {
//console.log("Server running on port 5000");
//});

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'THANKS NIKO'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});