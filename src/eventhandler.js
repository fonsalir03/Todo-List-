export class EventHandler{
    
    constructor(dom, projectHandler){
        this.dom = dom
        this.projectHandler = projectHandler;
        this.addListeners(this.dom)
        this.currentProject = undefined
    }

    findIndex(title, holder){
        return holder.items.findIndex(item => item.name === title)
    }

    // callback functions

    projectFormHandler(formData){
        
        const projectTitle = formData.get("title");
        const projectDescription = formData.get("description");
        const newProject = this.projectHandler.create(projectTitle, projectDescription);

        this.dom.renderProject(newProject);

    }

    taskFormHandler(event, formData){

        //form inputs
        const taskTitle = formData.get("title");
        const taskDescription = formData.get("description");
        const taskDueDate = formData.get("date");
        const taskPriority = formData.get("priority");

        const projectIndex = event.submitter.dataset.projectIndex;
        const newTask = this.projectHandler.items[projectIndex].add(taskTitle, taskDescription, taskDueDate, taskPriority);

        // render the task that was returned from project.add()
        this.dom.renderTask(newTask, this.currentProject);

    }

    formHandler(event){

        event.preventDefault();
        const formType = event.target.dataset.type;
        const formData = new FormData(this.dom.form);

        if (formType == "task"){
            this.taskFormHandler(event,formData);
        }
        if (formType == "project"){
            this.projectFormHandler(formData);
        }
        
        this.dom.dialog.remove();

    }

    addListeners(){

        document.body.addEventListener("click", (event) => {
            // checks if a dialog is already rendered on the DOM
            if (document.body.contains(this.dom.dialog) == false){
                // create project button click event
                if (event.target.id == "create-project"){
                    this.dom.CreateForm("project");
                }
                // create task button click event
                if (event.target.id == "project-add-task-button"){

                    const DOMProject = event.target.parentElement;
                    const DOMProjectTitle = DOMProject.children[0].textContent;
                    const projectIndex = this.findIndex(DOMProjectTitle, this.projectHandler);
                    
                    //changing the selected project for the instance and dom variant
                    this.projectHandler.select(projectIndex);
                    this.currentProject = DOMProject;

                    this.dom.CreateForm("task", projectIndex);

                }
            }

        });

        //checks if form is being closed
        document.body.addEventListener("click", (event) => {
            if (event.target.id == "form-cancel-button"){
                this.dom.dialog.remove();
            }
        });
        
        //checks if form is being submitted
        document.body.addEventListener("submit", (event)=> {
            if (event.target.id == "data-form"){
                this.formHandler(event);
            }
        })
    }
};