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
    @Prop() state: string
    @Prop() iconPosition: string

    buttonClicked = () => {
        alert('hey');
    }

    render() {
        return (
            <Host>
                <button 
                    type="button" 
                    onClick={this.buttonClicked} 
                    class={`storybook-button storybook-button--${this.type}-${this.state} storybook-button--${this.size}`}
                >
                    {
                        this.iconPosition === 'left' && <svg class="svg-left" xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="#205493"/>
                        </svg>
                    }
                    {this.label}
                    {
                        this.iconPosition === 'right' && <svg class="svg-right" xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00009 0L0.590088 1.41L5.17009 6L0.590088 10.59L2.00009 12L8.00009 6L2.00009 0Z" fill="white"/>
                        </svg>
                    }
                </button>
            </Host>
        );
    }
}
