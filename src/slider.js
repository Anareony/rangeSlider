let thumb1 = slider.querySelector('.thumb1');
let thumb2 = slider.querySelector('.thumb2');
    
    
    thumb1.onmousedown = function (event) {
        
        event.preventDefault();

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    
    function onMouseMove(event) {
        let newLeft1 = event.clientX - slider.getBoundingClientRect().left;
        let newLeft2 = event.clientX - slider.getBoundingClientRect().left;

        if (newLeft1 < 0) {
        newLeft1 = 0;
        }
        let rightEdge1 = slider.offsetWidth - thumb1.offsetWidth;
        if (newLeft1 > rightEdge1) {
        newLeft1 = rightEdge1;
        }

        if (newLeft2 < 0) {
        newLeft2 = 0;
        }
        let rightEdge2 = slider.offsetWidth - thumb2.offsetWidth;
        if (newLeft2 > rightEdge2) {
        newLeft2 = rightEdge2;
        }

        thumb1.style.left = newLeft1 + 'px';
        thumb2.style.left = newLeft2 + 'px';
    }


    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }


    thumb.ondragstart = function() {
        return false;
    };