import { Component, Element, Host, h, Prop } from "@stencil/core";
import { logos } from "./header_logos";
import cn from "classnames";

@Component({
  tag: "header-component",
  styleUrl: "header-component.css",
  shadow: true,
  assetsDirs: ["./"],
})
export class HeaderComponent {
  @Element() el: HTMLElement;

  @Prop() theme: "white" | "blue" | "dark";
  @Prop() size: "slim" | "normal" = "normal";
  @Prop() headerLogoTheme: "white" | "blue" | "dark";
  @Prop() headerLogo: string;
  @Prop() navTheme: "white" | "blue" | "dark";
  @Prop() navLocation: "below" | "inline" | "none";
  @Prop() navInlinePosition: "right" | "left";
  @Prop() accountLabel: string;
  @Prop() showSearch: boolean;
  @Prop() searchTheme: "white" | "blue" | "dark";
  @Prop() searchTextTheme: "white" | "blue" | "dark";
  @Prop() navSeparator: boolean = false;
  @Prop() headerLogoDash: boolean = false;
  @Prop() headerLogoStretched = false;
  @Prop() accountContainerTheme: "white" | "blue" | "dark" = "white";
  @Prop() headerLogoDashTheme: "blue" | "white" = "white";
  @Prop() navSeparatorTheme: "blue" | "white" = "white";
  @Prop() accountContainer = true;

  componentDidLoad() {
    this.chooseLogo(parseInt(this.headerLogo));
  }

  chooseLogo(id) {
    const logo = this.el.shadowRoot.querySelector(".header-logo");
    logo.innerHTML = logos[id];
  }

  render() {
    return (
      <Host>
        <header
          class={cn(
            `header-component header-component--${this.size} header-component--${this.theme}`
          )}
        >
          <div
            class={cn(
              `header-logo--${this.headerLogoTheme} header-logo`,
              this.headerLogoDashTheme === "blue"
                ? "header-logo--dash-blue"
                : this.headerLogoDashTheme === "white"
                ? "header-logo--dash-white"
                : "",
              {
                "header-logo--dash": this.headerLogoDash,
                "header-logo--stretched": this.headerLogoStretched,
              }
            )}
          ></div>

          <div class={`header-content`}>
            <div class={`content-left`}>
              {this.navLocation === "inline" &&
                this.navInlinePosition === "left" && (
                  <nav class={`top-nav-container`}>
                    <slot />
                  </nav>
                )}

              {this.navSeparator && (
                <h1
                  class={cn(
                    "inspect",
                    this.navSeparatorTheme === "blue"
                      ? "inspect--blue"
                      : this.navSeparatorTheme === "white"
                      ? "inspect--white"
                      : ""
                  )}
                >
                  Inspect
                </h1>
              )}

              {this.showSearch && (
                <div class="search-bar-container">
                  <svg
                    class={`search-icon search-icon--${this.searchTextTheme}`}
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                    />
                  </svg>
                  <input
                    type="text"
                    class={`search-bar search-bar--${this.searchTheme} search-bar-text--${this.searchTextTheme}`}
                    name="search-bar-input"
                    id="search-bar-input"
                    placeholder="Search"
                  />
                </div>
              )}
            </div>

            <div class="content-right">
              {this.navLocation === "inline" &&
                this.navInlinePosition === "right" && (
                  <nav class="top-nav-container">
                    <slot />
                  </nav>
                )}

              {this.accountContainer && (
                <div
                  class={`account-container account-container--${this.accountContainerTheme}`}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20" cy="20" r="20" fill-opacity="0.25" />
                    <path d="M20 20.0072C22.9687 20.0072 25.4286 17.5898 25.4286 14.5786C25.4286 11.6098 22.9687 9.15002 20 9.15002C16.9888 9.15002 14.5714 11.6098 14.5714 14.5786C14.5714 17.5898 16.9888 20.0072 20 20.0072ZM23.7746 21.3643H23.0536C22.1205 21.8308 21.1027 22.0429 20 22.0429C18.8973 22.0429 17.8371 21.8308 16.904 21.3643H16.183C13.0446 21.3643 9.5 23.9514 9.5 27.0898V28.8286C9.5 29.9737 10.3906 30.8643 11.5357 30.8643H28.4643C29.567 30.8643 30.5 29.9737 30.5 28.8286V27.0898C30.5 23.9514 26.9129 21.3643 23.7746 21.3643Z" />
                  </svg>

                  <p>{this.accountLabel}</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    height="18px"
                    width="18px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </header>

        {this.navLocation === "below" && (
          <nav class={`nav-container--${this.navTheme}`}>
            <slot />
          </nav>
        )}
      </Host>
    );
  }
}
