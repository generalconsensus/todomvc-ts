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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUVsQyxNQUFNO0lBQ0YsU0FBUztRQUNMLElBQUksT0FBTyxHQUFpQixRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pFLElBQUksS0FBSyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7WUFDekIsSUFBSSxHQUFHLEdBQVcsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLO2dCQUMzQixHQUFHLEVBQUcsQ0FBQztnQkFDUCxLQUFLLENBQUMsSUFBSSxDQUFDLHdHQUF3RyxHQUFHLEtBQUssR0FBRyx5Q0FBeUMsR0FBRyxHQUFHLEdBQUcseURBQXlELEdBQUcsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQ25RLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFZO1FBQzdCLElBQUksT0FBTyxHQUFpQixRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pFLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxvR0FBb0csR0FBRyxJQUFJLEdBQUcseUNBQXlDLEdBQUcsR0FBRyxHQUFHLHlEQUF5RCxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFDL1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHRCxVQUFVLENBQUMsS0FBVTtRQUNqQixLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQzNDLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZW50cnlJdGVtfSBmcm9tIFwiLi9tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgVmlldyB7XG4gICAgbGlzdEl0ZW1zKCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IDxIVE1MRWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWxpc3RcIik7XG4gICAgICAgIGxldCBlbnRyeSA9IG5ldyBlbnRyeUl0ZW0oKTtcbiAgICAgICAgbGV0IGVudHJpZXMgPSBlbnRyeS5saXN0RW50cmllcygpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGl0ZW1zIDpzdHJpbmdbXSA9IFtdO1xuICAgICAgICAgICAgbGV0IGtleSA6bnVtYmVyID0gMDtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBrZXkgKys7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaCgnPGxpPjxkaXYgY2xhc3M9XCJ2aWV3IGRpc3BsYXlcIj48aW5wdXQgY2xhc3M9XCJ0b2dnbGUgY2hlY2tcIiB0eXBlPVwiY2hlY2tib3hcIj48bGFiZWwgY2xhc3M9XCJ0b2RvLWNvbnRlbnRcIj4nICsgZW50cnkgKyAnPC9sYWJlbD48YnV0dG9uIGNsYXNzPVwiZGVzdHJveVwiIHZhbHVlPVwiJyArIGtleSArICdcIj48L2J1dHRvbj48L2Rpdj48aW5wdXQgY2xhc3M9XCJlZGl0IHRvZG8taW5wdXRcIiB2YWx1ZT1cIicgKyBlbnRyeSArICdcIj48L2xpPicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGl0ZW1zLmpvaW4oJycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkSXRlbShrZXk6IG51bWJlciwgZGF0YSA6c3RyaW5nKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gPEhUTUxFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tbGlzdFwiKTtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBuZXdFbGVtZW50LmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwidmlldyBkaXNwbGF5XCI+PGlucHV0IGNsYXNzPVwidG9nZ2xlIGNoZWNrXCIgdHlwZT1cImNoZWNrYm94XCI+PGxhYmVsIGNsYXNzPVwidG9kby1jb250ZW50XCI+JyArIGRhdGEgKyAnPC9sYWJlbD48YnV0dG9uIGNsYXNzPVwiZGVzdHJveVwiIHZhbHVlPVwiJyArIGtleSArICdcIj48L2J1dHRvbj48L2Rpdj48aW5wdXQgY2xhc3M9XCJlZGl0IHRvZG8taW5wdXRcIiB2YWx1ZT1cIicgKyBkYXRhICsgJ1wiPic7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0VsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgIH1cblxuXG4gICAgZGVsZXRlSXRlbShFdmVudDogYW55KSB7XG4gICAgICAgIEV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbn0iXX0=