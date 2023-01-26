import { Player } from "./Player";

export class Coach extends Player {
    constructor(name, phone, email, areas, summary, rate) {
        super(new Date().toLocaleTimeString(), name, phone, email);
        this.areas = areas;
        this.summary = summary;
        this.rate = rate;
    }
}
