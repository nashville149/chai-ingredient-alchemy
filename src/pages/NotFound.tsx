
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary font-fancy">404</h1>
        <p className="text-2xl md:text-3xl font-light text-muted-foreground mt-4 mb-6">
          Oops! The page you're looking for has vanished into thin air.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
