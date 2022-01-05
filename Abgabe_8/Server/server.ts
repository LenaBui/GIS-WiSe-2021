import * as http from 'http';
import * as mongo from "mongodb";

const hostname: string = "127.0.0.1"; // localhost
const port: number = 3000;
const mongoUrl: string = "mongodb://localhost:27017"; // für lokale MongoDB
let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);

async function dbFind(
    db: string,
    collection: string,
    requestObject: any,
    response: http.ServerResponse
  ) {
    await mongoClient.connect();
    let result = await mongoClient
      .db(db)
      .collection(collection)
      .find(requestObject)
      .toArray();
    // console.log(result, requestObject); // bei Fehlern zum Testen
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(result));
  }

const server: http.Server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {
        let url = new URL(request.url, 'http://localhost:3000/');
        let res = 'ERROR';
        //protocol     hostname   port         path             params
        //                                                   key = value
        //http://   localhost   :3000      /convertDate     ?date=2020-10-01
        switch (url.pathname) {
            case '/':
                switch (request.method) {
                    case "GET":
                      await dbFind(
                        "university",
                        "student",
                        {
                            _id: new mongo.ObjectId(url.searchParams.get("_id")), // von String zu Zahl konvertieren
                        },
                        response
                      );
                      break;
                      
                res = returnAvailable();
                break;
            case '/convertDate':
                res = returnConvert(url.searchParams.get('date'));
                break;
        }
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.setHeader('Access-Control-Allow-Origin', '*'); // bei CORS Fehler */
        response.end(res);
    }
);

function returnConvert(param: string) {
    if (!param) {
        return 'ERROR';
    }
    let date = new Date(param);
    //https://flaviocopes.com/how-to-get-month-from-javascript-date/
    return `Day: ${date.getDate()}, Month: ${date.toLocaleString('default', {month: 'long'})}, Year: ${date.getFullYear()}`;
}

function returnAvailable() {
    return 'Server erreichbar';
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
