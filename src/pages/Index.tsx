
import { ChaiCalculator } from "@/components/ChaiCalculator";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background bg-dot-white/[0.1] relative flex flex-col items-center justify-center p-4 antialiased">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="text-center z-10 mb-12">
        <h1 className="text-5xl md:text-7xl font-bold font-fancy text-primary">
          Chai Ingredient Alchemy
        </h1>
        <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
          Unveil the secrets to the perfect cup of Kenyan chai. Enter how many cups you wish to conjure, and let the magic begin.
        </p>
      </div>

      <div className="z-10 w-full flex justify-center">
        <ChaiCalculator />
      </div>
    </div>
  );
};

export default Index;
