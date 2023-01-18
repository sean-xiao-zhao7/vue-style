export class Resource {
    constructor(title, details, url) {
        this.id = new Date().toISOString() + Math.random();
        this.title = title;
        this.details = details;
        this.url = url;
    }
}
