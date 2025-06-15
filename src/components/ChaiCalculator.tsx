
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { AnimatePresence, motion } from "framer-motion";
import { IngredientCard } from "./IngredientCard";
import { Leaf, Milk, Droplets, Cube } from 'lucide-react';

interface Ingredients {
  water: number;
  milk: number;
  teaLeaves: number;
  sugar: number;
}

const RECIPE = {
  WATER_PER_CUP: 200, // ml
  MILK_PER_CUP: 50, // ml
  TEA_LEAVES_PER_CUP: 1, // tbsp
  SUGAR_PER_CUP: 2, // tsp
};

export function ChaiCalculator() {
  const [cups, setCups] = useState('');
  const [ingredients, setIngredients] = useState<Ingredients | null>(null);
  const { toast } = useToast();

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const numCups = parseInt(cups, 10);

    if (isNaN(numCups) || numCups <= 0) {
      toast({
        title: "Oh, be reasonable!",
        description: "Please enter a valid number of cups (more than 0).",
        variant: "destructive",
      });
      setIngredients(null);
      return;
    }

    setIngredients({
      water: numCups * RECIPE.WATER_PER_CUP,
      milk: numCups * RECIPE.MILK_PER_CUP,
      teaLeaves: numCups * RECIPE.TEA_LEAVES_PER_CUP,
      sugar: numCups * RECIPE.SUGAR_PER_CUP,
    });
  };

  const ingredientList = ingredients ? [
    { name: "Water", amount: ingredients.water, unit: "ml", icon: <Droplets size={32} /> },
    { name: "Milk", amount: ingredients.milk, unit: "ml", icon: <Milk size={32} /> },
    { name: "Tea Leaves", amount: ingredients.teaLeaves, unit: "tbsp", icon: <Leaf size={32} /> },
    { name: "Sugar", amount: ingredients.sugar, unit: "tsp", icon: <Cube size={32} /> },
  ] : [];

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleCalculate} className="flex items-center gap-2 mb-8">
        <Input
          type="number"
          placeholder="Enter number of cups..."
          value={cups}
          onChange={(e) => setCups(e.target.value)}
          className="flex-grow text-lg p-6 bg-input border-primary/20 focus-visible:ring-primary"
        />
        <Button type="submit" size="lg" className="text-lg px-8 py-[1.6rem]">
          Brew
        </Button>
      </form>

      <AnimatePresence>
        {ingredients && (
           <motion.div 
             className="grid grid-cols-2 md:grid-cols-4 gap-4"
             initial="hidden"
             animate="visible"
           >
            {ingredientList.map((item, index) => (
              <IngredientCard key={item.name} {...item} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
