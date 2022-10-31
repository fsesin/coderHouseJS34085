let producto = parseInt(
  prompt(
    'Escoge el producto que deseas comprar: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
  )
)
let totalCompra = 0
let seguirComprando = true
let decision

class Producto {
  constructor(id, nombre, precio) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
  }
}
const iphone = new Producto(1, 'Iphone', 500)
const tv = new Producto(2, 'TV', 1000)
const ipad = new Producto(3, 'Ipad', 200)
const computador = new Producto(4, 'Computador', 800)

while (seguirComprando === true) {
  if (producto === 1) {
    //iphone
    totalCompra = totalCompra + iphone.precio
  } else if (producto === 2) {
    //tv
    totalCompra = totalCompra + tv.precio
  } else if (producto === 3) {
    //ipad
    totalCompra = totalCompra + ipad.precio
  } else if (producto === 4) {
    //computador
    totalCompra = totalCompra + computador.p
  } else {
    producto = parseInt(
      prompt(
        'Escoge un producto habilitado: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
      )
    )
    continue
  }

  decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
  if (decision === 1) {
    producto = parseInt(
      prompt(
        'Escoge el producto que deseas comprar: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
      )
    )
  } else {
    seguirComprando = false
  }
}
alert(`El total de tu compra es ${totalCompra}`)
//alert('El total de tu compra es '+totalCompra)

// 1.Iphone: 500
// 2.TV: 1000
// 3.Ipad: 200
// 4.Computador: 800
