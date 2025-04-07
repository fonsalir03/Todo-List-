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
        const ProjIndex = this.#projectIndex;

        if ( this.#projects.length == 0){
            return;
        }
        this.#projects.splice(this.#projectIndex,1)

        //if the currently selected project is at the end of the array, move the previous
        if(this.#projectIndex == this.#projects.length - 1){
            this.prev();
        }
        //if there are no more projects, add a default project
        if (this.#projects.length == 0){
            this.#projects.push(new Project("default"))
        }
    }
}
export {ProjectHandler}