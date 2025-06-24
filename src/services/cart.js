async function addItem(userCart, item) {
  userCart.push(item)
}

async function calculateTotal(userCart) {
  console.log("\nTotal do carrinho de compras é: ")
  console.log(userCart.reduce((total, item) => total + item.subtotal(), 0))
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name)

  if(index !== -1) {
    userCart.splice(index, 1)
  }
}

async function removeItem(userCart, index) {

}

async function displayCart(userCart) {
  console.log("\nShopee cart list:")
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal: ${item.subtotal()}`)
  });
}

export {addItem, calculateTotal, deleteItem, removeItem, displayCart}
