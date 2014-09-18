var linkedList = require('./linkedList');
var assert = require('assert');

assert.deepEqual(linkedList.addFront( null, 23 ), { 
    value : 23,
    next  : null
}, 'Truth')

var list = {
    value : 4, 
    next  : {
	value : 13,
	next  :  {
	    value : 12, 
	    next  : null
	}
    }
};


assert.deepEqual(linkedList.addFront(list, 4), 
		 {    
		     value : 4,
		     next  : list
		 },
		 'Truthy');


var list1 = {
    value : 12, 
    next  : {
	value : 13,
	next  :  {
	    value : 4, 
	    next  : null
	}
    }
}


assert.deepEqual(list1, linkedList.reverseList(list), 'reverseList1');
assert.deepEqual({value : 1, next : null}, linkedList.reverseList({value : 1, next : null}), 'truthy');
assert.deepEqual(null, linkedList.reverseList(null), 'truthy');

//assert.equal(linkedList.appendList(list, 33));

list = {
    value : 4, 
    next  : {
	value : 13,
	next  :  {
	    value : 12, 
	    next  : null
	}
    }
};
//tests
assert.equal(linkedList.nthElement(list, 1), 4, 'nthElement1');
assert.equal(linkedList.nthElement(list, 2), 13, 'nthElement2');
assert.equal(linkedList.nthElement(list, 3), 12, 'nthElement3');
assert.equal(linkedList.nthElement(list, 10), null, 'nthElement4');
assert.equal(linkedList.nthElement({}, 1), null, 'nthElement5');

linkedList.appendList(list, list, 33);
//console.log(list);
assert.deepEqual(list, {
    value : 4, 
    next  : {
	value : 13,
	next  :  {
	    value : 12, 
	    next  :  {
		value : 33,
		next : null
	    }
	}
    }
}, 'appendListTest1');


list = linkedList.removeElement(list, 33);
assert.deepEqual(list, {
    value : 4, 
    next  : {
	value : 13,
	next  :  {
	    value : 12, 
	    next  : null
	    }
	}

}, 'removeElement test1');
list = linkedList.removeElement(list, 13);
assert.deepEqual(list, {
    value : 4, 
    next  :  {
	value : 12, 
	next  : null
    }
}, 'removeElement test2');
list = linkedList.removeElement(list, 46);
assert.deepEqual(list, {
    value : 4, 
    next  :  {
	value : 12, 
	next  : null
    }
}, 'removeElement test3');


list = linkedList.removeElement(list, 4);
assert.deepEqual(list, {
    value : 12, 
    next  : null
}, 'removeElement test3');


list = linkedList.removeElement(list, 12);
assert.deepEqual(list, null, 'removeElement test3');
list = linkedList.removeElement(list, 4);
assert.deepEqual(list, null, 'removeElement test3');



list = null;
for (var i = 1; i < 10; i++) {
    list = linkedList.appendList(list,list, i);
}

linkedList.displayList(list);

for (var i = 0; i < 5 ; i++) {
    var num = Math.floor(Math.random() * 10) + 1;
    console.log("removing elemnt " , num);
    list = linkedList.removeElement(list, num);
}
linkedList.displayList(list);

