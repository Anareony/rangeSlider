interface ModelState {
    min: number;
    max: number;
    step: number;
}

interface VisualState {
    scale: boolean;
    direction: 'horizontal' | 'vertical';
    skin: 'green' | 'blue';
    bar: boolean;
}

type EventCallback = (data?: any) => void;

interface Events {
    [key: string]: EventCallback[];
}

export {ModelState, VisualState, EventCallback, Events};