declare var chrome: any;

const input = document.querySelector("#delay") as HTMLInputElement;
const submitBtn = document.querySelector("button") as HTMLButtonElement;
submitBtn.onclick = () => {
  console.log("Clicked");

  const delay = parseInt(input.value);
  chrome.runtime.sendMessage({ delay });
};
