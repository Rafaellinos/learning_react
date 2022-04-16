import fetch from "node-fetch";

const myAsyncFunc = async () => {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersResponse.json();
    const secordUser = users[0];
    //console.log(secordUser);
    const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + secordUser.id);
    const posts = await postResponse.json();
    console.log(posts);
}

myAsyncFunc();