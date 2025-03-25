import { NgGridStackWidget } from "gridstack/dist/angular";
import { IWidgetHeader } from "./widget-header/widget-header.interface";
import { IWidget } from "./widget.interface";

interface IWidgetOptions {
    id: string;
    dragable: boolean;
    selector: string;
    position: IWidgetPosition;
    size: IWidgetSize;
}

class WidgetOptions implements IWidgetOptions {
    id: string;
    dragable: boolean;
    selector: string;
    position: WidgetPosition;
    size: WidgetSize;

    constructor(options: IWidgetOptions) {
        const { id, dragable, selector, position, size } = options;
        this.id = id;
        this.dragable = dragable;
        this.selector = selector;
        this.position = new WidgetPosition(position.x, position.y);
        this.size = new WidgetSize(size.w, size.h);
    }

    setId(id: string): void {
        this.id = id;
    }

    setDragable(dragable: boolean): void {
        this.dragable = dragable;
    }

    setSelector(selector: string): void {
        this.selector = selector;
    }
}

interface IWidgetPosition {
    x: number;
    y: number;
}

class WidgetPosition implements IWidgetPosition {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    setX(x: number): void {
        this.x = x;
    }

    setY(y: number): void {
        this.y = y;
    }
}

interface IWidgetSize {
    w: number;
    h: number;
}

class WidgetSize implements IWidgetSize {
    w: number;
    h: number;

    constructor(w: number, h: number) {
        this.w = w;
        this.h = h;
    }

    setW(w: number): void {
        this.w = w;
    }

    setH(h: number): void {
        this.h = h;
    }
}

export class Widget implements IWidget {

    options: WidgetOptions;
    header: IWidgetHeader;

    name: string;

    constructor(options: IWidgetOptions, header: IWidgetHeader) {
        this.options = new WidgetOptions(options);
        this.name = options.id;
        this.header = header;
    }

    toGridstackItem(): NgGridStackWidget {
        return {
            id: this.options.id,
            noMove: !this.options.dragable,
            noResize: true,
            x: this.options.position.x,
            y: this.options.position.y,
            w: this.options.size.w,
            h: this.options.size.h,
            selector: this.options.selector,
            input: {
                widget: this
            }
        };
    }

}