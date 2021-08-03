import { css, html, LitElement } from 'lit';
import { property} from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

console.log('DEF');

export const tagName = 'on-logo';

//@customElement('on-logo')
export class Logo extends LitElement {
  @property({type: String}) background = '#000000';

  @property({type: String}) color = '#ffffff';

  static styles = css`
    .wrapper {
      width: 300px;
      height: 300px;
      position: relative;
      margin: 4em auto;
      border-radius: .5rem;
    }
    .name {
      position: absolute;
      bottom: 1rem;
      right: 1.5rem;
      font-size: 10rem;
      line-height: 8rem;
      letter-spacing: -.5rem;
      font-weight: 700;
      font-family: 'Inter';
      text-shadow: 1px 1px 2px rgba(0,0,0,.2);
    }
  `;

  constructor() {
    super();
    console.log('SUPR');
  }

  render() {
    console.log('RND');
    return html`
      <div class="wrapper" style=${styleMap({background: this.background, color: this.color})}>
        <div class="name">O<br>N</div>
      </div>
      <div class="controls">
        <fieldset>
          <label>
            Background:
            <input 
              name="background" 
              value=${this.background} 
              @input=${e => this.background = e.target.value}
            >
          </label>
        </fieldset>
        <fieldset>
          <label>
            Color:
            <input
              name="color"
              value=${this.color}
              @input=${e => this.color = e.target.value}
            >
          </label>
        </fieldset>
      </div>
    `;
  }
}

customElements.define(tagName, Logo);
