import { Handler } from "./handler.js";

export class Project extends Handler{
    constructor(name, description) {
        super();
        this.name = name;
        this.description = description;
    }
    updateName(newName){
        this.name = newName;
    }
    updateDescription(newDescription){
        this.description = newDescription;
    }
}
