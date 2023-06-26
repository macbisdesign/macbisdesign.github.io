import {
  Component,
  Host,
  h,
  Prop,
  getAssetPath,
  State,
  Listen,
} from "@stencil/core";
import { defaultImg } from "../../../utils/constants";
import cn from "classnames";

@Component({
  tag: "banner-component",
  styleUrl: "banner-component.css",
  shadow: true,
  assetsDirs: ["assets"],
})
export class BannerComponent {
  @Prop() headline: string;
  @Prop() action: string;
  @Prop() img = defaultImg;

  @State() isNotOpen = true;

  @Listen("click")
  private handleClick() {
    this.isNotOpen = !this.isNotOpen;
  }

  render() {
    const imgSrc = getAssetPath(`./assets/${this.img}`);

    return (
      <Host>
        <div class="bg-gray-100 px-8 py-4">
          <header class="flex gap-x-2.5">
            <img class="w-6 object-contain" src={imgSrc} alt="" />
            <div>
              {this.headline}{" "}
              <p
                onClick={this.handleClick}
                class="inline-flex cursor-pointer items-center gap-x-1 text-blue-600 underline hover:text-blue-700"
              >
                <span>{this.action}</span>
                <span>
                  {this.isNotOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  )}
                </span>
              </p>
            </div>
          </header>

          <div
            class={cn("mt-2 flex gap-x-2.5", {
              hidden: this.isNotOpen,
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              viewBox="0 0 64 64"
            >
              <title>icon-dot-gov</title>
              <path
                fill="#2378C3"
                fill-rule="evenodd"
                d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm0 1.208C14.994 1.208 1.208 14.994 1.208 32S14.994 62.792 32 62.792 62.792 49.006 62.792 32 49.006 1.208 32 1.208zm10.59 38.858a.857.857 0 0 1 .882.822v1.642H18.886v-1.642a.857.857 0 0 1 .882-.822H42.59zM25.443 27.774v9.829h1.642v-9.83h3.273v9.83H32v-9.83h3.272v9.83h1.643v-9.83h3.272v9.83h.76a.857.857 0 0 1 .882.821v.821h-21.3v-.809a.857.857 0 0 1 .88-.82h.762v-9.842h3.272zm5.736-8.188l12.293 4.915v1.642h-1.63a.857.857 0 0 1-.882.822H21.41a.857.857 0 0 1-.882-.822h-1.642v-1.642l12.293-4.915z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              viewBox="0 0 64 64"
            >
              <title>icon-https</title>
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
