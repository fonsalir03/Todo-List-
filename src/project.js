import { Handler } from "./handler.js";

export class Project extends Handler{
    constructor(name) {
        super()
        this.name = name
    }
    updateName(newName){
        this.name = newName
    }
}
