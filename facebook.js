// Aggressive Facebook Reels Remover
function nukeReels() {
    // 1. Remove all Reels navigation elements
    const navSelectors = [
      '[aria-label*="Reel"]',
      '[href*="/reel/"]',
      'div[role="tablist"] [role="tab"]:has([aria-label*="eel"])',
      'span:has(> svg[aria-label*="eel"])',
      'a[href*="/reels/"]',
      'div[aria-label*="Reels"]'
    ];
  
    navSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.remove();
        const parent = el.closest('div[role="tab"], div[role="button"], div[data-pagelet]');
        if (parent) parent.remove();
      });
    });
  
    // 2. Remove all Reels content
    const contentSelectors = [
      '[data-pagelet*="Reel"]',
      '[aria-label*="Reel"]',
      'div[role="article"]:has([aria-label*="Reel"])',
      'div[role="article"]:has([href*="/reel/"])',
      'div:has(> div > span:contains("Reels"))',
      'div[data-ad-preview*="Reel"]'
    ];
  
    contentSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.remove();
        const section = el.closest('div[role="region"], section, div[data-pagelet]');
        if (section) section.remove();
      });
    });
  }
  
  // Mutation Observer for Facebook's dynamic content
  const fbObserver = new MutationObserver(nukeReels);
  fbObserver.observe(document.body, { childList: true, subtree: true });
  
  // Run continuously
  setInterval(nukeReels, 1000);
  nukeReels();