/*
    Implementa un tipo generico llamado SoloCadena<T> que transforma las propiedades de un tipo
    dado T :
    - Si una propiedad de T es de tipo string, su tipo debe ser string
    - Si una propiedad de T no es de tipo string, debe conservar su mismo tipo

    Ademas:
    Crear una interfaz llamda Usuario con las siugientyes propiedades:
    -nombre
    -edad
    -activo

*/

interface Usuario {
  nombre: string
  edad: number
  activo: boolean
}

type SoloCadena<T> = {
  [K in keyof T]: T[K] extends string ? string : T[K]
}

// Ejemplo
const usuario: SoloCadena<Usuario> = {
  nombre: 'Juan',
  edad: 25,
  activo: true,
}

console.log({ usuario })
