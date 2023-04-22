function delivery_time() {
  let products = {
    name: "socks",
    price: 999,
    delivery: "3 days",
  };

  document.querySelector(".deliverTime").innerHTML = products.delivery;
}
