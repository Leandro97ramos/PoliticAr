


const usr = {
  name: 'lean@gmail.com',
  password: '1234',
}

//all posts in the page

const dataUser = () => {

  //obtengo los inputs inp
  let inps = document.querySelectorAll('.inp');


  inps.forEach(inp => {
    inp.addEventListener('keyup', () => {
      //quito los labels
      let label = inp.nextElementSibling;
      if (inp.value.length > 0) {
        label.style.display = 'none';
      } else {
        label.style.display = 'block';
      }
    })
  })

}

const verifLogin = () => {
  let btn = document.querySelector('.btn-submit');
  //verifico si el user.name y el user.password esta en el input
  btn.addEventListener('click', () => {
    let user = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    if (user == usr.name && pass == usr.password) {
      //auth = 1
      localStorage.setItem('auth', 1);

      window.location.href = 'postVotacion.html';
    } else {

      alert('Usuario o contraseña incorrectos');

    }
  })
}

const verifRegister = () => {


  let email = document.getElementById('email');
  //verifico que el password tenga una letra y tenga min 8 caracteres
  let pass = document.getElementById('password');


  pass.addEventListener('keyup', () => {
    let passValue = pass.value;
    //pass > 8 caracteres
    if (passValue.length >= 8 && passValue.match(/[A-Z]/)) {
      // Aplico el estilo al input
      pass.style.border = '1px solid green';
    } else {
      //el border del input se pone rojo
      pass.style.border = '1px solid red';


    }
  });

  email.addEventListener('keyup', () => {
    let emailValue = email.value;
    //pass > 8 caracteres
    if (emailValue.length > 0 && emailValue.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
      // Aplico el estilo al input
      email.style.border = '1px solid green';
    } else {
      //el border del input se pone rojo
      email.style.border = '1px solid red';
    }
  })

  let btn = document.querySelector('.btn-submit');
  btn.addEventListener('click', () => {
    localStorage.setItem('auth', 1);
    if (email.value.length <= 0 && pass.value.length <= 0) {
      alert('Complete los campos');
    } else {
      window.location.href = 'postVotacion.html';
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
  btnA.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Color del botón
      btn.style.color = '#4EA37C';

      // Obtener el contenedor del botón clickeado
      let containerId = btn.closest('.cont').id;
      let containerElements = elemsByContainer[containerId];
      // Verificar si todos los elementos del contenedor tienen el mismo color
      if (checkAllElementsColor(containerElements, 'rgb(78, 163, 124)')) {
        // Aplicar el mismo color al texto del botón
        let dropdownBtn = btn.closest('.cnt-opt').querySelector('.dropdown-btn');
        dropdownBtn.style.color = '#4EA37C';
        // le sumo 1 al valor del auth
        let auth = localStorage.getItem('auth');
        auth++;
        localStorage.setItem('auth', auth);

      }
    });
  });
};

const funPost = () => {
  let posts = document.querySelectorAll('#post');
  posts.forEach(post => {
    post.addEventListener('click', () => {
      let contenido = post.querySelector('.content-article');
      let tam = contenido.scrollHeight * 10;
      //remove active class from all posts
      if (post.classList.contains('active')) {
        post.classList.remove('active');
      } else {
        post.classList.add('active');
        contenido.style.maxHeight = tam + 'px';
      }
    })
  });

  let btnVotar = document.querySelectorAll('.btn-votar');
  let isAuth = localStorage.getItem('auth');
  btnVotar.forEach(btn => {
    btn.addEventListener('click', () => {
      if (isAuth != null) {
        //cambio el texto del boton
        btn.innerHTML = 'Votado';
        //cambio el color del borde del boton
        btn.style.border = '2px solid #4EA37C';
        

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
  // document.addEventListener("DOMContentLoaded", function() {
  getAuth();
  // });
  let menu = document.getElementById('menu');
  let close = document.getElementById('close');
  let opMenu = document.getElementById('opt-menu');
  //cerrar sesion
  let cerrarSesion = document.getElementById('cerrarSesion');



  document.getElementById('hambr').addEventListener('click', () => {
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
      menu.classList.add('active');
    }
  })

  cerrarSesion.addEventListener('click', () => {
    localStorage.removeItem('auth');
    window.location.href = 'index.html';
  })


}

const getAuth = () => {
  //obtengo el menu
  let menu = document.getElementById('menu');
  //obtengo el nivel de acceso
  let auth = localStorage.getItem('auth');

  //obtengo cnt-user
  let cntUser = document.getElementById('cnt-user');

  //obtengo el boton de crear post
  let btnCrearPost = document.getElementById('btnCrearPost');
  //obtengo el boton del post usuario
  let btnPostUser = document.getElementById('btnPostUser');
  //obtengo el boton de status de cuenta
  let btnStatusAccount = document.getElementById('btnStatusAccount');
  //btn cerrar sesion
  let btnCerrarSesion = document.getElementById('cerrarSesion');
  // btn iniciar sesion
  let btnIniciarSesion = document.getElementById('btnIniciarSesion');
  // btn registrarse
  let btnRegistrarse = document.getElementById('btnRegistrarse');


  if (menu != null) {

    if (auth == null) {
      cntUser.style.display = 'none';
      btnCrearPost.style.display = 'none';
      btnPostUser.style.display = 'none';

      btnStatusAccount.style.display = 'none';
      btnCerrarSesion.style.display = 'none';
      btnIniciarSesion.style.display = 'block';
      btnRegistrarse.style.display = 'block';
    }
    if (auth > 0) {
      btnPostUser.style.display = 'block';
      btnStatusAccount.style.display = 'block';
      btnCerrarSesion.style.display = 'block';
      btnIniciarSesion.style.display = 'none';
      btnRegistrarse.style.display = 'none';
    }
    if (auth > 1) {
      btnCrearPost.style.display = 'block';
    }


  }

}
const funVPost = () => {
  let btnVotar = document.querySelectorAll('.btn-ver');
  let isAuth = localStorage.getItem('auth');
  console.log("isAuth");
  btnVotar.forEach(btn => {
    btn.addEventListener('click', () => {
      if (isAuth > 1) {
        //href ./verPost.html
        window.location.href = '../pages/verPost.html'
      } else {
        console.log("no puedes votar");
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

const fnIndex = () => {
  let btnHist = document.getElementById('history');
  let primero = document.querySelector('.primero');

  btnHist.addEventListener('click', () => {
      //display block .primero
      if (primero.style.display == 'block') {
        primero.style.display = 'none';
      }else{
        primero.style.display = 'block';
      }

        
      })

}

const nav = () => {
  let URLactual = window.location.pathname.split('/').pop();

  //desabilito acciones
  getAuth()
  switch (URLactual) {

    case 'index.html':
        fnIndex();
      break;

    case 'crearPost.html':
      fncCrearPost();
      break;
    case 'postVotacion.html':
      funPost();
      menuHambr();
      break;

    case 'post.html':
      funVPost();
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
      verifLogin();
      dataUser();
      break;

    case 'register.html':
      verifRegister();
      dataUser();
      break;


    default:

      break;
  }
}
document.addEventListener('DOMContentLoaded', function () {

  nav();

});