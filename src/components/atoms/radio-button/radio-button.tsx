import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "radio-button",
  styleUrl: "radio-button.css",
  shadow: true,
})
export class RadioButton {
  /** The label of the component. */
  @Prop() label?: string;
  /** If true, the component will be disabled. */
  @Prop() disabled = false;
  /** If true, the component will be checked. */
  @Prop() checked = false;

  render() {
    return (
      <Host>
        <label class="flex items-center gap-x-2">
          <input
            class="border-2 border-[#5B616B] checked:border-[#005EA2] checked:text-[#0071BC] focus:ring-[#005EA2] disabled:border-[#AEB0B5] disabled:text-[#D6D7D9]"
            type="radio"
            disabled={this.disabled}
            checked={this.checked}
          />
          {this.label && <span>{this.label}</span>}
        </label>
      </Host>
    );
  }
}
