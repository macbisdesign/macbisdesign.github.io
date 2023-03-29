import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'input-component',
  styleUrl: 'input-component.css',
  shadow: true,
})

export class InputComponent {
  @Prop() label: string;
  @Prop() type: string = 'text';
  @Prop() inputId: string = `text-input}`;
  @Prop({ mutable: true }) value: string = '';

  private handleChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  };
  
  render() {
    return (
      <Host>
      <div class="text-input">
        <label htmlFor={this.inputId}>{this.label}</label>
        <input type={this.type} id={this.inputId} value={this.value} onChange={this.handleChange} />
      </div>
      </Host>
    );
  }
}

// export class InputComponent {

//   render() {
//     return (
//       <Host>
//         <slot>
//           <h1>HI</h1>
//         </slot>
//       </Host>
//     );
//   }

// }
