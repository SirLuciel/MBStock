// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
      {
        path: '/stock/',
        url: 'stock.html',
      },
      {
        path: '/index/',
        url: 'index.html',
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

var db = firebase.firestore();
var ColUsuarios = db.collection("USUARIOS");

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    alert('Hello');
})

// $$(document).on('page:init', '.page[data-name="index"]', function (e) {
//     $$("#btnStock").on("click", fnOcultarToolBar);



// })
$$(document).on('page:init', function (e) {
    $$('#btnStock').on("click", fnOcultarToolBar);
    $$('#back').on("click", fnMostrarToolBar);
    console.log(e);
})

$$(document).on('page:init', '.page[data-name="stock"]', function (e) {
    console.log(e);
    console.log('Funca');
    var docRef = db.collection("congelados")
    var productos = $$("#congeladosCont");

    docRef.get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        console.log(doc.id,": ", doc.data())
        console.log(productos)
        productos.append(`<div class="grid grid-cols-2 grid-gap spaceLol">
                <div class=" myGrid">${doc.data().name}</div>
                <div class="item-inner">
                  <div class="item-input-wrap">
                    <input class="centrar" type="number" placeholder="Cantidad">
                    <span class="input-clear-button"></span>
                  </div>
                </div>
        </div>`)
      })
    })

    var docRef = db.collection("embutidos")
    var productos2 = $$("#embutidosCont");

    docRef.get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        console.log(doc.id,": ", doc.data())
        console.log(productos2)
        productos2.append(`<div class="grid grid-cols-2 grid-gap spaceLol">
                <div class=" myGrid">${doc.data().name}</div>
                <div class="item-inner">
                  <div class="item-input-wrap">
                    <input class="centrar" type="number" placeholder="Cantidad">
                    <span class="input-clear-button"></span>
                  </div>
                </div>
        </div>`)
      })
    })

    var docRef = db.collection("panes")
    var productos3 = $$("#panesCont");

    docRef.get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        console.log(doc.id,": ", doc.data())
        console.log(productos3)
        productos3.append(`<div class="grid grid-cols-2 grid-gap spaceLol">
                <div class=" myGrid">${doc.data().name}</div>
                <div class="item-inner">
                  <div class="item-input-wrap">
                    <input class="centrar" type="number" placeholder="Cantidad">
                    <span class="input-clear-button"></span>
                  </div>
                </div>
        </div>`)
      })
    })

    var docRef = db.collection("aderezosK")
    var productos4 = $$("#adKCont");

    docRef.get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        console.log(doc.id,": ", doc.data())
        console.log(productos4)
        productos4.append(`<div class="grid grid-cols-2 grid-gap spaceLol">
                <div class=" myGrid">${doc.data().name}</div>
                <div class="item-inner">
                  <div class="item-input-wrap">
                    <input class="centrar" type="number" placeholder="Cantidad">
                    <span class="input-clear-button"></span>
                  </div>
                </div>
        </div>`)
      })
    })

    var docRef = db.collection("aderezosP")
    var productos5 = $$("#adPorCont");

    docRef.get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        console.log(doc.id,": ", doc.data())
        console.log(productos5)
        productos5.append(`<div class="grid grid-cols-2 grid-gap spaceLol">
                <div class=" myGrid">${doc.data().name}</div>
                <div class="item-inner">
                  <div class="item-input-wrap">
                    <input class="centrar" type="number" placeholder="Cantidad">
                    <span class="input-clear-button"></span>
                  </div>
                </div>
        </div>`)
      })
    })

    var docRef = db.collection("papelera")
    var productos6 = $$("#papeleraCont");

    docRef.get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        console.log(doc.id,": ", doc.data())
        console.log(productos6)
        productos6.append(`<div class="grid grid-cols-2 grid-gap spaceLol">
                <div class=" myGrid">${doc.data().name}</div>
                <div class="item-inner">
                  <div class="item-input-wrap">
                    <input class="centrar" type="number" placeholder="Cantidad">
                    <span class="input-clear-button"></span>
                  </div>
                </div>
        </div>`)
      })
    })

    var docRef = db.collection("cafeteria")
    var productos7 = $$("#cofeCont");

    docRef.get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        console.log(doc.id,": ", doc.data())
        console.log(productos7)
        productos7.append(`<div class="grid grid-cols-2 grid-gap spaceLol">
                <div class=" myGrid">${doc.data().name}</div>
                <div class="item-inner">
                  <div class="item-input-wrap">
                    <input class="centrar" type="number" placeholder="Cantidad">
                    <span class="input-clear-button"></span>
                  </div>
                </div>
        </div>`)
      })
    })

    var docRef = db.collection("bebidas")
    var productos8 = $$("#bbidaCont");

    docRef.get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        console.log(doc.id,": ", doc.data())
        console.log(productos8)
        productos8.append(`<div class="grid grid-cols-2 grid-gap spaceLol">
                <div class=" myGrid">${doc.data().name}</div>
                <div class="item-inner">
                  <div class="item-input-wrap">
                    <input class="centrar" type="number" placeholder="Cantidad">
                    <span class="input-clear-button"></span>
                  </div>
                </div>
        </div>`)
      })
    })

    var docRef = db.collection("aguas")
    var productos9 = $$("#aguasCont");

    docRef.get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        console.log(doc.id,": ", doc.data())
        console.log(productos9)
        productos9.append(`<div class="grid grid-cols-2 grid-gap spaceLol">
                <div class=" myGrid">${doc.data().name}</div>
                <div class="item-inner">
                  <div class="item-input-wrap">
                    <input class="centrar" type="number" placeholder="Cantidad">
                    <span class="input-clear-button"></span>
                  </div>
                </div>
        </div>`)
      })
    })

    var docRef = db.collection("Cerveza")
    var productos10 = $$("#cervezaCont");

    docRef.get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        console.log(doc.id,": ", doc.data())
        console.log(productos10)
        productos10.append(`<div class="grid grid-cols-2 grid-gap spaceLol">
                <div class=" myGrid">${doc.data().name}</div>
                <div class="item-inner">
                  <div class="item-input-wrap">
                    <input class="centrar" type="number" placeholder="Cantidad">
                    <span class="input-clear-button"></span>
                  </div>
                </div>
        </div>`)
      })
    })

    var docRef = db.collection("varios")
    var productos11 = $$("#variosCont");

    docRef.get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        console.log(doc.id,": ", doc.data())
        console.log(productos11)
        productos11.append(`<div class="grid grid-cols-2 grid-gap spaceLol">
                <div class=" myGrid">${doc.data().name}</div>
                <div class="item-inner">
                  <div class="item-input-wrap">
                    <input class="centrar" type="number" placeholder="Cantidad">
                    <span class="input-clear-button"></span>
                  </div>
                </div>
        </div>`)
      })
    })



})



//Mis funciones
function fnOcultarToolBar(){
  $$("#fuera").hide()
};
function fnMostrarToolBar(){
  $$("#fuera").show()
};