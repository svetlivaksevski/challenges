console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
 
	try {
const starWars = await fetch (url);
const data = await starWars.json();

if (starWars.ok) {
	console.log(data)
} else {
console.log("Bad response!")
}
	} catch (error) {
console.error("Error")
	}

}

fetchData();
