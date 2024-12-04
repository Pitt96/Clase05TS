/*
    Implemente una funcion de tipo flecha llamada getAvenger que reciba los siguientes parametros
    - nombre (obligatorio) cadena de texto
    - poder (opcional) cadena de texto
    - arma (opcional, con valor por defecto 'arco') cadena de texto
    
    La funcion debe retorna una mensaje de texto que describa al vengador, siguiendo estas reglas:
    si el parametro poder tiene un valor el mensaje debe incluir el poder y el arma
    si el parametro no tiene un valor, el mensaje solo incluira el nombre y el arma y un mensaje indicando que el poder no esta 
    definido

    Mostrar el resultado
 */

interface Avenger {
  nombre: string
  poder?: string
  arma?: string
}

const getAvenger = ({ nombre, poder, arma = 'arco' }: Avenger): string => {
  return `Nombre: ${nombre}, Poder: ${
    poder || 'No esta definido'
  }, Arma: ${arma}`
}

const mensaje = getAvenger({ nombre: 'Jose', arma: 'pistola' })
console.log({ mensaje })
