import { Picture } from "../units/Picture";

// Hämta ett existerande HTML-element via en referens
export const node = (ref) => {
  return document.getElementById(ref);
}

// Skapa ett HTML-element
export const newNode = (type, text = null, 
  style = null, parent = null) => {
  const tag = document.createElement(type);
  if(text) tag.textContent = text;
  if(style) tag.classList.add(style);
  if(parent) parent.appendChild(tag);
  return tag;
}

// Skapa ett Picture-objekt basert på en lista av responsiva bilder
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

// Lägger till en svg-bild dynamiskt (Respekterar nattläge)
export const addSvg = (parent, svg) => {
  parent.innerHTML = svg;
}

export const format = (str) => {
  return str.replaceAll(' ', '\n');
}