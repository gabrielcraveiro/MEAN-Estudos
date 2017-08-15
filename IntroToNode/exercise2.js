function average(arr){
	var arr2 = 0;
	arr.forEach(x => {
		arr2 += x;
	})
	return arr2 / arr.length+1;
}


console.log(average([2,2,2]));