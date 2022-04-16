import fetch from "node-fetch";

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        const firstUser = users[0];
        //console.log(firstUser);
        return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id);
    })
    .then(res => res.json())
    .then(posts => console.log(posts));