import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "dropdown-component",
  styleUrl: "dropdown-component.css",
  shadow: true,
})
export class DropdownComponent {
  render() {
    return (
      <Host>
        <ul class="dropdown-component">
          <slot />
        </ul>
      </Host>
    );
  }
}
