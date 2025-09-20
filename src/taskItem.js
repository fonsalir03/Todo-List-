import {isPast} from "date-fns";

class TaskItem{
    _title = undefined
    _description = undefined
    _dueDate = undefined
    _priority = undefined
    completed = false;

    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate
        this.priority = priority
    }

    get title(){
        return this._title
    }
    set title(newTitle){
        this._title = newTitle;
    }
    
    get description(){
        return this._description;
    }
    set description(newDescription){
        this._description = newDescription
    }

    get dueDate(){
        return this._dueDate
    }
    set dueDate(dateArr){
        const year = dateArr[0], monthIndex = dateArr[1] - 1, day = dateArr[2];
        const newDate = new Date(year, monthIndex, day);
        if (isPast(newDate) == false){
            this._dueDate = newDate
        }else{
            console.log("Due date must be a day that has not passed!");
        }
    }

    get priority(){
        return this._priority;
    }
    set priority(newPriority){
        const MAX_PRIORITY = 3
        if (typeof newPriority != "number"){
            console.log("invalid input, must be number");
            return
        }else if (newPriority >= 1 && newPriority <= MAX_PRIORITY){
            this._priority = newPriority;
        }
    }

    toggleCompleted(){
        this.completed = !this.completed;
    };

}

export {TaskItem}


