function range(start, end){
	let arr=[];
	for (let i = start; i<= end; i++){
      	arr.push(i)
    }
	return arr;
}

function sumOfSalary(){
        let sum = 0
        for (let salary of Object.values(salaries)) {
        sum += salary
        }
    return sum;
    }