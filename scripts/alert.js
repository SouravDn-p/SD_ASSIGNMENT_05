const alertContainer = document.getElementById("alert-container");
const alertHeaderJs = document.getElementById("alert-header");

const alertDes = document.getElementById("alert-description");
const alertStatus = document.getElementById("alert-status");
const alertBtn = document.getElementById("alert-btn");

setTimeout(() => {
  alertContainer.classList.add("display");
}, 1500);   

function alertMaker(header, des, status) {
  alertHeaderJs.innerText = header;
  alertDes.innerText = des;
  alertStatus.innerText = status;
  alertContainer.classList.remove("display");
}

function alertQuite() {
  alertContainer.classList.add("display");
}

alertBtn.addEventListener("click", alertQuite);
