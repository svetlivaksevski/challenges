export function getAnimal(animals) {
	
	return animals === "cats" ? "I totally love cats!" :
	animals ? `I like ${animals}!` :
	"I do not like animals at all!";
}

