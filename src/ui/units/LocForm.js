
export class LocForm {
  constructor(subBtnt, 
    input, err) {
    this._subBtn = subBtnt;
    this._input = input;
    this._err = err;
  }

  wire = (onClick) => {
    this._subBtn.addEventListener(
      'click', (event) => {
      event.preventDefault();
      const { value } = this._input;
      console.log(value)
      onClick(value, this._err);
    })
  }
}