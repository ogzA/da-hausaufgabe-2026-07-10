//#region Basics-Aufgabe 1

const firstName = "Oğuz";
let age = 33;

function printName(name, age) {
	console.log(`Hallo, ich heiße ${name} und bin ${age} Jahre alt.`);
}

printName(firstName, age);

// #endregion

//#region Basics-Aufgabe 2

console.log("-----------getTrafficLightStatus----------------");

function getTrafficLightStatus(color) {
	if (color === "green") {
		console.log("Du darfst gehen!");
	} else if (color === "yellow") {
		console.log("Achtung!");
	} else if (color === "red") {
		console.log("Du musst stehen bleiben!");
	} else {
		console.log("Die Ampel ist kaputt");
	}
}

getTrafficLightStatus("red");
getTrafficLightStatus("yellow");
getTrafficLightStatus("green");
getTrafficLightStatus("brown");

// #endregion

//#region Basics-Aufgabe 3

console.log("-----------isEven----------------");

function isEven(number) {
	if (number % 2 == 0) {
		console.log(true);
	} else {
		console.log(false);
	}
}

isEven(4);
isEven(7);
// #endregion

//#region Basics-Aufgabe 4

console.log("-----------isAllowedToEnter----------------");

function isAllowedToEnter(age, hasID) {
	if (age >= 18 && hasID === true) {
		console.log(true);
	} else {
		console.log(false);
	}
}

isAllowedToEnter(20, true);
isAllowedToEnter(20, false);
isAllowedToEnter(16, true);

// #endregion

//#region Basics-Aufgabe 5
// hier Lösung ergänzen
// #endregion

//#region DOM-Aufgabe 1
// hier Lösung ergänzen
// #endregion

//#region DOM-Aufgabe 2
// hier Lösung ergänzen
// #endregion

// #region ZUSATZAUFGABE (OPTIONAL!!!)
// hier Lösung ergänzen
// #endregion
