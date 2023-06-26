import { Component, Element, State, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "section-component",
  styleUrl: "section-component.css",
  shadow: true,
})
export class SectionComponent {
  @Element() el: HTMLElement;

  @State() sectionOpen: boolean = false;

  @Prop() sectionButtonLabel: string = "Section";

  toggleSection() {
    const content = this.el.shadowRoot.querySelector(".section-content");

    this.sectionOpen = !this.sectionOpen;

    if (this.sectionOpen) {
      content.classList.add("section-content--show");
      return;
    }

    content.classList.remove("section-content--show");
  }

  render() {
    return (
      <Host>
        <button class="section-button" onClick={this.toggleSection}>
          {this.sectionButtonLabel}
        </button>
        {this.sectionOpen && <section class="section-content">Content</section>}
      </Host>
    );
  }
}
