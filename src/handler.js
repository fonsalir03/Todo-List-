import { Project } from "./project"

export class Handler{

    constructor() {
        this.items = []
        this.selectedItem
    }
    select(index){
        this.selectedItem = this.items[index]
    }
    get(){
        return this.selectedItem
    }
    delete(index){
        this.items.splice(index,1)
    }
    create(title, desc){
        const newProject = new Project(title, desc)
        this.items.push(newProject)
        return newProject
    }
};

//testing
