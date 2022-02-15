class Bar {
    constructor(protected direction: string, anchor: HTMLElement) {
        const barTemplate = '</div><div class="slider__bar"></div>';
        const slider = anchor.querySelector('.slider');
  
        if (!slider) throw new Error('.slider - не было найдено!');
  
        slider.insertAdjacentHTML('beforeend', barTemplate);
    }
}