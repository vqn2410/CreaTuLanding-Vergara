const misProductos = [
    { id: 1, nombre: "Smartech Pro", precio: 25000, img: "/images/tech.png" },
    { id: 2, nombre: "Reloj Elegance", precio: 45000, img: "/images/watch.png" },
    { id: 3, nombre: "Auriculares Bass+", precio: 18000, img: "/images/headphones.png" },
    { id: 4, nombre: "PC Gamer Extreme", precio: 1500000, img: "/images/pcgamer.png" },
    { id: 5, nombre: "Teclado Mecánico RGB", precio: 12000, img: "/images/teclado.png" },
    { id: 6, nombre: "Mouse Gamer Pro", precio: 8500, img: "/images/mouse.png" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos)
        }, 2000)
    })
}

export const getProductoById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos.find(prod => prod.id === parseInt(id)))
        }, 2000)
    })
}
