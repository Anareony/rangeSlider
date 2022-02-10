const thumb = slider.querySelector('.thumb'); 
class sliders {
    constructor(){
        this.addEventListeners();
    }

    addEventListeners(event) {   
        event.preventDefault();
        thumb.addEventListener('mousedown', this.Starege.bind(this));
    }

    Starege() {
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('mouseup', this.onMouseUp.bind(this));
    }
    
    onMouseMove(event) {
        let newLeft = event.clientX - slider.getBoundingClientRect().left;

        if (newLeft < 0) {
        newLeft = 0;
        }
        
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;

        if (newLeft > rightEdge) {
        newLeft = rightEdge;
        }

        thumb.style.left = newLeft + 'px';
    }

    onMouseUp() {
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('mousemove', this.onMouseMove);
    }
}

const sliderObserver = new sliders()
    

