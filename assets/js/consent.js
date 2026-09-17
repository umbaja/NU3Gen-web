(() => {
  const GA_ID = 'G-4BNXLRK78V';
  const STORAGE_KEY = 'nu3gen-consent';
  const lang = document.documentElement.lang === 'en' ? 'en' : 'sk';

  const text = {
    sk: {
      message: 'Táto stránka používa cookies od Google Analytics, aby sme pochopili, ako web návštevníci používajú.',
      accept: 'Súhlasím',
      decline: 'Odmietnuť'
    },
    en: {
      message: 'This site uses Google Analytics cookies to help us understand how visitors use it.',
      accept: 'Accept',
      decline: 'Decline'
    }
  }[lang];

  function loadGA() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);
  }

  let stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}

  if (stored === 'granted') { loadGA(); return; }
  if (stored === 'denied') { return; }

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML =
    '<p>' + text.message + '</p>' +
    '<div class="cookie-banner-actions">' +
    '<button type="button" class="btn" data-choice="decline">' + text.decline + '</button>' +
    '<button type="button" class="btn primary" data-choice="accept">' + text.accept + '</button>' +
    '</div>';
  document.body.appendChild(banner);

  banner.addEventListener('click', (e) => {
    const choice = e.target.getAttribute('data-choice');
    if (!choice) return;
    try { localStorage.setItem(STORAGE_KEY, choice === 'accept' ? 'granted' : 'denied'); } catch (e) {}
    if (choice === 'accept') loadGA();
    banner.remove();
  });
})();
