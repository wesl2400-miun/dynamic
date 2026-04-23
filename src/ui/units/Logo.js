

// Skapar logotypen dynamiskt, så att det anpassas till natt- respektive dagsläget
export class Logo {
  constructor(logo) {
    logo.innerHTML = logoSvg;
  }
}