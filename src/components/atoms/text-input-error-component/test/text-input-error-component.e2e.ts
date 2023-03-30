import { newE2EPage } from '@stencil/core/testing';

describe('text-input-error-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-input-error-component></text-input-error-component>');

    const element = await page.find('text-input-error-component');
    expect(element).toHaveClass('hydrated');
  });
});
