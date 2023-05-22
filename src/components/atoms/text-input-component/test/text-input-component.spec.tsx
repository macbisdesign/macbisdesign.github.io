import { newSpecPage } from '@stencil/core/testing';
import { TextInputComponent } from '../text-input-component';

describe('text-input-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TextInputComponent],
      html: `<text-input-component></text-input-component>`,
    });
    expect(page.root).toEqualHtml(`
      <text-input-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-input-component>
    `);
  });
});
