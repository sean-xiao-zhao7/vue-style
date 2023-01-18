export class Resource {
    constructor(title, details, url) {
        this.id = new Date().toISOString();
        this.title = title;
        this.details = details;
        this.url = url;
    }
}
