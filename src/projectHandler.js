import { TaskItem } from "./taskItem";
import { Project } from "./project";

class ProjectHandler{
    _ProjectIndex = 0;
    _projects = [];

    constructor(){
        this._selectedProject = new Project("default");
    }

    get currentProject(){
        return this._projects[this._ProjectIndex];
    }

    add(ProjectName){
        this._projects.push(new Project(ProjectName));
    }

    next(){
        if (this._projects.length - 1 > this._ProjectIndex){
            this._ProjectIndex += 1;
        } 
    }

    prev(){
        if (this._ProjectIndex > 0){
            this._ProjectIndex -=1;
        }
    }

    delete(){
        //references to project length and the current index
        const ProjLen = this._projects.length;
        const ProjIndex = this._ProjectIndex;
        if ( ProjLen == 0){
            return;
        }
        this._projects.splice(ProjIndex,1)
        //if the currently selected project is at the end of the array, move the previous
        if(ProjIndex == ProjLen - 1){
            this.prev();
        }
    }
}

export {ProjectHandler}