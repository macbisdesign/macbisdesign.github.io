import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'dropdown-panel-link',
  styleUrl: 'dropdown-panel-link.css',
  shadow: true,
})
export class DropdownPanelLink {
  render() {
    return (
      <Host>
        <li class="dropdown-panel-link">
          <slot />
        </li>
      </Host>
    );
  }
}
