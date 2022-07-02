

const APIALBUMS = "https://jsonplaceholder.typicode.com/users/1/albums";
const APIUSERS = 'https://jsonplaceholder.typicode.com/users';


function filterId(idValue, albumsValue){
    let id = idValue;
    let albums = albumsValue;
    return albums.filter(x => x.id === id);
}

async function getAlbums(identidad,cb){
    let id = identidad;
    let callback = cb; 
    let data = await callback(APIALBUMS);
    let albums = [...data];
    let filtered = filterId(id,albums)
    console.log(filtered);
}

async function getUsers (subfun){
    let data = await subfun(APIUSERS)
    let copy = [...data]
        mapUsers(copy);
}


async function form1 (endpoint){
    return fetch(endpoint)
    .then (response => response.json())
    .then (data => data);
}


async function form2 (endpoint){
    const json = await fetch(endpoint);
    const data = await json.json();
    return data;
}


function mapUsers(copy){
    let newArray = [];
    console.log(copy);
    copy.map(x =>{
        console.log(x);
        let response = 
        {
         address: {
         city: x.address.city,
         geo: x.address.geo,
         street: x.address.street,
         suite: x.address.suite
        },
         company: x.company,
         email: x.email,
         id: x.id,
         name: x.name,
         username: x.username,
         website: x.website
        }

        newArray.push(response);
    });
    console.log(newArray);
}






getUsers(form1);
getAlbums(1, form2);

