var express = require("express");
var app = express();


app.get("/url", (req, res, next) => {
    res.status(200).json({
        "feed": {
            "id": "h1ttps://my343994.crm.ondemand.com/sap/c4c/odata/v1/c4codataapi/CorporateAccountAddressCollection",
            "title": {
                "_type": "text",
                "__text": "CorporateAccountAddressCollection"
            },
            "updated": "2022-12-06T19:30:39Z",
            "author": {
                "name": ""
            },
            "link": [{
                "_href": "CorporateAccountAddressCollection",
                "_rel": "self",
                "_title": "CorporateAccountAddressCollection"
            }],
            "entry": {
                "id": "https://my343994.crm.ondemand.com/sap/c4c/odata/v1/c4codataapi/CorporateAccountAddressCollection('000C2966A9E01EDAB2E9AB1D307DE3A7')",
                "title": {
                    "_type": "text",
                    "__text": "CorporateAccountAddressCollection('000C2966A9E01EDAB2E9AB1D307DE3A7')"
                },
                "updated": "2022-12-06T19:30:39Z",
                "category": {
                    "_term": "c4codata.CorporateAccountAddress",
                    "_scheme": "http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"
                },
                "link": [{
                        "_href": "CorporateAccountAddressCollection('000C2966A9E01EDAB2E9AB1D307DE3A7')",
                        "_rel": "edit",
                        "_title": "CorporateAccountAddress"
                    },
                    {
                        "_href": "CorporateAccountAddressCollection('000C2966A9E01EDAB2E9AB1D307DE3A7')/CorporateAccount",
                        "_rel": "http://schemas.microsoft.com/ado/2007/08/dataservices/related/CorporateAccount",
                        "_type": "application/atom+xml;type=entry",
                        "_title": "CorporateAccount"
                    }
                ],
                "content": {
                    "properties": {
                        "ObjectID": {
                            "__text": "000C2966A9E01EDAB2E9AB1D307DE3A7"
                        },
                        "ParentObjectID": {
                            "text": "hello"
                        },
                        "AccountID": {
                            "__text": "800000094"
                        },
                        "UUID": {
                            "__text": "000C2966-A9E0-1EDA-B2E9-AB1D307DE3A7"
                        },
                        "MainIndicator": {
                            "__text": "true"
                        },
                        "ShipTo": {
                            "__text": "true"
                        },
                        "DefaultShipTo": {
                            "__text": "true"
                        },
                        "BillTo": {
                            "__text": "true"
                        },
                        "DefaultBillTo": {
                            "__text": "true"
                        },
                        "FormattedPostalAddressDescription": {
                            "__text": "10 IMATHIAS STR., GERAKAS / 15344 ATHENS / GR"
                        },
                        "FormattedAddressFirstLineDescription": {
                            "__text": "CONTROL HELLAS AL.N. LYKOUDIS & SIA"
                        },
                        "FormattedAddressSecondLineDescription": {
                            "__text": "10 IMATHIAS STR., GERAKAS"
                        },
                        "FormattedAddressThirdLineDescription": {
                            "__text": "15344 ATHENS"
                        },
                        "FormattedAddressFourthLineDescription": {
                            "__text": "Greece"
                        },
                        "FormattedPostalAddressFirstLineDescription": {
                            "__text": "10 IMATHIAS STR., GERAKAS"
                        },
                        "FormattedPostalAddressSecondLineDescription": {
                            "__text": "15344 ATHENS"
                        },
                        "FormattedPostalAddressThirdLineDescription": {
                            "__text": "Greece"
                        },
                        "CountryCode": {
                            "__text": "GR"
                        },
                        "CountryCodeText": {
                            "__text": "Greece"
                        },
                        "StateCode": {},
                        "StateCodeText": {},
                        "CareOfName": {},
                        "AddressLine1": {},
                        "AddressLine2": {},
                        "HouseNumber": {},
                        "AdditionalHouseNumber": {},
                        "Street": {
                            "__text": "10 IMATHIAS STR., GERAKAS"
                        },
                        "AddressLine4": {},
                        "AddressLine5": {},
                        "District": {},
                        "City": {
                            "__text": "ATHENS"
                        },
                        "DifferentCity": {},
                        "StreetPostalCode": {
                            "__text": "15344"
                        },
                        "County": {},
                        "CompanyPostalCode": {},
                        "POBoxIndicator": {
                            "__text": "false"
                        },
                        "POBox": {},
                        "POBoxPostalCode": {},
                        "POBoxDeviatingCountryCode": {},
                        "POBoxDeviatingCountryCodeText": {},
                        "POBoxDeviatingStateCode": {},
                        "POBoxDeviatingStateCodeText": {},
                        "POBoxDeviatingCity": {},
                        "TimeZoneCode": {
                            "__text": "EET"
                        },
                        "TimeZoneCodeText": {
                            "__text": "(UTC+02:00) Eastern European"
                        },
                        "Latitude": {
                            "__text": "0.00000000000000"
                        },
                        "Longitude": {
                            "__text": "0.00000000000000"
                        },
                        "Building": {},
                        "Floor": {},
                        "Room": {},
                        "Phone": {
                            "__text": "+30 2106047715"
                        },
                        "NormalisedPhone": {
                            "__text": "+302106047715"
                        },
                        "Mobile": {},
                        "NormalisedMobile": {},
                        "Fax": {
                            "__text": "+30 2106047714"
                        },
                        "Email": {
                            "__text": "info@controlhellas.gr"
                        },
                        "WebSite": {
                            "__text": "www.controlhellas.gr"
                        },
                        "LanguageCode": {
                            "__text": "EN"
                        },
                        "LanguageCodeText": {
                            "__text": "English"
                        },
                        "BestReachedByCode": {},
                        "BestReachedByCodeText": {},
                        "ETag": {
                            "__text": "2022-03-17T11:49:07.1765380Z"
                        }
                    },
                    "_type": "application/xml"
                },
                "_m:etag": "W/\"datetimeoffset'2022-03-17T11%3A49%3A07.1765380Z'\""
            },
            "_xmlns": "http://www.w3.org/2005/Atom",
            "_xmlns:m": "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
            "_xmlns:d": "http://schemas.microsoft.com/ado/2007/08/dataservices",
            "_xml:base": "https://my343994.crm.ondemand.com/sap/c4c/odata/v1/c4codataapi/"
        }
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