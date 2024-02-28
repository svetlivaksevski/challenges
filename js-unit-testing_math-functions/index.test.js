import {add, subtract, multiply, divide} from "./index.js";

test("add the numbers correctly", ()=> {
	const result = add(2,3);
	expect(result).toBe(5);
});

test("add the numbers correctly", ()=> {
	const result = add(2,-3);
	expect(result).toBeLessThan(0);
});

test("add the numbers correctly", ()=> {
const result = add(0.1,0.2);
	expect(result).toBeCloseTo(0.3);
});


test("subtract the numbers correctly", ()=> {
	const result = subtract(15,5);
	expect(result).toBe(10);
});

test("subtract the numbers correctly", ()=> {
	const result = subtract(5,15);
	expect(result).toBeLessThan(0);
});

test("multiply the numbers correctly", ()=> {
	const result = multiply(2,4);
	expect(result).toBe(8);
});

test("multiply the numbers correctly", ()=> {
	const result = multiply(-2,4);
	expect(result).toBeLessThan(0);
});

test("multiply the numbers correctly", ()=> {
	const result = multiply(2,-4);
	expect(result).toBeLessThan(0);
});

test("multiply the numbers correctly", ()=> {
	const result = multiply(-2,-4);
	expect(result).toBeGreaterThan(0);
});

test("divide the numbers correctly", ()=> {
	const result = divide(9,3);
	expect(result).toBe(3);
});

test("divide the numbers correctly", ()=> {
	const result = divide(9,0);
	expect(result).toBe("You should not do this!");
});


