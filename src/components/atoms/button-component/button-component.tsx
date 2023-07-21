import { Component, Host, h, Prop } from "@stencil/core";
import cn from "classnames";

@Component({
  tag: "button-component",
  styleUrl: "button-component.css",
  shadow: true,
})
export class ButtonComponent {
  /** The visual color appearance of the component. */
  @Prop() visual: "warning" | "error" | "success" | "primary" | "secondary" =
    "primary";
  /** The size of the component. */
  @Prop() size: "sm" | "base" | "md" = "base";
  /** The variant of the component. */
  @Prop() variant: "solid" | "ghost" | "outline" = "solid";
  /** If true, the component will be disabled. */
  @Prop() disabled = false;
  /** If true, the default left icon will be shown. */
  @Prop() leftIcon = false;
  /** If true, the default right icon will be shown. */
  @Prop() rightIcon = false;
  /** The type of the component */
  @Prop() type: "reset" | "submit" | "button" = "button";

  render() {
    return (
      <Host>
        <button
          type={this.type}
          disabled={this.disabled}
          class={cn(
            "inline-flex items-center gap-x-2.5 text-base font-bold rounded focus:ring focus:ring-[#3D94D0] focus:ring-offset-4 focus-visible:outline-none",
            {
              "px-6 py-1": this.size === "sm",
              "px-[14px] py-2": this.size === "base",
              "px-6 py-2": this.size === "md",
              "bg-[#0071BC] text-white hover:bg-[#205493] focus:bg-[#3D94D0] active:bg-[#112E51] disabled:bg-[#E3E3E3] disabled:text-[#4F4F4F]":
                this.variant === "solid" && this.visual === "primary",
              "bg-[#2E8540] text-white hover:bg-[#266E35] focus:bg-[#2E8540] active:bg-[#174320] disabled:bg-[#E3E3E3] disabled:text-[#4F4F4F]":
                this.variant === "solid" && this.visual === "success",
              "bg-[#E51C3E] text-white hover:bg-[#B31E22] focus:bg-[#E51C3E] active:bg-[#B31E22] disabled:bg-[#E3E3E3] disabled:text-[#4F4F4F]":
                this.variant === "solid" && this.visual === "error",
              "bg-[#02BFE7] text-black hover:bg-[#00A6D2] focus:bg-[#02BFE7] active:bg-[#046B99] active:text-white disabled:bg-[#E3E3E3] disabled:text-[#4F4F4F]":
                this.variant === "solid" && this.visual === "secondary",
              "bg-[#FDB81E] text-[#171717] hover:bg-[#C05600] hover:text-white focus:bg-[#FDB81E] focus:text-[#171717] active:bg-[#775540] active:text-white disabled:bg-[#E3E3E3] disabled:text-[#4F4F4F]":
                this.variant === "solid" && this.visual === "warning",
              "border-2": this.variant === "outline",
              "border-[#0071BC] text-[#0071BC] hover:border-[#205493] hover:text-[#205493] focus:border-[#0071BC] focus:text-[#0071BC] active:border-[#112E51] active:text-[#112E51] disabled:border-[#E3E3E3] disabled:text-[#4F4F4F]":
                this.variant === "outline" && this.visual === "primary",
              "border-[#02BFE7] text-[#046B99] hover:border-[#00A6D2] focus:border-[#02BFE7] active:border-[#046B99] disabled:border-[#E3E3E3] disabled:text-[#4F4F4F]":
                this.variant === "outline" && this.visual === "secondary",
              "border-[#2E8540] text-[#2E8540] hover:border-[#2E8540] hover:text-[#2E8540] focus:border-[#2E8540] focus:text-[#2E8540] active:border-[#174320] active:text-[#174320] disabled:border-[#E3E3E3] disabled:text-[#4F4F4F]":
                this.variant === "outline" && this.visual === "success",
              "border-[#FDB81E] text-[#171717] hover:border-[#C05600] focus:border-[#FDB81E] active:border-[#775540] disabled:border-[#E3E3E3] disabled:text-[#4F4F4F]":
                this.variant === "outline" && this.visual === "warning",
              "border-[#E51C3E] text-[#E51C3E] hover:border-[#B31E22] hover:text-[#B31E22] focus:border-[#E51C3E] focus:text-[#E51C3E] active:border-[#981B1F] active:text-[#981B1F] disabled:border-[#E3E3E3] disabled:text-[#4F4F4F]":
                this.variant === "outline" && this.visual === "error",
              "text-[#0071BC] hover:text-[#205493] focus:text-[#0071BC] active:border-[#112E51] disabled:text-[#4F4F4F]":
                this.variant === "ghost" && this.visual === "primary",
              "text-[#046B99] disabled:text-[#4F4F4F]":
                this.variant === "ghost" && this.visual === "secondary",
              "text-[#2E8540] hover:text-[#2E8540] focus:text-[#2E8540] active:text-[#174320] disabled:text-[#4F4F4F]":
                this.variant === "ghost" && this.visual === "success",
              "text-[#171717] disabled:text-[#4F4F4F]":
                this.variant === "ghost" && this.visual === "warning",
              "text-[#E51C3E] hover:text-[#B31E22] focus:text-[#E51C3E] active:text-[#981B1F] disabled:text-[#4F4F4F]":
                this.variant === "ghost" && this.visual === "error",
            }
          )}
        >
          {this.leftIcon && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
                fill="currentColor"
              />
            </svg>
          )}

          <slot />

          {this.rightIcon && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </Host>
    );
  }
}
