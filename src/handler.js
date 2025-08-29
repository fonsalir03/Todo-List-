export class Handler{

    constructor() {
        this.items = []
        this.selectedItem
    }
    select(index){
        this.selectedItem = this.items[index]
    }
    get(){
        return this.selectedItem
    }
    delete(index){
        this.items.splice(index,1)
    }
    add(item){
        this.items.push(item)
    }
};

//testing
