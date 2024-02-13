const CarritoCompra = require("../index.js")

describe("vamos aprobar la clase carrito de compras", () => {
  let carroDeCompras;
  beforeEach(() => {
    carroDeCompras = new CarritoCompra();
  });

  it("el lenght de carro compras debe ser uno despues de agregar un producto", () => {
    carroDeCompras.agregarProducto({ nombre: "leche", price: 2500 });
    expect(carroDeCompras.carrito.length).toBe(1);
  });
  
  it("el lenght de carro compras debe ser 3 despues de agregar tres productos", () => {
    carroDeCompras.agregarProducto({ nombre: "leche", price: 2500 });
    carroDeCompras.agregarProducto({ nombre: "chorizo", price: 12000 });
    carroDeCompras.agregarProducto({ nombre: "milo", price: 15000 });
    expect(carroDeCompras.carrito.length).toBe(3);
  });

  // vamos a evaluar el calculo de el total de los precios de el carrito de compras

  it("el total de este carrito de compras debe ser 29500", () => {
    //   agrego 3 elementos al carrito
    carroDeCompras.agregarProducto({ nombre: "leche", price: 2500 });
    carroDeCompras.agregarProducto({ nombre: "chorizo", price: 12000 });
    carroDeCompras.agregarProducto({ nombre: "milo", price: 15000 });
    expect(carroDeCompras.calcularTotal()).toBe(29500);
  });

  // vamos a evaluar el metodo aplicarDescuento de total
  it("el total de este carrito de compras debe ser 29500 menos el 15% de descuento debe ser ", () => {
    //   agrego 3 elementos al carrito
    carroDeCompras.agregarProducto({ nombre: "leche", price: 2500 });
    carroDeCompras.agregarProducto({ nombre: "chorizo", price: 12000 });
    carroDeCompras.agregarProducto({ nombre: "milo", price: 15000 });
    expect(carroDeCompras.aplicarDescuento(15)).toBe(29500 * 0.85);
  });
});