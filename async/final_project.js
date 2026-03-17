const postsContainer =document.getElementById("posts");
const loading = document.getElementById("loading");

async function fetchposts(){
    try{
      const response= await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok){ 
         throw new error ("network response was not ok");
      }
        const posts = await response.json();
        console.log(posts);
        displayPosts(posts);
    }catch (error){

    }
}
function displayPosts(data){
            loading.style.display="none";
            data.forEach(post => {
                const li = document.createElement("li");
                li.textContent = post.title;
                postsContainer.appendChild(li);
                
            });
 }
fetchposts();
