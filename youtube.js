// YouTube Shorts Remover
function nukeShorts() {
    // 1. Remove top navigation Shorts button
    document.querySelectorAll('[title="Shorts"], [href="/shorts"], ytd-mini-guide-entry-renderer[aria-label="Shorts"]').forEach(el => el.remove());
  
    // 2. Remove Shorts shelf from homepage
    document.querySelectorAll('ytd-rich-section-renderer, ytd-reel-shelf-renderer, ytd-rich-shelf-renderer:has([title*="Short"])').forEach(el => el.remove());
  
    // 3. Remove Shorts from sidebar
    document.querySelectorAll('ytd-guide-entry-renderer:has(a[title="Shorts"]), ytd-guide-entry-renderer:has(a[href="/shorts"])').forEach(el => el.remove());
  }
  
  // Run every second (YouTube dynamically loads content)
  setInterval(nukeShorts, 1000);
  nukeShorts(); // Run immediately
  