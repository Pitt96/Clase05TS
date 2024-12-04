/*
    Implemente una clase generica Cola<T> que simule el comportamiento de una estructura
    de datos tipo cola (FIFO). Esta clase debe incluir las siguientes funcionalidades:
    -Agregar elementos
    -Quitar elementos
    -Tamaño : devuelve el tamaño de la cola
    -Ver el frente

 */

class Cola<T> {
  private elementos: T[] = []

  agregar(item: T) {
    this.elementos.push(item)
  }

  quitar(): T | undefined {
    if (!this.elementos.length) {
      console.log('La cola está vacia')
      return undefined
    }
    return this.elementos.shift() //quita el primer elemento
  }

  tamaño(): number {
    return this.elementos.length
  }

  verFrente(): T | undefined {
    return this.elementos[0]
  }
}

const cola = new Cola<number>()

cola.agregar(10)
cola.agregar(20)
cola.agregar(30)

console.log('Frente de la cola ', cola.verFrente())
console.log('Tamaño de la cola ', cola.tamaño())

cola.quitar()
console.log('Nuevo frente ', cola.verFrente())
console.log('Tamaño actualizado ', cola.tamaño())
