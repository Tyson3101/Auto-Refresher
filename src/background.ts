let previousDelay: number;

chrome.runtime.onMessage.addListener(
  ({ delay, url }: { delay: number; url: string }) => {
    console.log("Delay");
    clearInterval(previousDelay);
    const params = {
      active: true,
      currentWindow: true,
    };

    chrome.tabs.query(params, gotTab);
    function gotTab(tabs: any) {
      previousDelay = setInterval(() => {
        chrome.tabs.sendMessage(tabs[0].id, { refresh: true, url });
      }, delay * 1000);
    }
  }
);
