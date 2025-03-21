export class NavItemSidebar {
    public icon!: string;
    public label!: string;
    public link!: string;
    public childs?: NavItemSidebar[];

    constructor(icon: string, label: string, link: string, childs?: NavItemSidebar[]) {
        this.icon = icon;
        this.label = label;
        this.link = link;
        this.childs = childs;
    }

    public hasChilds(): boolean {
        return this.childs?.length! > 0;
    }
}