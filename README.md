# NU3Gen static website

Statický prototyp nového webu NU3Gen pripravený pre GitHub Pages.

## Nasadenie na GitHub Pages

1. Vytvorte nový GitHub repozitár (napr. `nu3gen-web`).
2. Nahrajte celý obsah tohto priečinka **do koreňa repozitára**.
3. V GitHub repozitári otvorte **Settings → Pages**.
4. V časti **Build and deployment** zvoľte **Deploy from a branch**.
5. Vyberte vetvu `main` a priečinok `/ (root)`.
6. Uložte. GitHub vygeneruje adresu typu `https://USERNAME.github.io/nu3gen-web/`.

## Vlastná doména

Ak chcete použiť `nu3gen.eu`, v GitHub Pages nastavte Custom domain. Následne podľa inštrukcií GitHubu upravte DNS záznamy u registrátora domény.

Pre projektový web v repozitári fungujú všetky interné odkazy relatívne, takže nie je potrebné meniť cesty.

## Súbory

- `index.html` — homepage
- `genetics.html` — genetika
- `food.html` — potraviny a bioekonomika
- `software.html` — dáta a softvér
- `research.html` — projekty, consumer engagement a vzdelávanie
- `about.html` — tím a architektúra značiek
- `404.html` — fallback stránka
- `assets/css/styles.css` — celý vizuálny systém
- `assets/js/main.js` — mobilné menu + jemné scroll animácie
- `.nojekyll` — zabráni Jekyll transformácii statických súborov

## Dôležité pred ostrým nasadením

- skontrolovať a doplniť právne texty (GDPR, cookies, obchodné podmienky pre DNA testy),
- potvrdiť aktuálne kontaktné a firemné údaje,
- doplniť finálne odkazy na DNA e-shop,
- rozhodnúť, či staré domény `nu3food.sk`, `eurospotrebitelia.eu`, `openproduct.eu` presmerovať na nové case studies,
- doplniť fotografie / logo, ak sa majú používať,
- doplniť anglickú verziu pred použitím pri medzinárodných projektoch.

## Visual identity v2
The v2 theme follows the current NU3Gen visual language: white space, blue/turquoise accents, dark blue-grey typography and a subtle diagonal pattern inspired by the DNA-test packaging. The included `assets/img/nu3gen-logo.svg` is a clean web reconstruction of the current Nu3Gen wordmark based on the public website imagery. If an official vector logo (SVG/EPS/PDF) is available, replace this file while keeping the same filename.

## Logo
Version v3 uses the original transparent NU3Gen PNG supplied by the brand owner (`assets/img/nu3gen-logo.png`). The image was only tightly cropped to remove unused transparent canvas; the logo artwork and colours were not redrawn or altered.

## V4 brand update
V4 používa farebnú paletu odvodenú priamo z dodaného loga NU3Gen: #3888B0, #606060 a #8AA8B0. Logo je použité v hlavičke, hero vizuále, pätičke a ako jemný watermark na podstránkach.
