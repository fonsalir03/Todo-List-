

export class domHandler{

    constructor(){
        this.CreateMainContainers();
        this.CreateToolbarButtons();
        this.CreateTaskForm();
        //testing
        this.taskDialog.show()
        
        document.body.appendChild(this.mainContentDiv)
    }
    
    CreateMainContainers(){

        //main container
        this.mainContentDiv = document.createElement("div");
        this.mainContentDiv.setAttribute("id", "main-content");

        //toolbar 
        this.toolbarDiv = document.createElement("div");
        this.toolbarDiv.setAttribute("id", "toolbar");
        this.mainContentDiv.appendChild(this.toolbarDiv);

        //task item section
        this.taskSectionDiv = document.createElement("div");
        this.taskSectionDiv.setAttribute("id", "task-buttons");
        this.toolbarDiv.appendChild(this.taskSectionDiv);

        //project section
        this.projectSectionDiv = document.createElement("div");
        this.projectSectionDiv.setAttribute("id", "project-buttons");
        this.toolbarDiv.appendChild(this.projectSectionDiv);

        //viewer
        this.viewerDiv = document.createElement("div");
        this.viewerDiv.setAttribute("id", "viewer");
        this.mainContentDiv.appendChild(this.viewerDiv);
        
    }

    CreateToolbarButtons(){
        
        //task creation button
        this.createTaskButton = document.createElement("button");
        this.createTaskButton.setAttribute("id", "create-task");
        this.createTaskButton.textContent = "Create Task"
        this.taskSectionDiv.appendChild(this.createTaskButton);

        //view all tasks buttons
        this.viewTasksButton = document.createElement("button");
        this.viewTasksButton.setAttribute("id", "view-tasks");
        this.viewTasksButton.textContent = "All Tasks";
        this.taskSectionDiv.appendChild(this.viewTasksButton);

        //create project button
        this.createProjectButton = document.createElement("button");
        this.createProjectButton.setAttribute("id", "create-projet");
        this.createProjectButton.textContent = "Create Project";
        this.projectSectionDiv.appendChild(this.createProjectButton);

        //view projects button
        this.viewProjectsButton = document.createElement("button");
        this.viewProjectsButton.setAttribute("id", "view-projects");
        this.viewProjectsButton.textContent = "All Projects"
        this.projectSectionDiv.appendChild(this.viewProjectsButton);
    }

    CreateTaskForm(){
        //create task item dialog so the user can close the form when submitted
        this.taskDialog = document.createElement("dialog");
        this.taskDialog.setAttribute("id", "task-dialog");

        //create the task form, nested in taskDialog
        this.taskForm = document.createElement("form");
        this.taskForm.setAttribute("id", "task-form");
        this.taskDialog.appendChild(this.taskForm);
        //--just start with creating the elements, worry about the attributes later
        //nested in the form
        //  create the title input using textarea

        //  create the description input

        //  create the due date date picker

        //  create label for the priority "How important is this task?" "What is the priority?"
        //  create the priority selection

        //  create the cancel button

        //  create the submit button

        document.body.appendChild(this.taskDialog)
    }

}