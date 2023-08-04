import { Component, Host, Prop, h } from "@stencil/core";
import cn from "classnames";

@Component({
  tag: "select-component",
  styleUrl: "select-component.css",
  shadow: true,
})
export class SelectComponent {
  /** The label of the component */
  @Prop() label: string;
  /** The state of the component that it is in. */
  @Prop() state: "error" | "success" | "default" = "default";
  /** If true, the component will be disabled. */
  @Prop() disabled = false;
  /** The options of the component that may get selected. */
  @Prop() options: string[] = [];
  /** If true, the field is required */
  @Prop() required = false;
  /** The help text of the component. */
  @Prop() helpText?: string;

  render() {
    return (
      <Host>
        <div class="flex flex-col items-start gap-y-2">
          <label
            class={cn("text-base font-bold text-[#212121]", {
              "after:content-['*'] after:text-[#E51C3E] after:ml-1.5":
                this.required,
            })}
          >
            {this.label}
          </label>

          {this.helpText && <span>{this.helpText}</span>}

          <select
            class={cn("rounded px-4 py-2 w-full max-w-[300px]", {
              "border-[#212121] focus:border-[#3D94D0] focus:ring-[#3D94D0]":
                this.state === "default",
              "border-[#2E8540] focus:border-[#2E8540] focus:ring-[#2E8540]":
                this.state === "success",
              "border-[#E51C3E] focus:border-[#E51C3E] focus:ring-[#E51C3E]":
                this.state === "error",
            })}
            disabled={this.disabled}
          >
            {this.options.map((option) => (
              <option>{option}</option>
            ))}
          </select>
        </div>
      </Host>
    );
  }
}
