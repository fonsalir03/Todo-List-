function TaskItem(title, description, dueDate, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;

    this.updateTitle = (function(newTitle){
        this.title = newTitle;
    });
    
    this.updateDescription = (function(newDescription){
        this.description = newDescription;
    });

    this.updateDueDate = (function(newDueDate){
        this.dueDate = newDueDate;
    });

    this.updatePriority = (function(newPriority){
        const MAX_PRIORITY = 3
        if (typeof newPriority != "number"){
            console.log("invalid input, must be number");
            return
        }else if (newPriority >= 1 && newPriority <= MAX_PRIORITY){
            this.priority = newPriority;
        }
        
    });

    this.toggleCompleted = (function(){
        this.completed = !this.completed;
    });

}

export {TaskItem}


