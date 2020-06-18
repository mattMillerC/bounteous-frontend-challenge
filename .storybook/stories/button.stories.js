export default { title: 'Button' };

export const noText = () => '<button class="button"></button>';
export const withText = () => '<button class="button">Hello World</button>';
// If the button content is too long for its container,
// we should get ellipse on overflow
export const longText = () => `
  <div style="width: 200px;">
    <button class="button">Lorem ipsum dolor sit amet, consectetur adipiscing elit</button>
  </div>`;