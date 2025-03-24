import { TypeChat } from "./chat.type";

export class Chat {

    private id: number;
    private name: string;
    private type: TypeChat

    constructor(id: number, name: string, type?: TypeChat) {
        this.id = id;
        this.name = name;
        this.type = type || null;
    }

    public getId(): number { return this.id; }
    public setId(id: number): void { this.id = id; }

    public getName(): string { return this.name; }
    public setName(name: string): void { this.name = name; }

    public getType(): TypeChat { return this.type; }
    public setType(type: TypeChat): void { this.type = type; }

}