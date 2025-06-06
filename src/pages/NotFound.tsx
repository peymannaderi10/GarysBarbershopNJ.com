import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found - Gary's Barber Shop | Maple Shade, NJ"
        description="The page you're looking for doesn't exist. Visit Gary's Barber Shop homepage to explore our professional barber services in Maple Shade, NJ."
        canonicalUrl="/404"
        noindex={true}
      />
      
      <div className="min-h-screen flex items-center justify-center bg-barber-light">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-barber-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist. Let's get you back to our barbershop.
          </p>
          <div className="space-y-4">
            <Button 
              className="bg-barber-primary hover:bg-barber-secondary text-white mr-4"
              onClick={() => window.location.href = "/"}
            >
              Go Home
            </Button>
            <Button 
              variant="outline"
              className="border-barber-primary text-barber-primary hover:bg-barber-primary hover:text-white"
              onClick={() => window.location.href = "/services"}
            >
              View Services
            </Button>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>Looking for something specific? Try these links:</p>
            <div className="mt-2 space-x-4">
              <a href="/about" className="text-barber-primary hover:underline">About Us</a>
              <a href="/gallery" className="text-barber-primary hover:underline">Gallery</a>
              <a href="/reviews" className="text-barber-primary hover:underline">Reviews</a>
              <a href="/contact" className="text-barber-primary hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
