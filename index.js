let contenedor_datos = document.getElementById('card-container');

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch('https://akabab.github.io/starwars-api/api/all.json')
    .then(response => response.text())
    .then(result => mostrar_data(result))
    .catch(error => console.log('error', error)); 

    function mostrar_data(result){
      let datos = JSON.parse(result);
      datos.forEach(element => {
        contenedor_datos.innerHTML += `
          <div class="card">
            ${element.id ? `<span class='circle'>${element.id}</span>` : ''}
            ${element.name ? `<h2 class="name"> ${element.name}</h2>` : ''}  
            ${element.image ? 
              `<figure class="image-container">
                <img src="${element.image}" alt="Imagen" class="image" loading="lazy"/>
              </figure>` : ''}
            ${element.height ? 
              `<div>
                <p class="title">Heigth: </p>
                <span>${element.height}</span>
              </div>` : ''}  
            ${element.mass ? 
              `<div>
                <p class="title">Mass: </p>
                <span>${element.mass}</span>
              </div>` : ''}  
            ${element.born ? 
              `<div>
                <p class="title">Born:</p>
                <span>${element.born}</span>
              </div>` : ''}  
            ${element.bornLocation ? 
              `<div>
                <p class="title">Born Location: </p>
                <span>${element.bornLocation}</span>
              </div>` : ''}  
              ${element.died ? 
                `<div>
                <p class="title">Died: </p>
                <span>${element.died}</span>
              </div>` : ''}  
              ${element.diedLocation ? 
                `<div>
                <p class="title">Died Location: </p>
                <span>${element.diedLocation}</span> 
                </div>` : ''}  
            ${element.gender ? 
              `<div>
              <p class="title">Gender:</p>
              <span>${element.gender}</span>
              </div>` : ''}
              ${element.affiliations ? 
                `<div class="affiliations">
                <p class="title">Affiliations: </p>
                <span>${element.affiliations}</span>
                </div>` : ''}   
                </div>`
              });
            }
    // ${element.apprentices ? 
    //   `<div>
    //     <p class="title">Apprentices: </p> 
    //     <span>${element.apprentices}</span>
    //   </div>` : ''}    
    // ${element.cybernetics ? 
    //   `<div>
    //     <p class="title">Cybernetics: </p>
    //     <span>${element.cybernetics}</span>
    //   </div>` : ''}  


//CODIGO DEL CARRUSEL

const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.peliculas');

const flechaIzquierda= document.getElementById('flecha-izquierda');
const flechaDerecha= document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----

flechaDerecha.addEventListener('click', () =>{
    fila.scrollLeft += fila.offsetWidth;
})

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----

flechaIzquierda.addEventListener('click', () =>{
    fila.scrollLeft -= fila.offsetWidth;
})

// ? ----- ----- Hover ----- -----

peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e)=>{
        const elemento= e.currentTarget;
        setTimeout(()=>{
            peliculas.forEach(pelicula =>pelicula.classList.remove('hover'));
            elemento.classList.add('hover')
        }, 300)
    })
})

fila.addEventListener('mouseleave', ()=>{
    peliculas.forEach(pelicula=>pelicula.classList.remove('hover'))
})

