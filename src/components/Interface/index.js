import React, { useState } from 'react'
import SweetCoffeeMachine from '../../sweet-coffee-mock'
import Button from '../Button'
import Slider from '../Slider'
import StatusText from '../StatusText'
import './Interface.css'

function Interface() {
	const coffeeMachine = new SweetCoffeeMachine()

	// Define state
	const [stock, setStock] = useState(coffeeMachine.stock)
	const [sugarValue, setSugarValue] = useState(0)
	const [milkValue, setMilkValue] = useState(0)
	const [currentDrink, setCurrentDrink] = useState('')
	const [isMachineInProgress, setIsMachineInProgress] = useState(false)

	const DRINK_DURATION = 4000

	const drinks = [
		'Americano',
		'Cappuccino',
		'Wiener Melange',
		'Chocolade',
		'Zwarte Thee',
		'Earl Grey'
	]

	// Function to handle button clicks
	function handleClick(drink) {

		// Update the IsMachineInProgress Boolean
		setIsMachineInProgress(true)

		// Set the current drink
		setCurrentDrink(drink)

		// Make a drink and get the returned stock value
		const newStock = coffeeMachine.makeDrink(drink, sugarValue, milkValue, stock)

		// Timeout 4 seconds then work some magic
		setTimeout(() => {
			setStock(newStock)
			setCurrentDrink('')
			setIsMachineInProgress(false)
		}, DRINK_DURATION)
	}

	return (
		<div className="interface">
			{/* Map over the drinks array and return buttons for each entry */}
			{drinks.map((drink, idx) => (
				<Button
					drink={drink}
					key={idx}
					isMachineInProgress={isMachineInProgress}
					handleClick={handleClick}
					stock={stock}
				/>
			))}

			<div className="slider-container">
				<Slider 
					type="suiker" 
					stock={stock.sugar} 
					noStock="Helaas de suiker is op!" 
					value={sugarValue} 
					isMachineInProgress={isMachineInProgress} 
					setValue={setSugarValue} 
				/>

				<Slider 
					type="melk" 
					stock={stock.sugar} 
					noStock="Helaas, de melk is op." 
					value={milkValue} 
					isMachineInProgress={isMachineInProgress} 
					setValue={setMilkValue} 
				/>
			</div>

			<StatusText isMachineInProgress={isMachineInProgress} currentDrink={currentDrink} /> 
			
			{coffeeMachine.maintenanceMode && (
				<code className="stock">
					milk: {stock.milk}
					<br />
					chocolate: {stock.chocolate}
					<br />
					sugar: {stock.sugar}
				</code>
			)}
		</div>
	)
}

export default Interface
