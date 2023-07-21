import { Component, Host, Prop, h } from "@stencil/core";
import cn from "classnames";

@Component({
  tag: "textarea-component",
  styleUrl: "textarea-component.css",
  shadow: true,
})
export class TextareaComponent {
  /** The label of the component. */
  @Prop() label?: string;
  /** The state of the component that it is in. */
  @Prop() state: "error" | "success" | "default" = "default";
  /** If true, the component will be disabled. */
  @Prop() disabled = false;
  /** The number of columns that you would like to have in the component. */
  @Prop() cols?: number;
  /** The number of rows that you want to have in the component. */
  @Prop() rows?: number;
  /** The placeholder of the component. */
  @Prop() placeholder?: string;
  /** The error message when the component in the error state */
  @Prop() error?: string;

  render() {
    return (
      <Host>
        <label
          class={cn("inline-flex flex-col gap-y-2.5 pl-2", {
            "border-l-2 border-red-600": this.state === "error",
          })}
        >
          {this.label && this.label}

          {this.state === "error"
            ? this.error && <span class="text-red-600">{this.error}</span>
            : ""}

          <textarea
            class={cn("resize-none rounded disabled:border-gray-500", {
              "border-blue-600 focus:border-blue-600 focus:ring-blue-600":
                this.state === "default",
              "border-green-600 focus:border-green-600 focus:ring-green-600":
                this.state === "success",
              "border-red-600 focus:border-red-600 focus:ring-red-600":
                this.state === "error",
            })}
            placeholder={this.placeholder}
            disabled={this.disabled}
            cols={this.cols}
            rows={this.rows}
          />
        </label>
      </Host>
    );
  }
}
