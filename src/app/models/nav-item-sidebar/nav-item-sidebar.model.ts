export class NavItemSidebar {
    public icon!: string;
    public label!: string;
    public link!: string;
    public children?: NavItemSidebar[];

    constructor(icon: string, label: string, link: string, children?: NavItemSidebar[]) {
        this.icon = icon;
        this.label = label;
        this.link = link;
        this.children = children;
    }

    public hasChildren(): boolean {
        return this.children?.length! > 0;
    }
}