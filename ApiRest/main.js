console.log('Hola a todos')

const URL = 'https://api.thecatapi.com/v1/images/search'

// fetch(URL)
//   .then((res) => res.json())
//   .then((data) => {
//     const img = document.querySelector('img')

//     img.src = data[0].url
//   })

/*
    Reto:
    - Crear un botón, aquí en nuestro HTML, donde podamos darle clic
    en el bnotón y se cargue la imagen, nos cargue otra imagen aleatoria.


    - Utilices async await, la sintaxis de promesa 
*/

const btn = document.querySelector('button')

btn.addEventListener('click', async () => {
  const res = await fetch(URL)
  const data = await res.json()

  const img = document.querySelector('img')

  img.src = data[0].url
})
