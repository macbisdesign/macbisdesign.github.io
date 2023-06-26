import { Component, Host, Prop, h } from "@stencil/core";
import cn from "classnames";

@Component({
  tag: "textarea-component",
  styleUrl: "textarea-component.css",
  shadow: true,
})
export class TextareaComponent {
  @Prop() label?: string;
  @Prop() state: "error" | "success" | "default" = "default";
  @Prop() disabled = false;
  @Prop() cols?: number;
  @Prop() rows?: number;
  @Prop() placeholder?: string;

  render() {
    return (
      <Host>
        <label>
          {this.label && <span class="mb-1.5 block">{this.label}</span>}
          <textarea
            class={cn("resize-none disabled:border-gray-500", {
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
