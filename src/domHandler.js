export class domHandler{

    constructor(){
        this.CreateMainContainers();
        this.CreateToolbarButtons();
        
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
        this.taskSectionDiv.appendChild(this.createTaskButton);

        //view all tasks buttons
        this.viewTasksButton = document.createElement("button");
        this.viewTasksButton.setAttribute("id", "view-tasks");
        this.taskSectionDiv.appendChild(this.viewTasksButton);

        //create project button
        this.createProjectButton = document.createElement("button");
        this.createProjectButton.setAttribute("id", "create-projet");
        this.projectSectionDiv.appendChild(this.createProjectButton);

        //view projects button
        this.viewProjectsButton = document.createElement("button");
        this.viewProjectsButton.setAttribute("id", "view-projects");
        this.projectSectionDiv.appendChild(this.viewProjectsButton);
    }

}