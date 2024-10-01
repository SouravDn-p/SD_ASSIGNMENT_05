//history added section
const historyContainer = document.querySelector(" .history-container");

function historyMaker(inputBoxNumber, text) {
  const historyBox = document.createElement("div");
  historyBox.classList.add("history-box");

  const header = document.createElement("h4");
  header.innerText = `${inputBoxNumber} Taka is Donated for ${text}`;

  const time = document.createElement("p");
  const date = new Date().toString();
  time.innerText = "Date : " + date;

  historyBox.appendChild(header);
  historyBox.appendChild(time);
  historyContainer.appendChild(historyBox);
}
