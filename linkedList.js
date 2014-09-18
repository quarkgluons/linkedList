var assert = require('assert');

/*
  Adds an element to the front  of a list(start), 
  if the start is null, return a new list with the only element a
  returns the start of the new list, so needs to be saved in the 
  reference of previous list
  Syntax :-> list = addFront(list, val);
*/

function addFront(start, a) {
    if (start === null)
	return {
	    value : a,
	    next : null
	}
    else {
	return {
	    value : a,
	    next : start
	}
    }
}

/*
  call with the objext list and a 'null' as second parameter
  return -> a new list with all the elements of the original list reversed
  WARNING : May be a bug, but the original list is lost
*/
function reverseListRecursive(start, prev) {
    if(start === null)
	return null;
    if( start.next === null) {
	start.next = prev;
	return start;	
    }
    else {
	var temp = reverseListRecursive(start.next, start);
	start.next = prev;	
    }
    return temp;
}

function reverseList(list) {
    return reverseListRecursive(list, null);
    
}

/*
  Returns the nth element in a list
  returns a null value if there are less than n elements as
  well as when an empty list is passed to it.
*/
function nthElement(list, n) {
    var i = 1;
    if (list === null)
	return null;
    while(list !== null) {
	if (i == n) 
	    return list.value;
	i++;
	list =  list.next;
    }
    return null;
}


///appends an element to the end of the list
var appendList = function(list, start, val) {
    if (start == null)
	return {
	    value : val,
	    next  : null
	}
    else if ( start.next === null ) {
	start.next = {
	    value : val,
	    next : null
	};
	return list;
    } else {
	return appendList(list, start.next, val);
    }	
}

function deleteFirst(list) {
    return list.next;
}

function deleteLast(list) {
    list.next = null;
}
/*
  removes an element from the list
  returns the modified list as a result, must be saved in the original list
  especially in cases of the element to be removed being the begining of 
  the list. Return null in cases of empty lists. 
*/
function removeElementRecursive(list, n, start, prev) {
    if (start === null)
	return null;
    if (prev === null && start.value === n) {
	return deleteFirst(list);
    } else if (start.next == null && start.value === n) {
	deleteLast(prev);
	return list;
    } else if ( start.value === n ){
	prev.next = start.next;
	return list;
    } else if (start.next !== null)
	return removeElementRecursive(list, n, start.next, start);
   return list;
}


function removeElement(list, n) {
    return removeElementRecursive(list, n, list, null);
}

function displayList (list) {
    while(list !== null) {
	console.log(list.value);
	list = list.next;
    }
}

module.exports = {
    'appendList'    : appendList,
    'removeElement' : removeElement,
    'addFront'      : addFront,
    'reverseList'   : reverseList,
    'nthElement'    : nthElement, 
    'displayList'   : displayList 
};
