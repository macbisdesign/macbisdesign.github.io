import { Component, Element, State, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'banner-component',
  styleUrl: 'banner-component.css',
  shadow: true,
  assetsDirs: ['./'],
})
export class BannerComponent {
  @Element() el: HTMLElement;

  @State() bannerOpen: boolean = false;

  @Prop() bannerTitle: string;
  @Prop() bannerAction: string;
  @Prop() bannerDomain: 'gov' | 'mil';
  @Prop() bannerLang: 'english' | 'spanish';

  //The content for each type of banner order is as follows english/gov, english/mil, spanish/gov, spanish/mil
  bannerContent = [
    [
      { contentTitle: 'Official websites use .gov', contentBody: `A <strong>.gov</strong> website belongs to an official government organization in the United States.` },
      {
        contentTitle: 'Secure .gov websites use HTTPS',
        contentBody: `A <strong>lock</strong> 
            ( <span class="lock-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" role="img" aria-labelledby="banner-lock-description" focusable="false">
            <title id="banner-lock">Lock</title>
            <desc id="banner-lock-description">Locked padlock icon</desc>
            <path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"></path>
            </svg></span> )
             or <strong>https://</strong> means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.`,
      },
    ],
    [
      { contentTitle: 'Official websites use .mil', contentBody: 'A <strong>.mil</strong> website belongs to an official U.S. Department of Defense organization.' },
      {
        contentTitle: 'Secure .mil websites use HTTPS',
        contentBody: `A <strong>lock</strong> ( <span class="lock-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" role="img" aria-labelledby="banner-lock-description" focusable="false">
            <title id="banner-lock">Lock</title>
            <desc id="banner-lock-description">Locked padlock icon</desc>
            <path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"></path>
            </svg></span> ) or <strong>https://</strong> means you’ve safely connected to the .mil website. Share sensitive information only on official, secure websites.`,
      },
    ],
    [
      {
        contentTitle: 'Los sitios web oficiales usan .gov',
        contentBody: 'Un sitio web <strong>.gov</strong> pertenece a una organización oficial del Gobierno de Estados Unidos.',
      },
      {
        contentTitle: 'Los sitios web seguros .gov usan HTTPS',
        contentBody: `Un <strong>candado</strong> ( <span class="lock-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" role="img" aria-labelledby="banner-lock-description" focusable="false">
            <title id="banner-lock">Lock</title>
            <desc id="banner-lock-description">Locked padlock icon</desc>
            <path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"></path>
            </svg></span> ) o <strong>https://</strong> significa que usted se conectó de forma segura a un sitio web .gov. Comparta información sensible sólo en sitios web oficiales y seguros.`,
      },
    ],
    [
      {
        contentTitle: 'Los sitios web oficiales usan .mil',
        contentBody: 'Un sitio web <strong>.gov</strong> pertenece a una organización oficial del Departamento de Defensa de EE. UU.',
      },
      {
        contentTitle: 'Los sitios web seguros .gov usan HTTPS',
        contentBody: `Un <strong>candado</strong> ( <span class="lock-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" role="img" aria-labelledby="banner-lock-description" focusable="false">
            <title id="banner-lock">Lock</title>
            <desc id="banner-lock-description">Locked padlock icon</desc>
            <path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"></path>
            </svg></span> ) o <strong>https://</strong> significa que usted se conectó de forma segura a un sitio web .mil. Comparta información sensible sólo en sitios web oficiales y seguros.`,
      },
    ],
  ];

  //The Icons that appear next to the content text, order is as follows .gov icon, https icon
  bannerContentIcons = [
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <title>icon-dot-gov</title>
      <path
        fill="#2378C3"
        fill-rule="evenodd"
        d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm0 1.208C14.994 1.208 1.208 14.994 1.208 32S14.994 62.792 32 62.792 62.792 49.006 62.792 32 49.006 1.208 32 1.208zm10.59 38.858a.857.857 0 0 1 .882.822v1.642H18.886v-1.642a.857.857 0 0 1 .882-.822H42.59zM25.443 27.774v9.829h1.642v-9.83h3.273v9.83H32v-9.83h3.272v9.83h1.643v-9.83h3.272v9.83h.76a.857.857 0 0 1 .882.821v.821h-21.3v-.809a.857.857 0 0 1 .88-.82h.762v-9.842h3.272zm5.736-8.188l12.293 4.915v1.642h-1.63a.857.857 0 0 1-.882.822H21.41a.857.857 0 0 1-.882-.822h-1.642v-1.642l12.293-4.915z"
      />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <title>icon-https</title>
      <path
        fill="#719F2A"
        fill-rule="evenodd"
        d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm0 1.208C14.994 1.208 1.208 14.994 1.208 32S14.994 62.792 32 62.792 62.792 49.006 62.792 32 49.006 1.208 32 1.208zm0 18.886a7.245 7.245 0 0 1 7.245 7.245v3.103h.52c.86 0 1.557.698 1.557 1.558v9.322c0 .86-.697 1.558-1.557 1.558h-15.53c-.86 0-1.557-.697-1.557-1.558V32c0-.86.697-1.558 1.557-1.558h.52V27.34A7.245 7.245 0 0 1 32 20.094zm0 3.103a4.142 4.142 0 0 0-4.142 4.142v3.103h8.284V27.34A4.142 4.142 0 0 0 32 23.197z"
      />
    </svg>,
  ];

