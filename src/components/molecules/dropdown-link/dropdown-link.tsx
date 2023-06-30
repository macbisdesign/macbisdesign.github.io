import { Component, Host, Listen, Prop, State, h } from "@stencil/core";

@Component({
  tag: "dropdown-link",
  styleUrl: "dropdown-link.css",
  shadow: true,
})
export class DropdownLink {
  /** The text that will get rendered by the component. */
  @Prop() text: string;
  /** The number of the grid columns that the dropdown panel will have. */
  @Prop() col: number;
  /** The visual color appearance of the component. */
  @Prop() theme: "blue" | "white" | "dark-blue" = "blue";
  /** The layout of the dropdown panel. */
  @Prop() panelSize: "full" | "contain" = "full";
  /** The visual color appearance of the dropdown panel. */
  @Prop() panelTheme: "white" | "blue" = "blue";

  // State
  @State() isOpen: boolean = false;

  // handlers
  @Listen("mouseover", { capture: true })
  handleMouseOver() {
    this.isOpen = !this.isOpen;
  }

  @Listen("mouseout", { capture: true })
  handleMouseOut() {
    if (this.isOpen) {
      this.isOpen = false;
    }
  }

  render() {
    return (
      <Host>
        <li
          class={this.isOpen ? "dropdown-link--open" : "dropdown-link--closed"}
        >
          <button
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            class={`dropdown-link-button dropdown-link-button-theme--${this.theme}`}
          >
            <span class="dropdown-link-button-text">{this.text}</span>
            {this.isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="dropdown-link-button-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                class="dropdown-link-button-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </button>

          <ul
            style={{
              display: this.isOpen
                ? this.panelSize === "full"
                  ? "grid"
                  : "block"
                : "none",
              gridTemplateColumns: `repeat(${this.col}, 1fr)`,
            }}
            class={`dropdown-panel dropdown-panel-size--${this.panelSize} dropdown-panel-theme--${this.panelTheme}`}
          >
            <slot />
          </ul>
        </li>
      </Host>
    );
  }
}
