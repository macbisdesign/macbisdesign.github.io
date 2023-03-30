import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'text-input-success-component',
  styleUrl: 'text-input-success-component.css',
  shadow: true,
})
export class TextInputSuccessComponent {

  render() {
    return (
      <Host>
        <input class="success"/>
      </Host>
    );
  }

}
