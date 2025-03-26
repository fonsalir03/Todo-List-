class Project{
    _name = "";
    _taskList = [];

    constructor(name){
        this.name = name
    }

    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }

    add(taskItemObj){
        this._taskList.push(taskItemObj);
    }
    del(index){
        this._taskList.splice(index,1)
    }
}
export {Project}