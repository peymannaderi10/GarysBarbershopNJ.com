
import { useEffect } from "react";
import ReviewCard from "@/components/ReviewCard";
import ParallaxSection from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Michael Johnson",
    date: "June 15, 2023",
    rating: 5,
    text: "Gar is a true professional. I've been coming here for years and have never had a bad haircut. The attention to detail and precision is unmatched in the area."
  },
  {
    id: 2,
    name: "David Williams",
    date: "July 22, 2023",
    rating: 5,
    text: "Best barbershop in Maple Shade! The environment is clean and welcoming, and the haircuts are consistently excellent. I won't go anywhere else."
  },
  {
    id: 3,
    name: "Robert Davis",
    date: "August 5, 2023",
    rating: 4,
    text: "Great experience overall. The barber took his time to understand exactly what I wanted and delivered perfectly. Highly recommended."
  },
  {
    id: 4,
    name: "James Anderson",
    date: "September 12, 2023",
    rating: 5,
    text: "I was new to the area and tried Gar's based on recommendations. Now I know why everyone speaks so highly of this place - professional service and great results!"
  },
  {
    id: 5,
    name: "Thomas Wilson",
    date: "October 18, 2023",
    rating: 5,
    text: "My go-to spot for haircuts. The appointment system works great, the staff is friendly, and most importantly, the haircuts are always on point."
  },
  {
    id: 6,
    name: "Christopher Brown",
    date: "November 7, 2023",
    rating: 5,
    text: "I've been to many barbershops in my life, but Gar's stands out for their consistency and quality. Never disappointed with the results."
  },
  {
    id: 7,
    name: "Daniel Taylor",
    date: "December 19, 2023",
    rating: 4,
    text: "Really appreciate the attention to detail and the friendly atmosphere. The hot towel neck shave is a nice touch that you don't get everywhere."
  },
  {
    id: 8,
    name: "Anthony Harris",
    date: "January 8, 2024",
    rating: 5,
    text: "The best haircut in South Jersey, period. Professional, punctual, and perfect results every time. Worth every penny."
  },
  {
    id: 9,
    name: "Matthew Clark",
    date: "February 14, 2024",
    rating: 5,
    text: "Gar is a master at his craft. I appreciate how he listens to what I want and offers suggestions to make it even better. My beard has never looked so good!"
  }
];

const Reviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="400px"
      >
        <div className="flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Customer Reviews</h1>
            <p className="text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              See what our clients have to say about their experience at Gar's Barbershop
            </p>
            <div className="mt-6 flex justify-center items-center space-x-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    {star}
                  </span>
                ))}
              </div>
              <span className="text-xl font-semibold">4.84 on Google Reviews</span>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Reviews Grid */}
      <section className="py-16 bg-barber-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                date={review.date}
                rating={review.rating}
                text={review.text}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Write A Review Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-barber-primary mb-4">Love Your Experience?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We appreciate your feedback! If you enjoyed your visit to Gar's Barbershop, please consider leaving us a review.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#4285F4] hover:bg-[#4285F4]/90 text-white"
              onClick={() => window.open("https://g.page/r/GarsBarberShop/review", "_blank")}
            >
              Leave a Google Review
            </Button>
            <Button 
              className="bg-barber-accent hover:bg-barber-accent/90 text-white"
              onClick={() => window.open("https://www.facebook.com/GarsBarberShop/reviews/", "_blank")}
            >
              Leave a Facebook Review
            </Button>
          </div>
        </div>
      </section>
      
      {/* Book Now CTA */}
      <section className="py-16 bg-barber-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Service?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and see why our clients consistently rate us 4.8+ stars.
          </p>
          <Button 
            size="lg"
            className="bg-barber-accent hover:bg-barber-accent/90 text-white px-8"
            onClick={() => window.open("https://squareup.com/appointments", "_blank")}
          >
            Book an Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
