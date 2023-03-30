import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'text-input-error-component',
  styleUrl: 'text-input-error-component.css',
  shadow: true,
})
export class TextInputErrorComponent {

  render() {
    return (
      <Host>
        <div error-message>
        <input class="error"/>
        </div>
      </Host>
    );
  }

}
