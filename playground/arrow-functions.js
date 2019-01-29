var square = x => x*x;
console.log(square);

var user = {
	name: 'Andrew',
	sayHi: () => {
		console.log(`Hi,I am ${this.name}`);
	},
	sayHi() {
		console.log(`Hi,I am ${this.name}`); 
	}
};

console.log(user.sayHi);