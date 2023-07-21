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
  @Prop() cols = 30;
  /** The number of rows that you want to have in the component. */
  @Prop() rows = 20;
  /** The placeholder of the component. */
  @Prop() placeholder?: string;
  /** The error message when the component in the error state. */
  @Prop() error?: string;
  /** The helpful text of the field. */
  @Prop() helpfulText?: string;

  render() {
    return (
      <Host>
        <label
          class={cn(
            "flex flex-col items-start gap-y-2",
            this.state === "error" ? "pl-4 border-l-2 border-[#E51C3E]" : ""
          )}
        >
          <span class="font-bold text-[#212121]">Helpful error message</span>
          {this.error ? (
            <span class="font-bold text-[#E51C3E]">{this.error}</span>
          ) : this.helpfulText ? (
            <span class="font-bold text-[#71767A]">{this.helpfulText}</span>
          ) : null}

          <textarea
            class={cn("resize-none placeholder:text-[#1B1B1B]", {
              "border-[#1B1B1B] focus:border-[#3D94D0] focus:ring-[#3D94D0]":
                this.state === "default",
              "border-[#E51C3E] focus:border-[#E51C3E] focus:ring-[#E51C3E]":
                this.state === "error",
              "border-[#2E8540] focus:border-[#2E8540] focus:ring-[#2E8540]":
                this.state === "success",
            })}
            cols={this.cols}
            rows={this.rows}
            placeholder={this.placeholder}
          />
        </label>
      </Host>
    );
  }
}