  //The icons that appear next to the action text which changes when the banner is expanded, order is as follows collapse arrow, expand arrow
  bannerExpandIcons = [
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </svg>,
  ];

  //Unique id generated for the inner content of the banner
  inputID: string = crypto.randomUUID();

  getInputID = (side: string) => `content-inner-${side}-${this.inputID.slice(0, this.inputID.length / 2)}`;

  componentDidLoad() {
    this.determineBannerContent();
  }

  toggleBanner = () => {
    const content = this.el.shadowRoot.querySelector('.banner-content');

    this.bannerOpen = !this.bannerOpen;

    if (this.bannerOpen) {
      content.classList.add('banner-content__show');
      return;
    }

    content.classList.remove('banner-content__show');
    return;
  };

  determineBannerContent = () => {
    const contentInnerLeft = this.el.shadowRoot.querySelector(`.${this.getInputID('left')}`);
    const contentInnerRight = this.el.shadowRoot.querySelector(`.${this.getInputID('right')}`);

    if (contentInnerLeft && contentInnerRight) {
      if (this.bannerDomain == 'gov' && this.bannerLang == 'english') {
        contentInnerLeft.innerHTML = `
                    <p>
                        <strong>${this.bannerContent[0][0].contentTitle}</strong>
                        <br>
                        ${this.bannerContent[0][0].contentBody}
                    </p>
                `;
        contentInnerRight.innerHTML = `
                    <p>
                        <strong>${this.bannerContent[0][1].contentTitle}</strong>
                        <br>
                        ${this.bannerContent[0][1].contentBody}
                    </p>
                `;
      } else if (this.bannerDomain == 'mil' && this.bannerLang == 'english') {
        contentInnerLeft.innerHTML = `
                    <p>
                        <strong>${this.bannerContent[1][0].contentTitle}</strong>
                        <br>
                        ${this.bannerContent[1][0].contentBody}
                    </p>
                `;
        contentInnerRight.innerHTML = `
                    <p>
                        <strong>${this.bannerContent[1][1].contentTitle}</strong>
                        <br>
                        ${this.bannerContent[1][1].contentBody}
                    </p>
                `;
      } else if (this.bannerDomain == 'gov' && this.bannerLang == 'spanish') {
        contentInnerLeft.innerHTML = `
                    <p>
                        <strong>${this.bannerContent[2][0].contentTitle}</strong>
                        <br>
                        ${this.bannerContent[2][0].contentBody}
                    </p>
                `;
        contentInnerRight.innerHTML = `
                    <p>
                    <strong>${this.bannerContent[2][1].contentTitle}</strong>
                    <br>
                    ${this.bannerContent[2][1].contentBody}
                    </p>
                `;
      } else if (this.bannerDomain == 'mil' && this.bannerLang == 'spanish') {
        contentInnerLeft.innerHTML = `
                    <p>
                    <strong>${this.bannerContent[3][0].contentTitle}</strong>
                    <br>
                    ${this.bannerContent[3][0].contentBody}
                    </p>
                `;
        contentInnerRight.innerHTML = `
                    <p>
                    <strong>${this.bannerContent[3][1].contentTitle}</strong>
                    <br>
                    ${this.bannerContent[3][1].contentBody}
                    </p>
                `;
      }
      return;
    }

    return console.error('banner-content-doesnt-exist');
  };

  getButtonIcon() {
    return this.bannerOpen ? this.bannerExpandIcons[0] : this.bannerExpandIcons[1];
  }

  render() {
    return (
      <Host>
        <div class="banner-container">
          <header class="banner-header">
            <img src={'/flags/us_flag_small.png'} alt="United States Flag Icon" />
            <div class="banner-texts">
              <p>{this.bannerTitle}</p>
              <button onClick={this.toggleBanner}>
                {this.bannerAction} <span>{this.getButtonIcon()}</span>
              </button>
            </div>
          </header>
          <div class="banner-content">
            <div class="left-content">
              {this.bannerContentIcons[0]}
              <div class={`${this.getInputID('left')}`}></div>
            </div>
            <div class="right-content">
              {this.bannerContentIcons[1]}
              <div class={`${this.getInputID('right')}`}></div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
