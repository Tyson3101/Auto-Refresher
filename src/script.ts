declare var chrome: any;

const input = document.querySelector("#delay") as HTMLInputElement;
const submitBtn = document.querySelector("#submit") as HTMLButtonElement;
const stopBtn = document.querySelector("#stop") as HTMLButtonElement;
submitBtn.onclick = () => {
  console.log("Clicked");

  const delay = parseInt(input.value);
  chrome.runtime.sendMessage({ delay });
};

stopBtn.onclick = () => {
  chrome.runtime.sendMessage({ stop: true });
};
