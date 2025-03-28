// Detect current website and load appropriate script
if (window.location.hostname.includes('youtube.com')) {
    importScript('youtube.js');
  } else if (window.location.hostname.includes('facebook.com')) {
    importScript('facebook.js');
  }
  
  function importScript(src) {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(src);
    document.head.appendChild(script);
  }