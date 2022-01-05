"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const hostname = "127.0.0.1"; // localhost
const port = 3000;
const server = http.createServer((request, response) => {
    let url = new URL(request.url, 'http://localhost:3000/');
    let res = 'ERROR';
    //protocol     hostname   port         path             params
    //                                                   key = value
    //http://   localhost   :3000      /convertDate     ?date=2020-10-01
    switch (url.pathname) {
        case '/':
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
});
function returnConvert(param) {
    if (!param) {
        return 'ERROR';
    }
    let date = new Date(param);
    //https://flaviocopes.com/how-to-get-month-from-javascript-date/
    return `Day: ${date.getDate()}, Month: ${date.toLocaleString('default', { month: 'long' })}, Year: ${date.getFullYear()}`;
}
function returnAvailable() {
    return 'Server erreichbar';
}
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//# sourceMappingURL=server.js.map