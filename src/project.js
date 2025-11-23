import { Handler } from "./handler.js";
import { TaskItem } from "./taskItem.js"

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
    add(title, description, dueDate, priority) {
        const newTask = new TaskItem(title, description, dueDate, priority=1);
        this.items.push(newTask);
        return newTask
    }
}
