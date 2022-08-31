var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
    res.json({
        "prefixes": {
            "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
            "spi": "http://jazz.net/ns/ism/asset/smarter_physical_infrastructure#",
            "oslc": "http://open-services.net/ns/core#"
        },
        "oslc:responseInfo": {
            "oslc:nextPage": {
                "rdf:resource": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk?pageno=2&oslc.where=pluspcustomer.customer%3D%220010022960%22&oslc.pageSize=5&oslc.orderBy=-reportdate&oslc.select=ticketid%2Cclass%2Cstatus%2Csummary%2Creportdate%2Cdescription%2Cdescription_longdescription%2Cgbmserialnum%2Cpluspcustomer.customer%2Cpluspcustomer.name%2Ccommodity%2Ccommoditygroup%2Ccommodities.commodity%2Ccommodities.description%2Cpluspagreement%2Cticketuid%2Creportedbyname%2Creportedemail%2Creportedphone"
            },
            "totalPages": 66,
            "oslc:totalCount": 327,
            "pagenum": 1,
            "rdf:about": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk?oslc.where=pluspcustomer.customer=%220010022960%22&oslc.pageSize=5&oslc.orderBy=-reportdate&oslc.select=ticketid,class,status,summary,reportdate,description,description_longdescription,gbmserialnum,pluspcustomer.customer,pluspcustomer.name,commodity,commoditygroup,commodities.commodity,commodities.description,pluspagreement,ticketuid,reportedbyname,reportedemail,reportedphone"
        },
        "rdfs:member": [{
                "spi:ticketid": "IN1922986",
                "spi:status": "INPROGL1",
                "spi:class": "INCIDENT",
                "spi:description": "Tivoli Monitoring - Problemas de lentitud",
                "spi:reportedphone": "+50233128273",
                "spi:pluspagreement": "8040001200",
                "commodities": {
                    "commodity": "2040208",
                    "description": "TS-IT-PLATFORM-Support"
                },
                "spi:reportedemail": "djnunez@tigo.com.g",
                "spi:reportedbyname": "Dhixon Nuñez",
                "spi:commodity": "2040208",
                "pluspcustomer": {
                    "name": "COMUNICACIONES CELULARES S. A.",
                    "customer": "0010022960"
                },
                "rdf:about": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_SU5DSURFTlQvSU4xOTIyOTg2",
                "_rowstamp": "2438804103",
                "pluspcustomer_collectionref": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_SU5DSURFTlQvSU4xOTIyOTg2/pluspcustomer",
                "spi:description_longdescription": "Problemas en plataforma Tivoli, presentamos lentitud<br />SW: Tivoli Monitoring<br />Version:x<br />Sistema operativo: Red Hat<br /><br /><div>Cto: Dhixon Nuñez</div><div>Tel: +50233128273</div><div>Correo: djnunez@tigo.com.gt</div><div><br /></div><!-- RICH TEXT -->",
                "commodities_collectionref": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_SU5DSURFTlQvSU4xOTIyOTg2/commodities",
                "spi:class_description": "Incident",
                "spi:reportdate": "2022-08-29T14:37:58-05:00",
                "spi:commoditygroup": "TECHSOLUT",
                "spi:ticketuid": 3123058
            },
            {
                "spi:ticketid": "SR1200369",
                "spi:status": "QUEUED",
                "spi:class": "SR",
                "spi:description": "Tivoli service desk ambiente de desarrollo no levanta base de datos",
                "spi:reportedphone": "+50233124473",
                "spi:pluspagreement": "8040001200",
                "commodities": {
                    "commodity": "2040208",
                    "description": "TS-IT-PLATFORM-Support"
                },
                "spi:reportedemail": "vjones@tigo.com.gt",
                "spi:reportedbyname": "Virgil . Jones",
                "spi:commodity": "2040208",
                "pluspcustomer": {
                    "name": "COMUNICACIONES CELULARES S. A.",
                    "customer": "0010022960"
                },
                "rdf:about": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_U1IvU1IxMjAwMzY5",
                "_rowstamp": "2438817374",
                "pluspcustomer_collectionref": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_U1IvU1IxMjAwMzY5/pluspcustomer",
                "spi:description_longdescription": "<div>Tivoli service desk ambiente de desarrollo no levanta base de datos </div><div>contrato:  8040000584</div><div>+502-33124473 </div><div>correo: vjones@tigo.com.gt <br /></div><!-- RICH TEXT -->",
                "commodities_collectionref": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_U1IvU1IxMjAwMzY5/commodities",
                "spi:class_description": "Service Request",
                "spi:reportdate": "2022-08-29T12:19:29-05:00",
                "spi:commoditygroup": "TECHSOLUT",
                "spi:ticketuid": 3121328
            },
            {
                "spi:ticketid": "IN1887070",
                "spi:status": "CANCELED",
                "spi:class": "INCIDENT",
                "spi:description": "Tivoli service desk ambiente de desarrollo no levanta base de datos",
                "spi:reportedphone": "+50233124473",
                "spi:pluspagreement": "8040001200",
                "commodities": {
                    "commodity": "2040208",
                    "description": "TS-IT-PLATFORM-Support"
                },
                "spi:reportedemail": "vjones@tigo.com.gt",
                "spi:reportedbyname": "Virgil . Jones",
                "spi:commodity": "2040208",
                "pluspcustomer": {
                    "name": "COMUNICACIONES CELULARES S. A.",
                    "customer": "0010022960"
                },
                "rdf:about": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_SU5DSURFTlQvSU4xODg3MDcw",
                "_rowstamp": "2438538272",
                "pluspcustomer_collectionref": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_SU5DSURFTlQvSU4xODg3MDcw/pluspcustomer",
                "spi:description_longdescription": "<div>Tivoli service desk ambiente de desarrollo no levanta base de datos </div><div>contrato:  8040000584</div><div>+502-33124473 </div><div>correo: vjones@tigo.com.gt <br /></div><!-- RICH TEXT -->",
                "commodities_collectionref": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_SU5DSURFTlQvSU4xODg3MDcw/commodities",
                "spi:class_description": "Incident",
                "spi:reportdate": "2022-08-26T17:54:13-05:00",
                "spi:commoditygroup": "TECHSOLUT",
                "spi:ticketuid": 3086881
            },
            {
                "spi:ticketid": "IN1885400",
                "spi:status": "RESOLVED",
                "spi:class": "INCIDENT",
                "spi:description": "Tivoli Monitoring - Problemas de lentitud",
                "spi:reportedphone": "3312-4473.",
                "spi:pluspagreement": "8040001200",
                "commodities": {
                    "commodity": "2040208",
                    "description": "TS-IT-PLATFORM-Support"
                },
                "spi:reportedemail": "vjones@tigo.com.gt",
                "spi:reportedbyname": "Virgil jones",
                "spi:commodity": "2040208",
                "pluspcustomer": {
                    "name": "COMUNICACIONES CELULARES S. A.",
                    "customer": "0010022960"
                },
                "rdf:about": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_SU5DSURFTlQvSU4xODg1NDAw",
                "_rowstamp": "2433689704",
                "pluspcustomer_collectionref": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_SU5DSURFTlQvSU4xODg1NDAw/pluspcustomer",
                "spi:description_longdescription": "Problemas en plataforma Tivoli, presentamos lentitud  y los CPUs se encuentran excedidos<br />SW: Tivoli Monitoring<br />Version:x<br />Sistema operativo: Red Hat<br /><br />Telefono: 3312-4473<br />E-mail: vjones@tigo.com.gt<!-- RICH TEXT -->",
                "commodities_collectionref": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_SU5DSURFTlQvSU4xODg1NDAw/commodities",
                "spi:class_description": "Incident",
                "spi:reportdate": "2022-08-25T15:59:55-05:00",
                "spi:commoditygroup": "TECHSOLUT",
                "spi:ticketuid": 3084936
            },
            {
                "spi:ticketid": "SR1198230",
                "spi:status": "INPROGL1",
                "spi:class": "SR",
                "spi:description": "IBM Software - Solicitud de informacion.",
                "spi:reportedphone": "3227-2269",
                "spi:pluspagreement": "8040001200",
                "commodities": {
                    "commodity": "2040208",
                    "description": "TS-IT-PLATFORM-Support"
                },
                "spi:reportedemail": "jrojasm@tigo.com.gt",
                "spi:reportedbyname": "John Rojas",
                "spi:commodity": "2040208",
                "pluspcustomer": {
                    "name": "COMUNICACIONES CELULARES S. A.",
                    "customer": "0010022960"
                },
                "rdf:about": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_U1IvU1IxMTk4MjMw",
                "_rowstamp": "2420756031",
                "pluspcustomer_collectionref": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_U1IvU1IxMTk4MjMw/pluspcustomer",
                "spi:description_longdescription": "<div>Se requiere saber cual es la versión de Red Hat u Oracle Lnux en la que se puede instalar un &quot;Prove de FNMP TRAP&quot;</div><div> Contrato: 8040001200</div><div>SW; IBM JAZZ <br />Cto: John Rojas<br />Tel: 3227-2269<br />Correo: jrojasm@tigo.com.gt<br /></div><!-- RICH TEXT -->",
                "commodities_collectionref": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk/_U1IvU1IxMTk4MjMw/commodities",
                "spi:class_description": "Service Request",
                "spi:reportdate": "2022-08-18T11:04:01-05:00",
                "spi:commoditygroup": "TECHSOLUT",
                "spi:ticketuid": 3080018
            }
        ],
        "rdf:about": "https://controldesk.gbm.net/maxrest/oslc/os/mxwebexcctk"
    });
});

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