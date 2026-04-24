import { Picture } from "../units/Picture";

/** 
* Hämtar ett existerande HTML-element
* @function
* @param {string} ref - Referensen till ett existerande HTML-element
* @returns {HTMLElement | HTMLInputElement} 
*/
export const node = (ref) => {
  return document.getElementById(ref);
}

/** 
* Skapar ett nytt HTML-element
* @function
* @param {string} type - Typen av HTML-element
* @param {string | null} text - textContent för ett HTML-element
* @param {string} style - CSS-klass
* @param {HTMLElement | null} parent - Det element som det nya elementet ska knytas till
* @returns {HTMLElement | HTMLInputElement} 
*/
export const newNode = (type, text = null, 
  style = null, parent = null) => {
  const tag = document.createElement(type);
  if(text) tag.textContent = text;
  if(style) tag.classList.add(style);
  if(parent) parent.appendChild(tag);
  return tag;
}

/** 
* Skapar en responsiv bild baserat på den bildarrayen som
* Vite ImageTools generar dynamiskt
* @function
* @param {string[]} img - en array av strängar med URL:er till
* en viss bild med de olika dimensioner som genererats dynamiskt
* med Vite ImageTools
* @param {string} alt - alternativtext för fallback-bilden
* @param {HTMLElement} parent - Till detta element ska bilden knytas till
* @returns {HTMLElement} - Returnerar picture-elementet
*/
export const picture = (img, alt, parent) => {
  const pic = new Picture(parent);
  const last = img.length - 1;
  for(let i = 0; i < 2; i++)
    pic.addSource(img[i], '1000');
  for(let i = 2; i < 4; i++)
    pic.addSource(img[i], '820');
  pic.addSource(img[last - 1]);
  pic.addFallback(img[last], alt);
  return pic;
}

/** 
* Lägger till en svg-bild dynamiskt (Respekterar natt- respektive dagsläget)
* @function
* @param {HTMLElement} parent - Detta element ska svg-bilden knytas till
* @param {SVGSVGElement} svg - En rå svg-bild
*/
export const addSvg = (parent, svg) => {
  parent.innerHTML = svg;
}

/** 
* Formatera en sträng så att den visas tydligt i stapeldiagrammet
* @function
* @param {string} str - Den sträng som ska formateras
* @returns {string} - Returnerar den formaterade strängen
*/
export const format = (str) => {
  return str.replaceAll(' ', '\n');
}