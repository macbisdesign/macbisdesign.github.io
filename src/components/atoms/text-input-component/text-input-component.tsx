import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'text-input-component',
  styleUrl: 'text-input-component.css',
  shadow: true,
})

export class TextInputComponent {

  render() {
    return (
      <Host>
        <input class="text-input"/>
      </Host>
    );
  }

}


// export class InputComponent {
//   @Prop() label: string;
//   @Prop() type: string = 'text';
//   @Prop() inputId: string = `text-input}`;
//   @Prop({ mutable: true }) value: string = '';

//   private handleChange = (event: Event) => {
//     const input = event.target as HTMLInputElement;
//     this.value = input.value;
//   };
  
//   render() {
//     return (
//       <Host>
//       <div>
//         <label htmlFor={this.inputId}>{this.label}</label>
//         <input class="text-input" type={this.type} id={this.inputId} value={this.value} onChange={this.handleChange} />
//       </div>
//       </Host>
//     );
//   }
// }

