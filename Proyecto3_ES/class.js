const url = require('url');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var route = {
    routes:{},
    for: function(path,handler){
        this.routes[path] = handler;
    }
};

class User{

    constructor(id, firstName, lastName, age, country,){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
    }
}

const allUsers = [
    new User(1939, "Bruce", "Wayne", 33, "Gothica"),
    new User(1938, "Clark", "Kent", 35, "Kansas"),
    new User(1942, "Diana", "Prince", 30, "Temiscira"),
    new User(1940, "Barry", "Allen", 33, "Starcity"),
    new User(1941, "Hal", "Jordan", 32, "Starcity"),
];

route.for("/users", function(request,response){
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(allUsers));
});


const server = http.createServer((request, response) => {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for: " + pathname + " received");

    if(typeof route.routes[pathname] === 'function'){
        route.routes[pathname](request,response);
    }
    else{
       response.writeHead(404,{"Content-Type": "text/plain"});
       response.end("404 Not Found!");
    }


});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/ `);
});