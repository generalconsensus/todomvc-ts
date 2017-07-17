export class entryItem {
    sid: string;
    data: string;
    check: boolean;

    constructor() {

    }

    listEntries() {
        let length = localStorage.length;
        let entries: any[] = [];
        for (let i :number = 0; i < length; i++) {
            entries.push(localStorage.getItem(i.toString()));
        }
        return entries;

    }

    createEntry(data: string) {
        let key = localStorage.length.toFixed();
        let currentNumber = localStorage.length;
        localStorage.setItem(key, data);
        return(currentNumber++);
    }

    deleteEntry(value: string) {
        localStorage.removeItem(value);
    }
}


