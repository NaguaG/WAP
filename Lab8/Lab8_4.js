//Object Literal solution

let linkedlist = {};
linkedlist.add = function(element){
    if(this.value === undefined){
        this.value = element;
        this.element = null;
    } else {
        let current = this;
        while(current.next){
            current = current.next;
        }
        current.next = {
            value: element, next: null
        };
    }}

    linkedlist.remove = function(element){
        var current = this;
        var prev = null;
         while(current){
            if(current.value === element){
                if(prev == null){
                    this.value = current.next.value;
                    this.next = current.next.next;
                } else {
                    prev.next = current.next;
                }
                return true;
            }
            prev = current;
            current = current.next;
         }
         return false;
    }


    linkedlist.printHelper = function(list, result){
        if(list.next == null){
            result += list.value;
            return;
        }
        result += list.value + ', ';
        return this.printHelper(list.next, result);
    }

    linkedlist.print = function(){
        let result = 'LinkedList{';
        result = this.printHelper(this, result);
        result += '}';
        console.log(result);

    }

    linkedlist.add(1);
    linkedlist.add(2);
    linkedlist.add(3); 
    linkedlist.print();   
    linkedlist.add(3);
    linkedlist.print();