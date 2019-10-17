
# ARRAY

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
* http://www.w3schools.com/jsref/jsref_obj_array.asp
* https://www.w3schools.com/js/js_arrays.asp
* https://www.codingame.com/playgrounds/6181/javascript-arrays---tips-tricks-and-examples
* https://medium.freecodecamp.org/https-medium-com-gladchinda-hacks-for-creating-javascript-arrays-a1b80cb372b

* Array.length
* Array.from()
* Array.isArray()
* Array.observe()
* Array.of()
* Array.concat()
* Array.copy​Within()
* Array.entries()
* Array.every()
* Array.fill()
* Array.filter()
* Array.find()
* Array.find​Index()
* Array.flat()
* Array.flatMap()
* Array.for​Each()
* Array.includes()
* Array.indexOf()
* Array.join()
* Array.keys()
* Array.last​IndexOf()
* Array.map()
* Array.pop()
* Array.push()
* Array.reduce()
* Array.reduce​Right()
* Array.reverse()
* Array.shift()
* Array.slice()
* Array.some()
* Array.sort()
* Array.splice()
* Array.toLocale​String()
* Array.toSource()
* Array.toString()
* Array.unshift()
* Array.values()
* Array.prototype​[@@iterator]()
* Array.unobserve()
get Array​[@@species]


Array.from( An array-like or iterable object to convert to an array )

	AA.doSomethingWithObjOrArrayOfObj = function( obj ) {

		const obj = Array.isArray( obj ) ? obj : [ obj ];


- add them all...

a.concat(item[, itemN]) Returns a new array with the items added on to it.
a.find( function ) http://www.w3schools.com/jsref/jsref_find.asp
a.join( sep )
a.map( function ) apply function to all elements
a.pop() Removes and returns the last item.
a.push(item[, itemN]) Push adds one or more items to the end.
a.reverse()
a.shift()
a.slice( start, end) Returns a sub-array. Negative OK array.slice( -3 ) gets an array of last 3 elements

a.sort( [cmpfn] ) Takes an optional comparison function.
a.splice(start, delcount[ , itemN] ) Lets you modify an array by deleting a section and replacing it with more items.

a.toString()
a.toLocaleString()
a.unshift([item]) Prepends items to the start of the array.

a.next()


return (foo || []).length;


## Spread Syntax

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax


## Duplicates

* https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array

arr = arr.filter( (value, index, array ) => array.indexOf (value) == index );



## Min/Max

	var max_of_array = Math.max.apply( Math, array);
	var min_of_array = Math.min.apply( Math, array);

// http://stackoverflow.com/questions/1669190/javascript-min-max-array-values

	min = arrayMin( elevations );
	max = arrayMax( elevations );

	function arrayMin( arr ) {

		var len = arr.length, min = Infinity;

		while ( len-- ) {

			if ( arr[ len ] < min) { min = arr[ len ]; }

		}

		return min;

	}

	function arrayMax( arr ) {

		var len = arr.length, max = -Infinity;

		while ( len-- ) {

			if (arr[len] > max) { max = arr[len]; }

		}

		return max;

	}




## Multi Dim

	var a = [];
	for (i = 0; i < 4; i++) {
	  a[i] = [];
	  for (j = 0; j < 4; j++) {
		a[i][j] = "[" + i + "," + j + "]";
	  }
	}
	console.log( a );

	for ( var i = 0, item; item = a[i++]; ) { << not
		// Do something with item
	}

see cookbook/array/array-pop-while-switch


## Random Order

		get_random = function ( list ) {

			return list[ Math.floor( ( Math.random() * list.length ) ) ];

		}

		get_random( [ 2, 3, 5 ] )

		var list = [1,2,3];

		console.log( list.sort( function() { Math.random() - 0.5 } ) ); // [2,1,3]


## Random Values

	arr = Array.from( {length: 100 }, ( value, index ) => Math.floor( 9 * Math.random() ) );

	arr = Array.from( { length: arr1.length }, () => 0 )

## Reduce

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
https://www.w3schools.com/jsref/jsref_reduce.asp
* https://medium.freecodecamp.org/reduce-f47a7da511a9
* https://medium.com/the-non-traditional-developer/map-filter-reduce-the-holy-trinity-of-array-methods-16ce3bdb69e2


Definition and Usage

* The reduce() method reduces the array to a single value.
* The reduce() method executes a provided function for each value of the array (from left-to-right).
* The return value of the function is stored in an accumulator (result/total).
* Note: reduce() does not execute the function for array elements without values.
* array.reduce( function(total, currentValue, currentIndex, arr), initialValue)

	reduce = arr.reduce( ( acc, value, index ) => {

		if ( value === 8 ) { acc.push( index ); }

		return acc;

	}, [] );


	ISSTI.buttonsSurfaceType = GBX.surfaceTypes.reduce(
		( arr, item ) => arr + `<button onclick=ISSTI.setSurfaceType("${item}"); >${ item }</button><br>`,
		''
	);


	const items = [1,2,3,4];
	const sumOfItems = items.reduce( (acc, cur ) => acc + cur );
	console.log(sumOfItems)
	// 10

	const items = [1,2,3,4];
	items.reduce((acc,cur) => acc + cur, 0)  //10
	items.reduce((acc,cur) => acc + cur, '') //'1234'


### Sort

* https://www.w3schools.com/jsref/jsref_sort.asp
* https://www.w3schools.com/jsref/jsref_sort.asp
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort



## Lines Split to Float

	elevations = data.split( ',' ).map( function( item ) { return parseFloat( item ); } );
	txtline = lines[ i ].split( ',' ).map( parseFloat );

	waypoints = xhr.responseText.split( '\n' ).map( function( point ) { return point.split( ',' ).map( parseFloat ); } );



* https://stackoverflow.com/questions/5034781/js-regex-to-split-by-line

arrayOfLines = lineString.match(/[^\r\n]+/g);

## Unique / find

	const array = [1, 1, 2, 3, 5, 5, 1]
	const uniqueArray = [...new Set(array)];
	console.log(uniqueArray); // Result: [1, 2, 3, 5]

