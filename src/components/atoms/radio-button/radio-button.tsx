import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'radio-button',
  styleUrl: 'radio-button.css',
  shadow: true,
})
export class RadioButton {
  @Prop() disabled = false;
  @Prop() checked = false;

  render() {
    return (
      <Host>
        <label class={`form-control ${this.disabled ? 'form-control--disabled' : ''}`}>
          <input checked={this.checked} disabled={this.disabled} type="radio" name="radio" />
          <slot />
        </label>
      </Host>
    );
  }
}
