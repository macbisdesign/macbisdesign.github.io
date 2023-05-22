import { r as registerInstance, h, e as Host, g as getElement } from './index-e0e1a529.js';

const bannerComponentCss = ":host{--background-color:#f0f0f0;--font-color:#1b1b1b;--action-default-color:#005ea2;--action-hover-color:#1a4480;--action-focus-outline-color:#2491ff;--font-size-mobile:0.87rem;--font-size-desktop:1rem;--font-family:Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif}.banner-container{width:100%;margin:0;padding:0;background:var(--background-color);color:var(--font-color);font-size:var(--font-size-mobile);font-family:var(--font-family);font-weight:400;line-height:1.5;min-height:3rem}.banner-header{display:flex;align-items:center;gap:0.6rem;max-width:64rem;padding-inline:2rem}.banner-header>img{width:1.4rem}.banner-texts{display:flex}.banner-texts>button{display:flex;justify-content:center;align-items:center;font-family:var(--font-family);font-size:var(--font-size-mobile);border:0;color:var(--action-default-color);text-decoration:underline}.banner-texts>button:hover{color:var(--action-hover-color);cursor:pointer}.banner-texts>button:focus{outline:0.25rem solid var(--action-focus-outline-color)}.banner-texts>button span>svg{width:1.4rem;height:1.4rem;fill:var(--action-default-color)}.banner-texts>button:hover span>svg{fill:var(--action-hover-color)}.banner-content{display:none}.banner-content__show{display:flex;gap:1rem;padding-left:1rem;flex-wrap:wrap}.left-content{display:flex;gap:1rem;max-width:40rem}.left-content>svg{flex-shrink:0;margin-right:0.5rem;width:2.5rem}.right-content{display:flex;gap:1rem;max-width:40rem}.right-content>svg{flex-shrink:0;margin-right:0.5rem;width:2.5rem}.lock-icon>svg{width:0.8rem;height:0.8rem}@media screen and (min-width: 768px){.banner-container{font-size:var(--font-size-desktop)}.banner-texts>button{font-size:var(--font-size-desktop)}}";

const BannerComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    //The content for each type of banner order is as follows english/gov, english/mil, spanish/gov, spanish/mil
    this.bannerContent = [
      [
        { contentTitle: 'Official websites use .gov', contentBody: `A <strong>.gov</strong> website belongs to an official government organization in the United States.` },
        { contentTitle: 'Secure .gov websites use HTTPS', contentBody: `A <strong>lock</strong> 
            ( <span class="lock-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" role="img" aria-labelledby="banner-lock-description" focusable="false">
            <title id="banner-lock">Lock</title>
            <desc id="banner-lock-description">Locked padlock icon</desc>
            <path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"></path>
            </svg></span> )
             or <strong>https://</strong> means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.` }
      ],
      [
        { contentTitle: 'Official websites use .mil', contentBody: 'A <strong>.mil</strong> website belongs to an official U.S. Department of Defense organization.' },
        { contentTitle: 'Secure .mil websites use HTTPS', contentBody: `A <strong>lock</strong> ( <span class="lock-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" role="img" aria-labelledby="banner-lock-description" focusable="false">
            <title id="banner-lock">Lock</title>
            <desc id="banner-lock-description">Locked padlock icon</desc>
            <path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"></path>
            </svg></span> ) or <strong>https://</strong> means you’ve safely connected to the .mil website. Share sensitive information only on official, secure websites.` }
      ],
      [
        { contentTitle: 'Los sitios web oficiales usan .gov', contentBody: 'Un sitio web <strong>.gov</strong> pertenece a una organización oficial del Gobierno de Estados Unidos.' },
        { contentTitle: 'Los sitios web seguros .gov usan HTTPS', contentBody: `Un <strong>candado</strong> ( <span class="lock-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" role="img" aria-labelledby="banner-lock-description" focusable="false">
            <title id="banner-lock">Lock</title>
            <desc id="banner-lock-description">Locked padlock icon</desc>
            <path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"></path>
            </svg></span> ) o <strong>https://</strong> significa que usted se conectó de forma segura a un sitio web .gov. Comparta información sensible sólo en sitios web oficiales y seguros.` }
      ],
      [
        { contentTitle: 'Los sitios web oficiales usan .mil', contentBody: 'Un sitio web <strong>.gov</strong> pertenece a una organización oficial del Departamento de Defensa de EE. UU.' },
        { contentTitle: 'Los sitios web seguros .gov usan HTTPS', contentBody: `Un <strong>candado</strong> ( <span class="lock-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" role="img" aria-labelledby="banner-lock-description" focusable="false">
            <title id="banner-lock">Lock</title>
            <desc id="banner-lock-description">Locked padlock icon</desc>
            <path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"></path>
            </svg></span> ) o <strong>https://</strong> significa que usted se conectó de forma segura a un sitio web .mil. Comparta información sensible sólo en sitios web oficiales y seguros.` }
      ]
    ];
    //The Icons that appear next to the content text, order is as follows .gov icon, https icon
    this.bannerContentIcons = [
      h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "64", height: "64", viewBox: "0 0 64 64" }, h("title", null, "icon-dot-gov"), h("path", { fill: "#2378C3", "fill-rule": "evenodd", d: "M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm0 1.208C14.994 1.208 1.208 14.994 1.208 32S14.994 62.792 32 62.792 62.792 49.006 62.792 32 49.006 1.208 32 1.208zm10.59 38.858a.857.857 0 0 1 .882.822v1.642H18.886v-1.642a.857.857 0 0 1 .882-.822H42.59zM25.443 27.774v9.829h1.642v-9.83h3.273v9.83H32v-9.83h3.272v9.83h1.643v-9.83h3.272v9.83h.76a.857.857 0 0 1 .882.821v.821h-21.3v-.809a.857.857 0 0 1 .88-.82h.762v-9.842h3.272zm5.736-8.188l12.293 4.915v1.642h-1.63a.857.857 0 0 1-.882.822H21.41a.857.857 0 0 1-.882-.822h-1.642v-1.642l12.293-4.915z" })),
      h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "64", height: "64", viewBox: "0 0 64 64" }, h("title", null, "icon-https"), h("path", { fill: "#719F2A", "fill-rule": "evenodd", d: "M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm0 1.208C14.994 1.208 1.208 14.994 1.208 32S14.994 62.792 32 62.792 62.792 49.006 62.792 32 49.006 1.208 32 1.208zm0 18.886a7.245 7.245 0 0 1 7.245 7.245v3.103h.52c.86 0 1.557.698 1.557 1.558v9.322c0 .86-.697 1.558-1.557 1.558h-15.53c-.86 0-1.557-.697-1.557-1.558V32c0-.86.697-1.558 1.557-1.558h.52V27.34A7.245 7.245 0 0 1 32 20.094zm0 3.103a4.142 4.142 0 0 0-4.142 4.142v3.103h8.284V27.34A4.142 4.142 0 0 0 32 23.197z" }))
    ];
    //The icons that appear next to the action text which changes when the banner is expanded, order is as follows collapse arrow, expand arrow
    this.bannerExpandIcons = [
      h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" })),
      h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" }))
    ];
    //Unique id generated for the inner content of the banner
    this.inputID = crypto.randomUUID();
    this.getInputID = (side) => `content-inner-${side}-${this.inputID.slice(0, this.inputID.length / 2)}`;
    this.toggleBanner = () => {
      const content = this.el.shadowRoot.querySelector('.banner-content');
      this.bannerOpen = !this.bannerOpen;
      if (this.bannerOpen) {
        content.classList.add('banner-content__show');
        return;
      }
      content.classList.remove('banner-content__show');
      return;
    };
    this.determineBannerContent = () => {
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
        }
        else if (this.bannerDomain == 'mil' && this.bannerLang == 'english') {
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
        }
        else if (this.bannerDomain == 'gov' && this.bannerLang == 'spanish') {
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
        }
        else if (this.bannerDomain == 'mil' && this.bannerLang == 'spanish') {
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
    this.bannerOpen = false;
    this.bannerTitle = undefined;
    this.bannerAction = undefined;
    this.bannerDomain = undefined;
    this.bannerLang = undefined;
  }
  componentDidLoad() {
    this.determineBannerContent();
  }
  getButtonIcon() {
    return this.bannerOpen ? this.bannerExpandIcons[0] : this.bannerExpandIcons[1];
  }
  render() {
    return (h(Host, null, h("div", { class: 'banner-container' }, h("header", { class: "banner-header" }, h("img", { src: '/flags/us_flag_small.png', alt: "United States Flag Icon" }), h("div", { class: "banner-texts" }, h("p", null, this.bannerTitle), h("button", { onClick: this.toggleBanner }, this.bannerAction, " ", h("span", null, this.getButtonIcon())))), h("div", { class: "banner-content" }, h("div", { class: "left-content" }, this.bannerContentIcons[0], h("div", { class: `${this.getInputID('left')}` })), h("div", { class: "right-content" }, this.bannerContentIcons[1], h("div", { class: `${this.getInputID('right')}` }))))));
  }
  static get assetsDirs() { return ["./"]; }
  get el() { return getElement(this); }
};
BannerComponent.style = bannerComponentCss;

export { BannerComponent as banner_component };