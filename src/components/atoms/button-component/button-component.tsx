import { Component, Host, h, Prop } from "@stencil/core";
import cn from "classnames";

@Component({
  tag: "button-component",
  styleUrl: "button-component.css",
  shadow: true,
})
export class ButtonComponent {
  @Prop() colorScheme: "yellow" | "red" | "green" | "sky" | "blue" = "blue";
  @Prop() size: "sm" | "base" | "md" = "base";
  @Prop() variant: "solid" | "ghost" | "outline" = "solid";
  @Prop() disabled = false;
  @Prop() leftIcon = false;
  @Prop() rightIcon = false;
  @Prop() type: "reset" | "submit" | "button" = "button";

  render() {
    return (
      <Host>
        <button
          type={this.type}
          disabled={this.disabled}
          class={cn(
            "inline-flex items-center rounded font-bold focus:ring-offset-2 focus:ring disabled:bg-gray-300 disabled:text-gray-700 disabled:border-gray-500",
            {
              "px-6 py-2": this.size === "base" || this.size === "md",
              "px-6 py-1": this.size === "sm",
              "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600 active:bg-blue-900":
                this.variant === "solid" && this.colorScheme === "blue",
              "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 active:bg-red-900":
                this.variant === "solid" && this.colorScheme === "red",
              "bg-green-600 text-white hover:bg-green-700 focus:ring-green-600 active:bg-green-900":
                this.variant === "solid" && this.colorScheme === "green",
              "bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-600 active:bg-yellow-900":
                this.variant === "solid" && this.colorScheme === "yellow",
              "bg-sky-400 hover:bg-sky-500 focus:ring-sky-400 active:bg-sky-700":
                this.variant === "solid" && this.colorScheme === "sky",
              "border-2": this.variant === "outline",
              "border-blue-600 text-blue-600 focus:ring-blue-600":
                this.variant === "outline" && this.colorScheme === "blue",
              "border-yellow-600 text-yellow-600 focus:ring-yellow-600 ":
                this.variant === "outline" && this.colorScheme === "yellow",
              "border-red-600 text-red-600 focus:ring-red-600":
                this.variant === "outline" && this.colorScheme === "red",
              "border-green-600 text-green-600 focus:ring-green-600":
                this.variant === "outline" && this.colorScheme === "green",
              "border-sky-400 text-sky-400 focus:ring-sky-400":
                this.variant === "outline" && this.colorScheme === "sky",
              "text-blue-600 focus:ring-blue-600":
                this.variant === "ghost" && this.colorScheme === "blue",
              "text-yellow-600 focus:ring-yellow-600":
                this.variant === "ghost" && this.colorScheme === "yellow",
              "text-red-600 focus:ring-red-600":
                this.variant === "ghost" && this.colorScheme === "red",
              "text-green-600 focus:ring-green-600":
                this.variant === "ghost" && this.colorScheme === "green",
              "text-sky-400 focus:ring-sky-400":
                this.variant === "ghost" && this.colorScheme === "sky",
            }
          )}
          // added interactive label
          aria-label="button"
          // designates to a11y tech whether the button is currently functional
          aria-disabled={this.disabled ? "true" : "false"}
        >
          {this.leftIcon && (
            <span class="inline-block pr-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
          )}
          <span class="inline-block">
            <slot />
          </span>
          {this.rightIcon && (
            <span class="inline-block pl-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          )}
        </button>
      </Host>
    );
  }
}
