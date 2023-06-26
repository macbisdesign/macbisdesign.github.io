import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "dropdown-panel-section",
  styleUrl: "dropdown-panel-section.css",
  shadow: true,
})
export class DropdownPanelSection {
  render() {
    return (
      <Host>
        <ul class="dropdown-panel-section">
          <slot />
        </ul>
      </Host>
    );
  }
}
