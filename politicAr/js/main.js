


const usr = {
  name: 'lean@gmail.com',
  password: '1234',
}

//all posts in the page

const logUser = () => {
  let btn = document.querySelector('.btn-login');

  //obtengo los inputs inp
  let inps = document.querySelectorAll('.inp');
  console.log(inps);


  inps.forEach(inp => {
    console.log(inp);

    inp.addEventListener('keyup', () => {
      //quito los labels
      let label = inp.nextElementSibling;
      console.log(label);
      if (inp.value.length > 0) {
        label.style.display = 'none';
      } else {
        label.style.display = 'block';
      }
    })
  })

  btn.addEventListener('click', () => {
    let user = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    console.log(usr.name);
    if (user == usr.name && pass == usr.password) {
      localStorage.setItem('user', user);
      window.location.href = 'postVotacion.html';
    } else {

      alert('Usuario o contraseña incorrectos');

    }


  })
}

function showOpts() {
  let dropdownBtns = document.querySelectorAll('.dropdown-btn');
  dropdownBtns.forEach((dropdownBtn) => {
    dropdownBtn.addEventListener('click', () => {
      let dropdownContent = dropdownBtn.nextElementSibling;
      if (dropdownContent.style.display === 'none') {
        dropdownContent.style.display = 'block';
      } else {
        dropdownContent.style.display = 'none';
      }
    });
  });

}

// Función para verificar si todos los elementos tienen el mismo color en un contenedor
const checkAllElementsColor = (containerElements, color) => {
  // Verificar si todos los elementos del contenedor tienen el mismo color
  for (let i = 0; i < containerElements.length; i++) {
    let computedStyle = window.getComputedStyle(containerElements[i]);
    if (computedStyle.color !== color) {
      return false;
    }
  }
  return true;
};

const statAccount = () => {
  showOpts();

  let conts = document.querySelectorAll('.cont');
  let elemsByContainer = {};
  let btnA = [];
  conts.forEach((cont) => {
    let a = cont.querySelectorAll('.opt');
    btnA.push(...a);
    elemsByContainer[cont.id] = Array.from(a);
  });
  console.log(elemsByContainer);
  btnA.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Color del botón
      btn.style.color = '#22aa55';

      // Obtener el contenedor del botón clickeado
      let containerId = btn.closest('.cont').id;
      let containerElements = elemsByContainer[containerId];

      // Verificar si todos los elementos del contenedor tienen el mismo color
      if (checkAllElementsColor(containerElements, 'rgb(34, 170, 85)')) {
        // Aplicar el mismo color al texto del botón
        let dropdownBtn = btn.closest('.cnt-opt').querySelector('.dropdown-btn');
        dropdownBtn.style.color = '#22aa55';
      }
    });
  });
};

const funPost = () => {
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

  let btnVotar = document.querySelectorAll('.btn-votar');
  let isAuth = localStorage.getItem('user');
  btnVotar.forEach(btn => {
    btn.addEventListener('click', () => {
      if (isAuth) {
        //cambio el texto del boton
        btn.innerHTML = 'Votado';
        //cambio el color del boton
        btn.style.backgroundColor = '#4CAF50';

      } else {
        let err = document.getElementById('errorVotarPost');
        err.style.display = 'block';
        //modifico el height del div para que se vea el mensaje
        let altura = err.offsetHeight;
        err.style.height = altura + 'vh';
        //quito el scroll 
        document.body.style.overflow = 'hidden';
      }
    })
  })


}
function autosize() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
}
const fncCrearPost = () => {
  let textareas = document.querySelectorAll('textarea');
  textareas.forEach(textarea => {
    textarea.addEventListener('keydown', autosize);

  });

}



const menuHambr = () => {
  let menu = document.getElementById('menu');
  let close = document.getElementById('close');
  let opMenu = document.getElementById('opt-menu');
  //cerrar sesion
  let cerrarSesion = document.getElementById('cerrarSesion');
  console.log(opMenu);
  document.getElementById('hambr').addEventListener('click', () => {
    console.log("entro");
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    } else {
      menu.classList.add('active');
      menu.style.height = opMenu.offsetHeight + 'vh';
      document.body.style.overflow = 'hidden';

    }
  })
  close.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      document.body.style.overflow = 'auto';
    } else {
      console.log("agregando");
      menu.classList.add('active');
    }
  })

  cerrarSesion.addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
  })


}


const nav = () => {
  let URLactual = window.location.pathname.split('/').pop();
  switch (URLactual) {
    case 'crearPost.html':
      fncCrearPost();


      break;
    case 'postVotacion.html':
      funPost();
      menuHambr();
      break;

    case 'post.html':
      funPost();
      menuHambr();
      break;
    case 'cPost.html':
      menuHambr();
      break;
    case 'statusAccount.html':
      menuHambr();
      statAccount();
      break;
    case 'useGuide.html':
      menuHambr();
      break;

    case 'login.html':
      logUser();
      break;

    case 'verPost.html':
      menuHambr();
      break;
    default:

      break;
  }
}
nav();