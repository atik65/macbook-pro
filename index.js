// intial price
let intialPrice = 1299;
let memory = 0;
let ssd = 0;
let delivery = 0;
let promoCode = "";

let bestPrice = document.getElementById("best-price");
let memoryExtra = document.getElementById("memory-cost");
let storageExtra = document.getElementById("storage-cost");
let deliveryCost = document.getElementById("delivery");
let totalPrice = document.getElementById("total-price");
let lastTotal = document.getElementById("last-total");

// price calculate function
function priceCalc() {
  let finalTotalPrice = intialPrice + memory + ssd + delivery;
  totalPrice.innerText = finalTotalPrice;
  bestPrice.innerText = intialPrice;
  memoryExtra.innerText = memory;
  storageExtra.innerText = ssd;
  deliveryCost.innerText = delivery;
  if (promoCode === "stevekaku") {
    lastTotal.innerText = finalTotalPrice - (finalTotalPrice * 20) / 100;
  } else {
    lastTotal.innerText = finalTotalPrice;
  }

  promoCode = "";
}

// function for memory cost calculation
function memoryFunc(id, price) {
  document.getElementById(id).addEventListener("click", function () {
    memory = price;
    priceCalc();
  });
}

// function for storage cost calculation
function ssdFunc(id, price) {
  document.getElementById(id).addEventListener("click", function () {
    ssd = price;
    priceCalc();
  });
}

// function for delivery cost calculation
function deliveryFunc(id, price) {
  document.getElementById(id).addEventListener("click", function () {
    delivery = price;
    priceCalc();
  });
}

// for 8gb memory version
memoryFunc("8gb-memory", 0);
// for 16gb memory version
memoryFunc("16gb-memory", 180);

// for 256gb ssd
ssdFunc("256gb-ssd", 0);
// for 512gb ssd
ssdFunc("512gb-ssd", 100);
// for 1tb ssd
ssdFunc("1tb-ssd", 180);

// for Normal Delivery
deliveryFunc("slow-delivery", 0);
deliveryFunc("fast-delivery", 20);

// promoCode setUp
document
  .getElementById("promo-code-button")
  .addEventListener("click", function () {
    let promoInput = document.getElementById("promo-code-input");
    promoCode = promoInput.value;
    promoInput.value = "";
    priceCalc();
  });
