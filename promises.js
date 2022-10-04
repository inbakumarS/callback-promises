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
//getPosts();
/*function create4thPost(post,callback){
    setTimeout(() => {
      posts.push(post);
      callback();  
    }, 3000);
}*/

createPost({ title:'post three',body:'this is post three'}).then(getPosts).catch(err=>console.log(err));
create4thPost({title:'post four',body:'this is post four'},getPosts);

