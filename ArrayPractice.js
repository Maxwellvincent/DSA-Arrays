const memory = require('./memory');

// 1. Implement an Array class from scratch 
class Array {
    constructor(){
        this.length = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if(this.length >= this._capacity){
            this._resize((this.length + 1) * Array.SIZE_Ratio);
        }

        memory.set(this.ptr + this.length, value);
        this.length++
    }

    _resize(size){
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if(this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = sizee;
    }

    get(index) {
        if(index < 0 || index >= this.length){
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index)
    }

    pop() {
        if(this.length == 0){
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1)
        this.length--;
        return value;
    }

    insert(index,value) {
        if(index < 0 || index >= this.length){
            throw new Error('Index Error');
        }
        if(this.length > this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_Ratio);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++
    }

    remove(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('INdex error');
        } 
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--
    }

}
Array.SIZE_Ratio = 3

// 2. Explor the push method
function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    // 2.  length = 1, capacity= 3, memory address = 0 
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
//2.  length = 6, capacity= 6, memory address = 6  

//3. Explor the pop method
    arr.pop();
    arr.pop();
    arr.pop();

    //length = 3, capacity= 3, memory address = 3
    console.log(arr);

    //4. Print first item 
    arr.get(0)
    arr.remove(0)
    arr.remove(0)
    arr.remove(0)
    arr.push('tauhida');

    //_resize = allows us to allocate the correct size of memory space    for our Array. 
}

main();


//5. URLify a string

//6. Filtering an array

//7, Max sum in the array 

//8. Merge Arrays

//9. Remove characters

//10. Products

//11. 2D array

//12 String rotation



