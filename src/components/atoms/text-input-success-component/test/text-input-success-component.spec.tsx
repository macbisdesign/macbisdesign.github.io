import { newSpecPage } from '@stencil/core/testing';
import { TextInputSuccessComponent } from '../text-input-success-component';

describe('text-input-success-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TextInputSuccessComponent],
      html: `<text-input-success-component></text-input-success-component>`,
    });
    expect(page.root).toEqualHtml(`
      <text-input-success-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-input-success-component>
    `);
  });
});
