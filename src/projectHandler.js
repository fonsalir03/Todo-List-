import { TaskItem } from "./taskItem";
import { Project } from "./project";

class ProjectHandler{
    #projectIndex = 0;
    #projects = [];

    constructor(){
        this.#projects.push(new Project("default"))
    }

    get currentProject(){
        return this.#projects[this.#projectIndex];
    }

    add(ProjectName){
        this.#projects.push(new Project(ProjectName));
    }

    next(){
        if (this.#projects.length - 1 > this.#projectIndex){
            this.#projectIndex += 1;
        } 
    }

    prev(){
        if (this.#projectIndex > 0){
            this.#projectIndex -=1;
        }
    }

    delete(){
        //references to project length and the current index
        const ProjLen = this.#projects.length;
        const ProjIndex = this.#projectIndex;
        if ( ProjLen == 0){
            return;
        }
        this.#projects.splice(ProjIndex,1)
        //if the currently selected project is at the end of the array, move the previous
        if(ProjIndex == ProjLen - 1){
            this.prev();
        }
    }
}

export {ProjectHandler}