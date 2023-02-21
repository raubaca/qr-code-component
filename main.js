class QRCode extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('article');
    wrapper.setAttribute('class', 'card');

    const image = document.createElement('picture');
    const img = document.createElement('img');

    img.setAttribute('class', 'card__img');
    img.setAttribute('alt', 'QR Code');
    img.setAttribute('width', '288px');
    img.setAttribute('height', '288px');

    img.src = this.getAttribute('img');
    image.appendChild(img);

    const title = document.createElement('h1');
    title.setAttribute('class', 'card__title');
    title.textContent = this.getAttribute('data-title') || 'Title...';

    const text = document.createElement('p');
    text.setAttribute('class', 'card__text');
    text.textContent = this.getAttribute('data-text') || 'Content...';

    const style = document.createElement('style');
    console.log(style.isConnected);

    style.textContent = `
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .card {
        max-width: 320px;
        background: var(--white);
        padding: 16px;
        height: 496px;
        text-align: center;
        border-radius: 2rem;
        box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.05);
      }

      .card__img {
        display: block;
        max-width: 100%;
        border-radius: 1rem;
      }

      .card__title {
        font-size: 2.2rem;
        margin-top: 2.2rem;
        margin-bottom: 0;
        color: var(--dark-blue);
      }

      .card__text {
        margin: 1.5rem;
      }
    `;

    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);

    wrapper.appendChild(image);
    wrapper.appendChild(title);
    wrapper.appendChild(text);
  }
}

customElements.define('qr-code', QRCode);
