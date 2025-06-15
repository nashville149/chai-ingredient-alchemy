
import React from 'react';
import { Button } from "@/components/ui/button";

const RECIPE = {
  WATER_PER_CUP: 200, // ml
  MILK_PER_CUP: 50, // ml
  TEA_LEAVES_PER_CUP: 1, // tbsp
  SUGAR_PER_CUP: 2, // tsp
};

export function ChaiCalculator() {
  const handleCalculate = () => {
    const cupsInput = window.prompt("Enter the number of cups of chai you want to make:", "1");

    if (cupsInput === null) {
      return; // User clicked cancel
    }

    const numCups = parseInt(cupsInput, 10);

    if (isNaN(numCups) || numCups <= 0) {
      window.alert("Oh, be reasonable! Please enter a valid number of cups (more than 0).");
      return;
    }

    const ingredients = {
      water: numCups * RECIPE.WATER_PER_CUP,
      milk: numCups * RECIPE.MILK_PER_CUP,
      teaLeaves: numCups * RECIPE.TEA_LEAVES_PER_CUP,
      sugar: numCups * RECIPE.SUGAR_PER_CUP,
    };

    const resultMessage = `For ${numCups} cup(s) of chai, you'll need:\n\n` +
      `💧 Water: ${ingredients.water} ml\n` +
      `🥛 Milk: ${ingredients.milk} ml\n` +
      `🍃 Tea Leaves: ${ingredients.teaLeaves} tbsp\n` +
      `📦 Sugar: ${ingredients.sugar} tsp`;

    window.alert(resultMessage);
  };

  return (
    <div className="w-full max-w-md flex justify-center">
      <Button onClick={handleCalculate} size="lg" className="text-lg px-8 py-6">
        Calculate Ingredients
      </Button>
    </div>
  );
}
