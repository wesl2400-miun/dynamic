
// Inkapslar logiken för animationer
export class Anime {
  constructor() {
    this._animes = [];
  }

  // Koppla en animation till ett HTML-element och lagra aktionen i en array
  add = (node, aniClass) => {
    this._animes.push(() => {
      node.classList
        .remove(aniClass);
      node.offsetWidth;
      node.classList
        .add(aniClass);
    })
  }

  // Tilldela knappen en händelse så att animation-arrayen startar med ett klick
  wire = (button) => {
    button.addEventListener(
      'click', () => {
      this._animes.forEach(
        anime => anime());
    });
  }
}