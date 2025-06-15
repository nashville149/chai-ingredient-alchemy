
import { ChaiCalculator } from "@/components/ChaiCalculator";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Chai Calculator</h1>
        <p className="text-muted-foreground mt-2">Click the button to start.</p>
      </div>
      <ChaiCalculator />
    </div>
  );
};

export default Index;
