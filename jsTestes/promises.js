const myPromise = new Promise(
    (resolve, reject) => {
        if (true) {
            setTimeout(()=> {resolve('i have succeed')}, 100)
        } else {
            reject("i've failed");
        }
    }
)
    .then(res => {
        console.log(res);
        return res + '!!!!';
    }) 
    // it's possible to chain "then's" with the return, 
    // the return is warpped into a Promise
    .then(res => console.log(res))
    .catch(rejectValue => console.log(rejectValue))