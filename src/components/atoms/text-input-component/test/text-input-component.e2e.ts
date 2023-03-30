import { newE2EPage } from '@stencil/core/testing';

describe('text-input-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-input-component></text-input-component>');

    const element = await page.find('text-input-component');
    expect(element).toHaveClass('hydrated');
  });
});
