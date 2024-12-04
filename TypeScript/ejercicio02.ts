/*
Crea una interfaz llamada LigaJustucia que represente a un personaje de la liga de la justicia

 -nombre : una cadena de texto que almacena el nombre del personaje
 -artesMarciales : un arreglo de cadenas de texto que almacena las artes marciales que domina el personaje
 -Implementar un objeto llamado batman que cumpla con la interfaz LigaJustucia

 -Mostrar el objeto batman en consola utilizando console.log
 */

interface LigaJustucia {
  nombre: string
  artesMarciales: string[]
}

const batman: LigaJustucia = {
  nombre: 'Batman',
  artesMarciales: ['Karate', 'Judo', 'Boxeo', 'Aikido'],
}

console.log({ batman })
