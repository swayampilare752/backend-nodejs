const http = require("node:http");


const dummyUsersData = {
    result: [
        {
            userid: 1,
            name: "Peter"
        },
        {
            userid: 2,
            name: "Tony"
        }
    ]
}
const dummyTodosData = {
    result: [
        {
            todoid: 1,
            title: "Lorem ipsum dor sit amet"
        }
    ]
}
const serverFn = (req, res) => {

//     console.log(req.url);                  /// use req when client wants to req  and use req.url to know which url is currently being  requested or being hit
//     console.log("Request Required");
//     res.writeHead (200, {
//     "Content-Type": "application/json"
// })
    console.log(req.url);
    console.log("Request received");

    if (req.url == "/todos") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        if (req.method == "GET") {
            res.end(JSON.stringify(dummyTodosData));
        } else if (req.method == "POST") {
            res.end(JSON.stringify({ message: "Dummy Post Todo API " }))
        }
    } else if (req.url == "/users") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        res.end(JSON.stringify(dummyUsersData))
    } else {
        res.writeHead(404, {
            "Content-Type": "application/json"
        })
        res.end(JSON.stringify({
            result: []
        }))
    };


  
};
const Server = http.createServer(serverFn);

Server.listen(8080, () => console.log("Server is Up and Running at Port 8080"));