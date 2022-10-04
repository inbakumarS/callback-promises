const promise1=Promise.resolve('hello world');
const promise2=10;
const promise3=new Promise((resolve,reject)=>
    setTimeout(resolve,2000,'GoodBye')
);

Promise.all([promise1,promise2,promise3]).then(values =>console.log(values));


const posts = [
    {
        title: 'post one',
        body: 'this is post one',
        createdAt: new Date().getTime()
    },

    {
        title: 'post two',
        body: 'this is a post two',
        createdAt: new Date().getTime()
    }
];

let intervelId;
function getPosts() {

    clearInterval(intervelId);
    intervelId = setInterval(() => {

        let output = '';

        for (let i = 0; i < posts.length; i++) {
            output += `<li>${posts[i].title} - last updated ${[new Date().getTime() - posts[i].createdAt] / 1000}</li>`;

        }
        console.log('timer running id =', intervelId);
        document.body.innerHTML = output;

    }, 1000)



}

function createpost(post, callback) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime() });
        callback();
    }, 2000)
}
function updatelastactivitytime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let time = new Date().getTime();
            resolve(time);
        }, 1000)
    })

}

Promise.all([createpost, updatelastactivitytime]).then(([createpostresolev, activityresolve]) => {
    console.log(activityresolve)
})