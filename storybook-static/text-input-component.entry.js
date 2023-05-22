import { r as registerInstance, h, e as Host } from './index-e0e1a529.js';

const textInputComponentCss = ":host{--font-family:Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;--input-border-color:#5c5c5c;--input-focus-color:#2491FF;--error-color:#b50909;--primary-color:#2491FF;--success-color:#00a91c;display:block;margin:0}div{margin-bottom:2%}div.error-type{border-left-width:0.15rem;border-left-color:var(--error-color);border-left-style:solid;padding-left:1rem}div label{display:block;font-size:1.06rem;font-weight:700;font-family:var(--font-family);line-height:1.3rem;max-width:30rem;margin-bottom:1%}div label span{margin-left:1%;color:red}.text-input{display:block;padding:calc(0.5rem - 0.25rem);border-radius:5px;font-family:var(--font-family);font-size:14pt;margin-top:0.5rem;height:2.5rem;width:90%}.text-input:focus{outline:var(--input-focus-color) solid 2px;border-radius:5px}.text-area{border:1px solid var(--input-border-color);height:10rem;max-width:30rem}.primary{border:1px solid var(--primary-color);padding:calc(0.5rem - 0.25rem)}.error{border:1px solid var(--error-color);padding:calc(0.5rem - 0.25rem)}.success{border:1px solid var(--success-color);padding:calc(0.5rem - 0.25rem)}.error-msg{display:block;padding:0.25rem 0rem;color:var(--error-color);font-size:1rem;font-weight:700;font-family:var(--font-family)}@media screen and (min-width: 768px){.text-input{max-width:30rem;width:30rem}}";

const TextInputComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputID = crypto.randomUUID();
    this.getInputID = () => `input-component-${this.kind}-${this.inputID.slice(0, this.inputID.length / 2)}`;
    this.kind = 'default';
    this.label = undefined;
    this.placeholder = undefined;
    this.type = undefined;
    this.hint = undefined;
    this.required = undefined;
  }
  render() {
    return (h(Host, null, h("div", { class: `${this.kind}-type` }, h("label", { htmlFor: this.getInputID() }, this.label, h("span", null, this.required ? '*' : '')), h("span", { class: "hint" }, this.hint === 'undefined' ? '' : this.hint), h("input", { type: this.type, class: `text-input ${this.kind}`, id: this.getInputID(), placeholder: this.placeholder === 'undefined' ? '' : this.placeholder }))));
  }
};
TextInputComponent.style = textInputComponentCss;

export { TextInputComponent as text_input_component };

//# sourceMappingURL=text-input-component.entry.js.map