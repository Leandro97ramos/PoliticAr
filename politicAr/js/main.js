


//all posts in the page

let posts = document.querySelectorAll('#post');

posts.forEach(post => {
  post.addEventListener('click', () => {
    console.log(post);
    let contenido = post.querySelector('.content-article');

    //remove active class from all posts
    if (post.classList.contains('active')) {
      post.classList.remove('active');
      console.log(contenido.offsetHeight);
      post.style.maxHeight = contenido.offsetHeight + 'em';
  
    } else {
      post.classList.add('active');
      
      post.style.maxHeight = contenido.offsetHeight + 'em';

    }
    
  })

});


