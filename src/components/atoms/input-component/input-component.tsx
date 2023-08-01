import { Component, Host, h, Prop } from "@stencil/core";
import cn from "classnames";

/**
 * It's a stencil component
 */
@Component({
  tag: "input-component",
  styleUrl: "input-component.css",
  shadow: true,
})
export class InputComponent {
  /** The label of component. */
  @Prop() label: string;
  /** The placeholder of component. */
  @Prop() placeholder: string;
  /** The type of component. */
  @Prop() type = "text";
  /** The state of component that it is in. */
  @Prop() state: "error" | "success" | "default" = "default";
  /** If true, component will be disabled. */
  @Prop() disabled = false;

  render() {
    return (
      <Host>
        <label>
          {this.label && <span class="mb-1.5 block">{this.label}</span>}
          <input
            class={cn("disabled:border-gray-500 rounded", {
              "border-blue-600 focus:border-blue-600 focus:ring-blue-600":
                this.state === "default",
              "border-green-600 focus:border-green-600 focus:ring-green-600":
                this.state === "success",
              "border-red-600 focus:border-red-600 focus:ring-red-600":
                this.state === "error",
            })}
            type={this.type}
            placeholder={this.placeholder}
            disabled={this.disabled}
            // added interactive label
            aria-label={this.label}
          />
        </label>
      </Host>
    );
  }
}
