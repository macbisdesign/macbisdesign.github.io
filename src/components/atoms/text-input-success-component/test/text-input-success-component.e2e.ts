import { newE2EPage } from '@stencil/core/testing';

describe('text-input-success-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-input-success-component></text-input-success-component>');

    const element = await page.find('text-input-success-component');
    expect(element).toHaveClass('hydrated');
  });
});
