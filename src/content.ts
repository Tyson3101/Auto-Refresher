declare var chrome: any;

chrome.runtime.onMessage.addListener(refreshPage);

function refreshPage({ refresh }: { refresh: boolean }) {
  if (refresh) {
    window.location.reload();
  }
}
