export class Player {
    name

    score

    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    get PlayerTemplateCard() {
        return /*html*/`
        <div>
        <div>
        ${this.name} - ${this.score}
        </div>
        </div>`
    }
}