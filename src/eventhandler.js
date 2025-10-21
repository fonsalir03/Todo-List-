//pass in the domhandler and projecthandler instance
export class EventHandler{
    
    constructor(dom, projectHandler){
        this.projectHandler = projectHandler;
        this.addListeners(dom)
    }

    addListeners(dom){

        //shows form when "Create Project" button is clicked
        dom.createProjectButton.addEventListener("click", function(){
            // checks if the form's parent already exists using live reference
            if (document.body.contains(dom.dialog) == false){
                dom.CreateForm("project");
            }
        });

        document.body.addEventListener("click", function(event){
            if (event.target.id == "form-cancel-button"){
                dom.dialog.remove()
            }
        });
        
        document.body.addEventListener("submit", (event) => {
            event.preventDefault()
            const formData = new FormData(dom.form)
            this.projectHandler.add(formData.get("title"), formData.get("description"))
            dom.dialog.remove()
        })

    } 
};