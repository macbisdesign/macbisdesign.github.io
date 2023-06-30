import { Component, Host, Prop, h } from "@stencil/core";
import cn from "classnames";

@Component({
  tag: "select-component",
  styleUrl: "select-component.css",
  shadow: true,
})
export class SelectComponent {
  /** The label of the component */
  @Prop() label?: string;
  /** The state of the component that it is in. */
  @Prop() state: "error" | "success" | "default" = "default";
  /** If true, the component will be disabled. */
  @Prop() disabled = false;
  /** The options of the component that may get selected. */
  @Prop() options: string[] = [];

  render() {
    return (
      <Host>
        <label>
          {this.label && <span class="mb-1.5 block">{this.label}</span>}
          <select
            class={cn("disabled:border-gray-500", {
              "border-blue-600 focus:border-blue-600 focus:ring-blue-600":
                this.state === "default",
              "border-green-600 focus:border-green-600 focus:ring-green-600":
                this.state === "success",
              "border-red-600 focus:border-red-600 focus:ring-red-600":
                this.state === "error",
            })}
            disabled={this.disabled}
          >
            {this.options.map((option) => (
              <option>{option}</option>
            ))}
          </select>
        </label>
      </Host>
    );
  }
}
