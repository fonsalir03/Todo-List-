export class Handler{

    constructor() {
        this.items = []
        this.selectedItem
    }
    select(index){
        //change this.selectedItem to the item at the given index
        this.selectItem = this.items[index]
    }
    get(){
        //returns the selected item
        return this.selectItem
    }
    delete(index){
        //deletes the selected item from this.items
        this.items.splice(index,1)
    }
    add(item){
        //adds the passed in item to this.items
        this.items.push(item)
    }

    //showValues
};

//testing