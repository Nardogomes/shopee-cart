import createItem from "./services/item.js"

const cart = []

console.log("Bem vindo ao seu carrinho de compras!")

const item1 = await createItem("figure-action A", 70.00, 2)

const item2 = await createItem("figure-action B", 90.50, 1)

console.log(item2.subtotal())