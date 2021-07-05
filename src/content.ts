declare var chrome: any;

chrome.runtime.onMessage.addListener(refreshPage);

function refreshPage({ refresh, url }: { refresh: boolean; url: string }) {
  if (refresh && url === window.location.href) {
    window.location.reload();
  }
}
