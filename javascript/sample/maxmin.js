class maxmin {
    constructor(){
        this.max;
        this.min;
    }
}

class two_node {
    constructor (){
        this.val;
        this.pre;
        this.next; 
    }
}

two_node.prototype.arrToClass = (arr, pre) => {

        this.val = arr.pop();
        this.pre = pre;
        
        if (maxmin.max === undefined){
            maxmin.max = this.val;
            maxmin.min = this.val;
        } else {
            maxmin.max = (maxmin.max > this.val) ? maxmin.max : this.val;
            maxmin.min = (maxmin.min < this.val) ? maxmin.min : this.val;
        }

        if (arr != []){
            this.next = two_node;
            this.next.arrToClass(arr, this);
        }

    }
};

var arr = [52, 273, 103, 32, 57, 103, 31, 2];

var n = two_node.arrToClass(arr);

console.log(maxmin.max);
console.log(maxmin.min);
