import { Player } from "./Player";

export class Coach extends Player {
    constructor(id, name, phone, email, areas, summary, rate) {
        super(id, name, phone, email);
        this.areas = areas;
        this.summary = summary;
        this.rate = rate;
    }
}
