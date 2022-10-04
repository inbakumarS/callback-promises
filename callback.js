const posts=[
    {title:'post one', body:'this is post one',createdAt:new Date().getTime(),editedAt:new Date().getTime()},
    {title:'post two', body:'this is post two',createdAt:new Date().getTime(),editedAt:new Date().getTime()},

];

function getPosts(){
    setInterval(()=>{
  let output='';
  posts.forEach((post,index)=>{
output += `<li>${post.title}-last updated ${(new Date().getTime()-post.createdAt)/1000}seconds ago</li>`;
//output += `<li>${post.title}-last edited ${(new Date().getTime()-post.editedAt)/1000}seconds ago</li>`;
  });
  document.body.innerHTML= output;
    },1000);
}

function createPost(post,callback){
    setTimeout(() => {
        posts.push({...post,createdAt: new Date().getTime()});
        callback();
    }, 2000);
}
//getPosts();
function create4thPost(post,callback){
    setTimeout(() => {
      posts.push({...post,createdAt: new Date().getTime()});
      callback();  
    }, 3000);
}

createPost({ title:'post three',body:'this is post three'}, getPosts);
create4thPost({title:'post four',body:'this is post four'},getPosts);