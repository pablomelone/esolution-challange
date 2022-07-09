

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
]


const requestListener = function(req,res){
    res.setHeader("Content-Type", "application/json");
    switch (req.url){
        case "/users":
            res.writeHead(200);
            res.end(JSON.stringify(allUsers));
            break;

        default:
            res.writheadn(404);
            res.end(JSON.stringify({error:"Not Found"}));    

    }

}




