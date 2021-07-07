let previousDelay: number;

chrome.runtime.onMessage.addListener(
  ({ delay, stop }: { delay: number; stop: boolean }) => {
    console.log("Delay");
    clearInterval(previousDelay);
    if (stop) return;
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
  }
);
