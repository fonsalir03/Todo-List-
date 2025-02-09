function Project(name){
    this.name = name;
    this.taskList = [];

    this.addTask = function(taskItemObj){
        this.taskList.push(taskItemObj);
    }
    this.removeTask = function(index){
        this.taskList.splice(index,1);
    }
}