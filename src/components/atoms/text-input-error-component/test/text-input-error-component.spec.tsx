import { newSpecPage } from '@stencil/core/testing';
import { TextInputErrorComponent } from '../text-input-error-component';

describe('text-input-error-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TextInputErrorComponent],
      html: `<text-input-error-component></text-input-error-component>`,
    });
    expect(page.root).toEqualHtml(`
      <text-input-error-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-input-error-component>
    `);
  });
});
