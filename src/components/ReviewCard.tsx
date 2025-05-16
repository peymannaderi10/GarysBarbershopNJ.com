
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface ReviewProps {
  name: string;
  date: string;
  rating: number;
  text: string;
  index: number;
}

const ReviewCard = ({ name, date, rating, text, index }: ReviewProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const reviewRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (reviewRef.current) {
      observer.observe(reviewRef.current);
    }
    
    return () => {
      if (reviewRef.current) {
        observer.unobserve(reviewRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={reviewRef}
      className={cn(
        "bg-white p-6 rounded-lg shadow-md transition-all duration-700",
        isVisible 
          ? "opacity-100 transform translate-y-0" 
          : "opacity-0 transform translate-y-8"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-barber-primary">{name}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="flex text-yellow-400">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              size={18} 
              fill={i < rating ? "currentColor" : "none"} 
              className={i < rating ? "text-yellow-400" : "text-gray-300"} 
            />
          ))}
        </div>
      </div>
      <p className="mt-4 text-gray-600">{text}</p>
    </div>
  );
};

export default ReviewCard;
