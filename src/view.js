import { entryItem } from "./model";
export class View {
    listItems() {
        let element = document.querySelector("#todo-list");
        let entry = new entryItem();
        let entries = entry.listEntries();
        if (element) {
            let items = [];
            let key = 0;
            entries.forEach(function (entry) {
                key++;
                items.push('<li><div class="view display"><input class="toggle check" type="checkbox"><label class="todo-content">' + entry + '</label><button class="destroy" value="' + key + '"></button></div><input class="edit todo-input" value="' + entry + '"></li>');
            });
            element.innerHTML = items.join('');
        }
    }
    addItem(key, data) {
        let element = document.querySelector("#todo-list");
        let newElement = document.createElement('li');
        newElement.innerHTML = '<div class="view display"><input class="toggle check" type="checkbox"><label class="todo-content">' + data + '</label><button class="destroy" value="' + key + '"></button></div><input class="edit todo-input" value="' + data + '">';
        console.log(newElement);
        element.appendChild(newElement);
    }
    deleteItem(Event) {
        Event.target.parentNode.innerHTML = '';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUVsQyxNQUFNO0lBQ0YsU0FBUztRQUNMLElBQUksT0FBTyxHQUFpQixRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pFLElBQUksS0FBSyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7WUFDekIsSUFBSSxHQUFHLEdBQVcsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLO2dCQUMzQixHQUFHLEVBQUUsQ0FBQztnQkFDTixLQUFLLENBQUMsSUFBSSxDQUFDLHdHQUF3RyxHQUFHLEtBQUssR0FBRyx5Q0FBeUMsR0FBRyxHQUFHLEdBQUcseURBQXlELEdBQUcsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQ25RLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFZO1FBQzdCLElBQUksT0FBTyxHQUFpQixRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pFLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxvR0FBb0csR0FBRyxJQUFJLEdBQUcseUNBQXlDLEdBQUcsR0FBRyxHQUFHLHlEQUF5RCxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFDL1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHRCxVQUFVLENBQUMsS0FBVTtRQUNqQixLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQzNDLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZW50cnlJdGVtfSBmcm9tIFwiLi9tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgVmlldyB7XG4gICAgbGlzdEl0ZW1zKCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IDxIVE1MRWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWxpc3RcIik7XG4gICAgICAgIGxldCBlbnRyeSA9IG5ldyBlbnRyeUl0ZW0oKTtcbiAgICAgICAgbGV0IGVudHJpZXMgPSBlbnRyeS5saXN0RW50cmllcygpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAgICAgbGV0IGtleTogbnVtYmVyID0gMDtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBrZXkrKztcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKCc8bGk+PGRpdiBjbGFzcz1cInZpZXcgZGlzcGxheVwiPjxpbnB1dCBjbGFzcz1cInRvZ2dsZSBjaGVja1wiIHR5cGU9XCJjaGVja2JveFwiPjxsYWJlbCBjbGFzcz1cInRvZG8tY29udGVudFwiPicgKyBlbnRyeSArICc8L2xhYmVsPjxidXR0b24gY2xhc3M9XCJkZXN0cm95XCIgdmFsdWU9XCInICsga2V5ICsgJ1wiPjwvYnV0dG9uPjwvZGl2PjxpbnB1dCBjbGFzcz1cImVkaXQgdG9kby1pbnB1dFwiIHZhbHVlPVwiJyArIGVudHJ5ICsgJ1wiPjwvbGk+Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaXRlbXMuam9pbignJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRJdGVtKGtleTogbnVtYmVyLCBkYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0XCIpO1xuICAgICAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5ld0VsZW1lbnQuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJ2aWV3IGRpc3BsYXlcIj48aW5wdXQgY2xhc3M9XCJ0b2dnbGUgY2hlY2tcIiB0eXBlPVwiY2hlY2tib3hcIj48bGFiZWwgY2xhc3M9XCJ0b2RvLWNvbnRlbnRcIj4nICsgZGF0YSArICc8L2xhYmVsPjxidXR0b24gY2xhc3M9XCJkZXN0cm95XCIgdmFsdWU9XCInICsga2V5ICsgJ1wiPjwvYnV0dG9uPjwvZGl2PjxpbnB1dCBjbGFzcz1cImVkaXQgdG9kby1pbnB1dFwiIHZhbHVlPVwiJyArIGRhdGEgKyAnXCI+JztcbiAgICAgICAgY29uc29sZS5sb2cobmV3RWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgfVxuXG5cbiAgICBkZWxldGVJdGVtKEV2ZW50OiBhbnkpIHtcbiAgICAgICAgRXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxufSJdfQ==