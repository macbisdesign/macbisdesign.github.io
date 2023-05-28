import { Component, Element, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'dropdown-button',
  styleUrl: 'dropdown-button.css',
  shadow: true,
  assetsDirs: ['./'],
})
export class DropdownButton {
  @Element() el: HTMLElement;

  @Prop() buttonLabel: string;
  @Prop() theme: 'blue' | 'dark-blue';

  buttonOpen: boolean = false;

  toggleButton() {
    this.buttonOpen = !this.buttonOpen;

    console.log(this.el);

    const button = this.el.shadowRoot.querySelector('.button-contents');

    if (this.buttonOpen) {
      button.classList.add('button-contents--open');
      return;
    }

    button.classList.remove('button-content--open');
  }

  render() {
    return (
      <Host>
        <div class="dropdown-button-container">
          <button class="dropdown-button" onClick={this.toggleButton}>
            {this.buttonLabel}
            <span>
              <svg class={``} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0L0 6L1.41 7.41L6 2.83L10.59 7.41L12 6L6 0Z" fill="white" />
              </svg>
            </span>
          </button>
          {this.buttonOpen && (
            <div class="button-contents">
              <ul>
                <li>Contents</li>
                <li>Contents</li>
                <li>Contents</li>
                <li>Contents</li>
              </ul>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
