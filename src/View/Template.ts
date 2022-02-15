import { VisualState } from '../Interfaces/Interfaces';

class Template {
    public wrapper: HTMLElement | null = null;
    public anchor : HTMLElement | null = null;
  

    public init() {
        const sliderTemplate = `
        <div class="wrapper-slider wrapper-slider--direction">
            <div class="slider slider--direction slider--skin">
            <div class="slider__bar-empty">
            </div>
        </div>
        `;

        anchor.insertAdjacentHTML('afterbegin', sliderTemplate);
        this.wrapper = anchor.querySelector('.wrapper-slider');
  }
}

export default Template;