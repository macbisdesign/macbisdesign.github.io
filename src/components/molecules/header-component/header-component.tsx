import { Component, Element, Host, h, Prop } from '@stencil/core';
import { logos } from './header_logos';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.css',
  shadow: true,
  assetsDirs: ['./'],
})
export class HeaderComponent {
  @Element() el: HTMLElement;

  @Prop() theme: 'white' | 'blue' | 'dark';
  @Prop() size: 'slim' | 'normal' = 'normal';
  @Prop() headerLogoTheme: 'white' | 'blue' | 'dark';
  @Prop() headerLogo: string;
  @Prop() navTheme: 'white' | 'blue' | 'dark';
  @Prop() navLocation: 'below' | 'inline' | 'none';
  @Prop() navInlinePosition: 'right' | 'left';
  @Prop() accountTheme: 'blue' | 'dark' = 'dark';
  @Prop() accountStyle: 'detailed' | 'simplified-icon' | 'simplified-no-icon' | 'simplified-no-label';
  @Prop() accountLabel: string;
  @Prop() showSearch: boolean;
  @Prop() searchTheme: 'white' | 'blue' | 'dark';
  @Prop() searchTextTheme: 'white' | 'blue' | 'dark';
  @Prop() seperatorSize: 'small' | 'large' | 'none';
  @Prop() seperatorTheme: 'white' | 'blue';
  @Prop() navSeparator: boolean = false;
  @Prop() headerLogoDash: boolean = false;

  componentDidLoad() {
    this.chooseLogo(parseInt(this.headerLogo));
  }

  chooseLogo(id) {
    const logo = this.el.shadowRoot.querySelector('.header-logo');
    logo.innerHTML = logos[id];
  }

  render() {
    return (
      <Host>
        <header class={`header-component header-component--${this.size} header-component--${this.theme}`}>
          <div
            class={`header-logo ${this.headerLogoDash ? 'header-logo--left-dash' : ''} header-logo--${this.headerLogoTheme} header-logo-seperator--${this.headerLogoTheme}`}
          ></div>

          <div class={`header-content`}>
            <div class={`content-left`}>
              {this.navLocation === 'inline' && this.navInlinePosition === 'left' && (
                <nav class={`nav-container nav-container--${this.navTheme}`}>
                  <slot />
                </nav>
              )}

              {this.navSeparator && <h1 class="inspect">Inspect</h1>}

              {this.showSearch && (
                <div class="search-bar-container">
                  <svg class={`search-icon search-icon--${this.searchTextTheme}`} width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
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
              {this.navLocation === 'inline' && this.navInlinePosition === 'right' && (
                <nav class="nav-container">
                  <slot />
                </nav>
              )}
              <div class="account-container">
                {this.accountStyle !== 'simplified-no-icon' && (
                  <svg class="account-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#D9D9D9" fill-opacity="0.25" />
                    <path
                      d="M20 20.0072C22.9687 20.0072 25.4286 17.5898 25.4286 14.5786C25.4286 11.6098 22.9687 9.15002 20 9.15002C16.9888 9.15002 14.5714 11.6098 14.5714 14.5786C14.5714 17.5898 16.9888 20.0072 20 20.0072ZM23.7746 21.3643H23.0536C22.1205 21.8308 21.1027 22.0429 20 22.0429C18.8973 22.0429 17.8371 21.8308 16.904 21.3643H16.183C13.0446 21.3643 9.5 23.9514 9.5 27.0898V28.8286C9.5 29.9737 10.3906 30.8643 11.5357 30.8643H28.4643C29.567 30.8643 30.5 29.9737 30.5 28.8286V27.0898C30.5 23.9514 26.9129 21.3643 23.7746 21.3643Z"
                      fill="black"
                    />
                  </svg>
                )}

                {this.accountStyle !== 'simplified-no-label' && <p class={`account-label account-label--${this.accountTheme}`}>{this.accountLabel}</p>}

                <svg class="account-open-icon" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99997 0L0.589966 1.41L5.16997 6L0.589966 10.59L1.99997 12L7.99997 6L1.99997 0Z" fill="#212121" />
                </svg>
              </div>
            </div>
          </div>
        </header>
        {this.navLocation === 'below' && (
          <nav class={`nav-container--${this.navTheme}`}>
            <slot />
          </nav>
        )}
      </Host>
    );
  }
}
