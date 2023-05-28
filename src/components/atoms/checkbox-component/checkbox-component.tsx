import { Component, Host, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'checkbox-component',
  styleUrl: 'checkbox-component.css',
  shadow: true,
})
export class CheckboxComponent {
  @Prop() disabled: boolean = false;
  @Prop() checked: boolean = false;

  @Listen('click')
  handleClick() {
    this.checked = !this.checked;
  }

  render() {
    return (
      <Host>
        <label onClick={this.handleClick} class={`form-control ${this.disabled ? 'form-control--disabled' : ''}`}>
          <input class={this.checked ? 'checkbox--checked' : 'checkbox--unchecked'} checked={this.checked} disabled={this.disabled} type="checkbox" name="checkbox" />
          <slot />
        </label>
      </Host>
    );
  }
}
