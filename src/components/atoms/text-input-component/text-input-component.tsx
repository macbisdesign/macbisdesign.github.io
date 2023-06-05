import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'text-input-component',
  styleUrl: 'text-input-component.css',
  shadow: true,
})
export class TextInputComponent {
  @Prop() kind: 'default' | 'error' | 'success' = 'default';
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() type: string;
  @Prop() hint: string;
  @Prop() required: boolean;

  inputID: string = crypto.randomUUID();

  getInputID = () => `input-component-${this.kind}-${this.inputID.slice(0, this.inputID.length / 2)}`;

  render() {
    return (
      <Host>
        <div class={`${this.kind}-type`}>
          <label htmlFor={this.getInputID()}>
            {this.label}
            <span>{this.required ? '*' : ''}</span>
          </label>
          <span class="hint">{this.hint === 'undefined' ? '' : this.hint}</span>
          <input type={this.type} class={`text-input ${this.kind}`} id={this.getInputID()} placeholder={this.placeholder === 'undefined' ? '' : this.placeholder} />
        </div>
      </Host>
    );
  }
}
