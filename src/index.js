import { TaskItem } from "./taskItem.js";
import { Project } from "./project.js"
import { DomHandler } from "./domHandler.js"
import { EventHandler } from "./eventhandler.js"
import { Handler } from "./handler.js"

/* Task item testing


const newTask = new TaskItem("dog walk", "I need to walk my dog to the corner store and back", [2025,12,15], 2);
const myTask = new TaskItem("cat walk", "I need to walk my cat to the tree and back", [2025, 9, 21], 2);
const uncompletedTask = new TaskItem("wash car", "I want to wash the hood and rims of my car", [2025, 9 , 22], 2)

const myProject = new Project("my daily tasks")
//add tasks
myProject.add(newTask)
myProject.add(myTask)
myProject.add(uncompletedTask)

//select and update the due date for the first task
myProject.select(0)
myProject.selectedItem.dueDate = [2025,12,14]

//select and update the title for the second class
myProject.select(1)
myProject.selectedItem.title = "cat walking"

//delete the third task
myProject.delete(2)
console.log(myProject.get().title)

*/

//Testing
const domHandler = new DomHandler();
const projectHandler = new Handler();
const eventHandler = new EventHandler(domHandler, projectHandler);
const newProject = projectHandler.create("defaultProject");
domHandler.renderProject(newProject);