
let express = require("express");

let server = express();



server.use(function (req, res, next) {
    console.log("URL is==>", req.url);
    console.log("Method is==>", req.method);
    console.log("base url is==>",req.baseUrl);
    console.log("connection remote address==>",req.connection.remoteAddress);
    console.log(("Connection remote port is===>",req.connection.remotePort));
    next();
});

server.get("/bulb", function (req, res, next) {
    res.send("Some response");
});
server.post("/bulb", function (req, res, next) {
    res.send("Some response");
});

server.put("/bulb", function (req, res, next) {
    res.send("Some response");
});

server.delete("/bulb", function (req, res, next) {
    console.log("URL is==>", req.url);
    console.log("Method is==>", req.method);
    req.send("Some response");
});




server.listen(3000, () => {
    console.log("server is running on 3000");
})