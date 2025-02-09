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
        this.priority = newPriority;
    });

    this.toggleCompleted = (function(){
        this.completed = !this.completed;
    });

}

export {TaskItem}


