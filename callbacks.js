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

function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
//getPosts();
function create4thPost(post,callback){
    setTimeout(() => {
      posts.push(post);
      callback();  
    }, 3000);
}

createPost({ title:'post three',body:'this is post three'}, getPosts);
create4thPost({title:'post four',body:'this is post four'},getPosts);