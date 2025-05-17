import React from "react";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

interface DiagonalDividerProps {
  className?: string;
}

const DiagonalDivider: React.FC<DiagonalDividerProps> = ({ className = "" }) => {
  return (
    <section 
      className={`relative py-16 ${className}`}
      style={{
        clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0% 95%)",
        background: `
          radial-gradient(#24177333 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
        backgroundColor: "#fafafa",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center py-8">
          <h3 className="text-2xl md:text-3xl font-bold text-barber-primary mb-4">
            Meet the Experts Behind Our Reputation
          </h3>
          <p className="text-gray-600 mb-6 text-center max-w-xl">
            Our skilled team of barbers brings years of experience and passion to every cut
          </p>
          <Button 
                              className="bg-barber-primary hover:bg-white hover:text-barber-primary text-white border border-barber-primary"

            onClick={() => window.location.href = "/about"}
          >
            <Users className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            Meet Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiagonalDivider; 