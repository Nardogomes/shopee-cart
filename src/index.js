import createItem from "./services/item.js"
import { addItem, calculateTotal, deleteItem, displayCart, removeItem } from "./services/cart.js"

const myCart = []
const myWhishList = []

console.log("Bem vindo ao seu carrinho de compras!")

const item1 = await createItem("figure-action A", 70.00, 3)
const item2 = await createItem("figure-action B", 90.50, 1)

await addItem(myCart, item1)
await addItem(myCart, item2)

await removeItem(myCart, item1)

await displayCart(myCart)

// await deleteItem(myCart, item2.name)

await calculateTotal(myCart)