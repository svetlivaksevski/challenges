console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
	e.preventDefault();
    console.log(e);

	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData);
   
	console.log(data);

	e.target.reset();
	e.target.elements.firstName.focus();

	console.log(`The age-badness-sum of ${form.firstName.value} is ${parseInt(form.age.value) + parseInt(form.badness.value)}`);

})
