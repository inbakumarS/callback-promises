const posts=[
    {title:'post one', body:'this is post one'},
    {title:'post two', body:'this is post two'},

];

function getPosts(){
    setTimeout(()=>{
  let output='';
  posts.forEach((post,index)=>{
output += `<li>${post.title}</li>`;
  });
  document.body.innerHTML= output;
    },1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{

    
    setTimeout(() => {
        posts.push(post);
    const error =false;
    //const error=true;

    if(!error){
        resolve();
    }else{
        reject('Error:something went wrong')
    }

    }, 2000);
});
}

function deletepost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop());
            }

            else {
                reject('array is Empty')
            }
        }, 1000)
    })
}

createPost({ title: "post three", body: 'this is post three' }).then(getPosts);

createPost({ title: 'post four', body: 'this is post four' })
    .then(() => {

        getPosts();
        deletepost().then((delElmt) => {
            console.log(delElmt)
            getPosts();
            deletepost().then(() => {
                getPosts();
                deletepost().then(() => {
                    getPosts();
                    deletepost().then(() => {

                        getPosts();
                        deletepost().then(() => { }).catch((err) => {
                            console.log('Cache Block', err);
                        })
                    })
                }).catch((err) => { })

            }).catch((err) => { })
        })


    }).catch(err => console.log(err))