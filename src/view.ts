import {entryItem} from "./model";

export class View {
    listItems() {
        let element = <HTMLElement> document.querySelector("#todo-list");
        let entry = new entryItem();
        let entries = entry.listEntries();
        if (element) {
            let items :string[] = [];
            let key :number = 0;
            entries.forEach(function (entry) {
                key ++;
                items.push('<li><div class="view display"><input class="toggle check" type="checkbox"><label class="todo-content">' + entry + '</label><button class="destroy" value="' + key + '"></button></div><input class="edit todo-input" value="' + entry + '"></li>');
            });
            element.innerHTML = items.join('');
        }
    }

    addItem(key: number, data :string) {
        let element = <HTMLElement> document.querySelector("#todo-list");
        let newElement = document.createElement('li');
        newElement.innerHTML = '<div class="view display"><input class="toggle check" type="checkbox"><label class="todo-content">' + data + '</label><button class="destroy" value="' + key + '"></button></div><input class="edit todo-input" value="' + data + '">';
        console.log(newElement);
        element.appendChild(newElement);
    }


    deleteItem(Event: any) {
        Event.target.parentNode.innerHTML = '';
    }
}