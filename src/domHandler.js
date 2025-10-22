
class DOMProject {
    constructor(){
        this.createProjectContainers()
    }

    createProjectContainers(){
    
    // project container
    this.projectContainer = document.createElement("div");
    this.projectContainer.setAttribute("id", "project-container");

    // project title container
    this.projectTitleContainer = document.createElement("div");
    this.projectTitleContainer.setAttribute("id", "project-title");
    this.projectContainer.appendChild(this.projectTitleContainer);

    // project description
    this.projectDescription = document.createElement("div");
    this.projectDescription.setAttribute("id", "project-description");
    this.projectDescription.hidden = true;
    this.projectContainer.appendChild(this.projectDescription);

    // project add task button
    this.projectAddTaskButton = document.createElement("button");
    this.projectAddTaskButton.setAttribute("id", "project-add-task-button");
    this.projectContainer.appendChild(this.projectAddTaskButton);

    // project task container
    this.projectTaskContainer = document.createElement("div");
    this.projectTaskContainer.setAttribute("id", "project-task-container");
    this.projectContainer.appendChild(this.projectTaskContainer);
    
    }

}

export class DomHandler{

    constructor(){
        // content that is constant to the page
        this.CreateMainContainers();
        this.CreateToolbarButtons();
        //testing

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

    CreateForm(type){
        //check for if the form is for a task item or project

        // dialog
        this.dialog = document.createElement("dialog");
        this.dialog.setAttribute("id", "data-dialog");

        // form
        this.form = document.createElement("form");
        this.form.setAttribute("id", "data-form");
        this.form.setAttribute("data-type", type)
        this.dialog.appendChild(this.form);

        //  form title
        this.formTitleInput = document.createElement("input");
        this.formTitleInput.setAttribute("type", "text");
        this.formTitleInput.setAttribute("id", "form-title");
        this.formTitleInput.setAttribute("required", "");
        this.formTitleInput.setAttribute("name", "title")
        this.form.appendChild(this.formTitleInput);

        //  form description
        this.formDescriptionInput = document.createElement("textarea");
        this.formDescriptionInput.setAttribute("id", "form-description");
        this.formDescriptionInput.setAttribute("name","description");
        this.form.appendChild(this.formDescriptionInput);

        if (type == "task"){
            //  form date picker
            this.formDateInput = document.createElement("input");
            this.formDateInput.setAttribute("type", "date");
            this.formDateInput.setAttribute("id", "form-date");
            this.formDateInput.setAttribute("required", "");
            this.formDateInput.setAttribute("name", "date");
            this.form.appendChild(this.formDateInput);

            //  priority
            this.formPriorityLabel = document.createElement("label");
            this.formPriorityLabel.textContent = "How important is this task?";
            this.formPriorityLabel.setAttribute("for","form-priority");
            this.form.appendChild(this.formPriorityLabel);

            //  create the priority selection
            this.formPriority = document.createElement("select");
            this.formPriority.setAttribute("name", "form-priortity");

            // priority option 1 : low
            this.formPriorityOption1 = document.createElement("option");
            this.formPriorityOption1.value = 1;
            this.formPriorityOption1.textContent = "low";
            this.formPriority.appendChild(this.formPriorityOption1);

            // priority option 2 : medium
            this.formPriorityOption2 = document.createElement("option");
            this.formPriorityOption2.value = 2;
            this.formPriorityOption2.textContent = "medium";
            this.formPriority.appendChild(this.formPriorityOption2);

            // priority option 3 : high
            this.formPriorityOption3 = document.createElement("option");
            this.formPriorityOption3.value = 3;
            this.formPriorityOption3.textContent = "high";
            this.formPriority.appendChild(this.formPriorityOption3);

            this.form.appendChild(this.formPriority);
        }
        
        //Submit button
        this.formSubmitButton = document.createElement("button");
        this.formSubmitButton.setAttribute("id", "form-submit-button");
        this.formSubmitButton.textContent = "Submit";
        this.form.appendChild(this.formSubmitButton);       

        //  create the Cancel button
        this.formCancelButton = document.createElement("button");
        this.formCancelButton.setAttribute("id", "form-cancel-button");
        this.formCancelButton.textContent = "Cancel";
        this.dialog.appendChild(this.formCancelButton);

        document.body.appendChild(this.dialog);
        this.dialog.show();
    }

    // CreateProjectContainers()

    // RenderProject(projectInstance)
    renderProject(project){
        const newDOMProject = new DOMProject();

        newDOMProject.projectTitleContainer.textContent = project.name;
        if (project.description != ""){
            newDOMProject.projectDescription.textContent = project.description;
            newDOMProject.projectDescription.hidden = false;
        }
        
        this.viewerDiv.appendChild(newDOMProject.projectContainer);
    }
}