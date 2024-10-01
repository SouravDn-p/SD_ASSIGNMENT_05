//handling the coins

const totalCoin = parseFloat(totalCoinBox.innerText);
const NoakhaliCoin = parseFloat(NoakhaliCoinBox.innerText);
const FeniCoin = parseFloat(FeniCoinBox.innerText);
const QuotaCoin = parseFloat(QuotaCoinBox.innerText);

function donated(totalAmount, uniqAmount, inputBox, text) {
  totalAmountNumber = parseFloat(totalAmount.innerText);
  uniqAmountNumber = parseFloat(uniqAmount.innerText);
  inputBoxNumber = parseFloat(inputBox.value);

  if (isNaN(inputBoxNumber) || inputBoxNumber <= 0) {
    {
      alertMaker("Opps! ", "Enter a Valid Number", "Try Again");
      inputBox.value = 0;
    }
  } else if (inputBoxNumber > totalAmountNumber) {
    alertMaker("Opps! ", "Not Sufficient Balance", "Try Again");
  } else {
    totalAmountNumber -= inputBoxNumber;
    uniqAmountNumber += inputBoxNumber;
    totalAmount.innerText = totalAmountNumber;
    uniqAmount.innerText = uniqAmountNumber;

    inputBox.value = "";
    historyMaker(inputBoxNumber, text);
    alertMaker("Congrates! ", "You Have Donated for Humankind", "Succesfully");
  }
}

noakhaliDonate.addEventListener("click", () => {
  donated(
    totalCoinBox,
    NoakhaliCoinBox,
    noakhaliInput,
    "Flood at Noakhali, Bangladesh"
  );
});
noakhaliInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    donated(
      totalCoinBox,
      NoakhaliCoinBox,
      noakhaliInput,
      "Flood at Noakhali, Bangladesh"
    );
  }
});

feniDonate.addEventListener("click", () => {
  donated(
    totalCoinBox,
    FeniCoinBox,
    feniInput,
    "famine-2024 at Feni, Bangladesh"
  );
});

QuotaDonate.addEventListener("click", () => {
  donated(
    totalCoinBox,
    QuotaCoinBox,
    QuotaInput,
    "Injured in the Quota Movement, Bangladesh"
  );
});
