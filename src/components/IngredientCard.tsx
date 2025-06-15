
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface IngredientCardProps {
  icon: React.ReactNode;
  name: string;
  amount: number;
  unit: string;
  index: number;
}

export function IngredientCard({ icon, name, amount, unit, index }: IngredientCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div variants={cardVariants}>
      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
        <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-2">
          <div className="text-primary">{icon}</div>
          <p className="text-lg font-bold text-foreground">{name}</p>
          <p className="text-xl font-light text-muted-foreground">
            {amount.toLocaleString()} <span className="text-sm">{unit}</span>
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
