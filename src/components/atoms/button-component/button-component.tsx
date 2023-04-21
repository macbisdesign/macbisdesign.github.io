import { Component, Host, h, Prop} from "@stencil/core";

@Component({
    tag: 'button-component',
    styleUrl: 'button-component.css',
    shadow: true
})

export class ButtonComponent{
    @Prop() size: string = 'medium';
    @Prop() type: string
    @Prop() label: string

    buttonClicked = () => {
        alert('hey');
    }

    render() {
        return (
            <Host>
                <h5>{this.type} {this.size} button</h5>
                <button type="button" onClick={this.buttonClicked} class={`storybook-button storybook-button--${this.type} storybook-button--${this.size}`}>{this.label}</button>
            </Host>
        );
    }
}
