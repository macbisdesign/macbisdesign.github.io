import cn from 'classnames';
import { Component, Host, h, Prop, getAssetPath, State, Listen } from '@stencil/core';

@Component({
  tag: 'banner-component',
  styleUrl: 'banner-component.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class BannerComponent {
  /** The headline of the component. */
  @Prop() headline: string;
  /** The action that you would like to perform. */
  @Prop() action: string;
  /** The url for the image. */
  @Prop() content1: string;
  @Prop() content2: string;
  @Prop() img = 'us-flag-small.png';
  /** If true, the dark mode styles get applied */
  @Prop() darkMode = false;
  /** The size of the component */
  @Prop() size: 'base' | 'sm' = 'sm';

  @State() isNotOpen = true;

  @Listen('click')
  private handleClick() {
    this.isNotOpen = !this.isNotOpen;
  }

  render() {
    const imgSrc = getAssetPath(`./assets/${this.img}`);

    return (
      <Host>
        {/* <div class={cn('py-1 px-4', this.darkMode ? 'bg-[#1B1B1B]' : 'bg-[#F0F0F0]', { 'lg:px-8': this.size === 'base', })}> */}
        <div class={cn('py-1 px-4', this.darkMode ? 'bg-[#1B1B1B]' : 'bg-[#F0F0F0]')}>
          <div class="flex items-start gap-x-2">
            <img class="w-4 object-contain" src={imgSrc} alt="" />

            <div
              class={cn('flex gap-2', {
                'lg:flex-row': this.size === 'base',
              })}
            >
              <span
                class={cn('text-xs', {
                  'text-white': this.darkMode,
                })}
              >
                {this.headline}
              </span>

              <div class={cn('flex cursor-pointer gap-x-2 text-xs', this.darkMode ? 'text-[#73B3E7]' : 'text-[#0071BC]')} onClick={this.handleClick}>
                {this.action}
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.56 5.72668L8.5 8.78002L5.44 5.72668L4.5 6.66668L8.5 10.6667L12.5 6.66668L11.56 5.72668Z"
                    fill="currentColor"
                  />
                </svg>
                <p>{this.content1}</p>
              </div>
            </div>
          </div>

          <div
            class={cn('mt-2 flex gap-x-2.5', {
              hidden: this.isNotOpen,
            })}
          >
            <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path
                fill="#2378C3"
                fill-rule="evenodd"
                d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm0 1.208C14.994 1.208 1.208 14.994 1.208 32S14.994 62.792 32 62.792 62.792 49.006 62.792 32 49.006 1.208 32 1.208zm10.59 38.858a.857.857 0 0 1 .882.822v1.642H18.886v-1.642a.857.857 0 0 1 .882-.822H42.59zM25.443 27.774v9.829h1.642v-9.83h3.273v9.83H32v-9.83h3.272v9.83h1.643v-9.83h3.272v9.83h.76a.857.857 0 0 1 .882.821v.821h-21.3v-.809a.857.857 0 0 1 .88-.82h.762v-9.842h3.272zm5.736-8.188l12.293 4.915v1.642h-1.63a.857.857 0 0 1-.882.822H21.41a.857.857 0 0 1-.882-.822h-1.642v-1.642l12.293-4.915z"
              ></path>
            </svg>
            

            <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path
                fill="#719F2A"
                fill-rule="evenodd"
                d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm0 1.208C14.994 1.208 1.208 14.994 1.208 32S14.994 62.792 32 62.792 62.792 49.006 62.792 32 49.006 1.208 32 1.208zm0 18.886a7.245 7.245 0 0 1 7.245 7.245v3.103h.52c.86 0 1.557.698 1.557 1.558v9.322c0 .86-.697 1.558-1.557 1.558h-15.53c-.86 0-1.557-.697-1.557-1.558V32c0-.86.697-1.558 1.557-1.558h.52V27.34A7.245 7.245 0 0 1 32 20.094zm0 3.103a4.142 4.142 0 0 0-4.142 4.142v3.103h8.284V27.34A4.142 4.142 0 0 0 32 23.197z"
              ></path>
            </svg>
          </div>
        </div>
      </Host>
    );
  }
}
