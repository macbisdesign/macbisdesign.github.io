import { Component, Host, Listen, Prop, h } from "@stencil/core";

@Component({
  tag: "checkbox-component",
  styleUrl: "checkbox-component.css",
  shadow: true,
})
export class CheckboxComponent {
  @Prop() label?: string;
  @Prop() disabled = false;
  @Prop() checked = false;

  @Listen("click")
  handleClick() {
    this.checked = !this.checked;
  }

  render() {
    return (
      <Host>
        <label class="flex items-center gap-x-2.5">
          <input
            class="text-blue-600 focus:ring-blue-600"
            checked={this.checked}
            disabled={this.disabled}
            type="checkbox"
          />
          {this.label && <span class="inline-block">{this.label}</span>}
        </label>
      </Host>
    );
  }
}
