let previousDelay: number;

chrome.runtime.onMessage.addListener(({ delay }: { delay: number }) => {
  console.log("Delay");
  clearInterval(previousDelay);
  const params = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.query(params, gotTab);
  function gotTab(tabs: any) {
    previousDelay = setInterval(() => {
      chrome.tabs.sendMessage(tabs[0].id, { refresh: true });
    }, delay * 1000);
  }
});
