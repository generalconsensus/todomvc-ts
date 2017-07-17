import {entryItem} from "./model";
import {View} from "./view";


export class todo {

    constructor() {
        View.prototype.listItems();

        // Add listeners
        let newTodo = <HTMLElement>document.body.querySelector(".new-todo");
        let destroy = <HTMLElement>document.body.querySelector(".destroy");
        if (newTodo) {
            newTodo.addEventListener("change", this.createTodo, false);
        }
        if (destroy) {
            destroy.addEventListener("click", this.deleteTodo, false);
        }

    }

    createTodo(Event: object) {
        let value = (Event as any).target.value.trim();
        if (value) {
            let key = entryItem.prototype.createEntry(value);
            View.prototype.addItem(key, value);
        }

    }

    deleteTodo(Event: any) {
        let value: string = (Event.srcElement.parentNode.textContent as string);
        if (value) {
            entryItem.prototype.deleteEntry(value);
            View.prototype.deleteItem(Event);
        }
    }
}

