const DonationBtn = document.getElementById("Donation-btn");
const HistoryBtn = document.getElementById("History-btn");

//coin boxes
const totalCoinBox = document.getElementById("total-coin");

const NoakhaliCoinBox = document.getElementById("Noakhali-coin");
const FeniCoinBox = document.getElementById("Feni-coin");
const QuotaCoinBox = document.getElementById("Quota-coin");

//input boxes
const noakhaliInput = document.getElementById("noakhali-input");
const feniInput = document.getElementById("feni-input");
const QuotaInput = document.getElementById("Quota-input");

//donate btns
const noakhaliDonate = document.getElementById("noakhali-donate");
const feniDonate = document.getElementById("feni-donate");
const QuotaDonate = document.getElementById("Quota-donate");

// for the home navigation btns and hide the content
function toggleActive() {
  DonationBtn.classList.remove("active");
  HistoryBtn.classList.remove("active");

  this.classList.add("active");

  // hidding the content
  const DContainer = document.querySelector(".donation-container");
  const HContainer = document.querySelector(".history-container");
  DContainer.classList.remove("display");
  HContainer.classList.remove("display");

  if (DonationBtn.classList.contains("active")) {
    HContainer.classList.add("display");
  } else {
    DContainer.classList.add("display");
  }
}

DonationBtn.addEventListener("click", toggleActive);
HistoryBtn.addEventListener("click", toggleActive);





