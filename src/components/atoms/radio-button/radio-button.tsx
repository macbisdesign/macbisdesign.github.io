import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "radio-button",
  styleUrl: "radio-button.css",
  shadow: true,
})
export class RadioButton {
  @Prop() label?: string;
  @Prop() disabled = false;
  @Prop() checked = false;

  render() {
    return (
      <Host>
        <label class="flex items-center gap-x-2.5">
          <input
            class="text-blue-600 focus:ring-blue-600"
            checked={this.checked}
            disabled={this.disabled}
            type="radio"
          />
          {this.label && <span class="inline-block">{this.label}</span>}
        </label>
      </Host>
    );
  }
}
