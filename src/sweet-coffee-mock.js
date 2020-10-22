/**
 * Het doel van dit object is het bieden van een interface naar de koffiezetmachine. Er zijn al methodes (gedrag)
 * geimplementeerd die de basis vormen voor jouw implementatie. Voel je vrij functies toe te voegen en het gedrag
 * van functies aan te passen, zolang de interface van het mock object identiek blijft.
 */
class SweetCoffeeMachine {
	/**
	 * Wanneer de machine wordt aangezet mag je ervanuit gaan dat alle voorraden volledig aangevuld zijn
	 * De waardes in de constructor zijn daarom altijd de voorraadwaardes bij initialisatie
	 */
	constructor() {
		this.stock = {
			milk: 10,
			chocolate: 10,
			sugar: 10,
		};

		this.maintenanceMode = false
	}

	/**
	 * One single function to create drinks
	 *
	 * @param {String} typeOfDrink
	 * @param {Number} sugar
	 * @param {Number} milk
	 * @memberof SweetCoffeeMachine
	 */
	makeDrink(typeOfDrink, sugarAmount, milkAmount, currentStock) {
		this.stock = currentStock
		this.stock.sugar -= sugarAmount
		this.stock.milk -= milkAmount

		switch (typeOfDrink) {
			case 'Chocolade':
				this.stock.chocolate -= 1
				break;
			case 'Wiener Melange':
				this.stock.chocolate -= 1
				break;
			case 'Cappuccino':
				this.stock.milk -= 1
				break;
			default:
				break;
		}

		['chocolate', 'milk', 'sugar'].forEach(ingredient => {
			if (this.stock[ingredient] < 0) {
				this.stock[ingredient] = 0
			}
		})

		return this.stock
	}

	errorHandler(error) {
		switch (error) {
			case 1:
				// Geen water
				return 'Geen waterdruk'
			case 2:
				// Interne statusfout
				return 'Machine is kapot'
			case 3:
				// Temperatuur te laag
				return 'Machine is kapot'
			default:
				break;
		}
	}

	/**
	 * Om ervoor te zorgen dat de frontend goed kan anticiperen op tekorten, kan er ook doormiddel van
	 * getStock een request gedaan worden om de beginwaardes (initialisatie) van de machine op te vragen
	 */
	getStock() {
		return;
	}
}

export default SweetCoffeeMachine;
