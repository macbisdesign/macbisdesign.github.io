import { Component, Host, Listen, Prop, h } from "@stencil/core";

@Component({
  tag: "checkbox-component",
  styleUrl: "checkbox-component.css",
  shadow: true,
})
export class CheckboxComponent {
  /** The label of the component. */
  @Prop() label?: string;
  /** If true, the component will be disabled */
  @Prop() disabled = false;
  /** If true, the component will be checked */
  @Prop() checked = false;

  @Listen("click")
  handleClick() {
    this.checked = !this.checked;
  }

  render() {
    return (
      <Host>
        <label class="inline-flex items-center gap-x-2">
          <input
            class="peer h-6 w-6 border-2 border-[#AEB0B5] checked:text-[#0071BC] focus:ring-0 disabled:border-[#C9C9C9] disabled:bg-[#E6E6E6]"
            type="checkbox"
            disabled={this.disabled}
            checked={this.checked}
          />
          {this.label && (
            <span class="text-base text-[#212121] peer-disabled:text-[#C9C9C9]">
              {this.label}
            </span>
          )}
        </label>
      </Host>
    );
  }
}
