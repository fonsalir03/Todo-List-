import {isPast, parse, format} from "date-fns";

export class TaskItem{
    #title = undefined
    #description = undefined
    #dueDate = undefined
    #priority = undefined
    completed = false;

    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate
        this.priority = priority
    }

    get title(){
        return this.#title
    }
    set title(newTitle){
        this.#title = newTitle;
    }
    
    get description(){
        return this.#description;
    }
    set description(newDescription){
        this.#description = newDescription
    }

    get dueDate(){
        return format(this.#dueDate, "MM/dd/yyyy")
    }
    set dueDate(dateStr){
        //const year = dateArr[0], monthIndex = dateArr[1] - 1, day = dateArr[2];
        const newDate = parse(dateStr, "yyyy-MM-dd", new Date())
        this.#dueDate = newDate

        if (isPast(newDate) == false){
            //TASK IS OUTDATED
        }
    }

    get priority(){
        return this.#priority;
    }
    set priority(newPriority){
        const MAX_PRIORITY = 3
        if (typeof newPriority != "number"){
            console.log("invalid input, must be number");
            return
        }else if (newPriority >= 1 && newPriority <= MAX_PRIORITY){
            this.#priority = newPriority;
        }
    }

    toggleCompleted(){
        this.completed = !this.completed;
    };

}



