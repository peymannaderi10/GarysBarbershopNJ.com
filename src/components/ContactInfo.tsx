
import { Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DayHours {
  day: string;
  hours: string;
  isToday: boolean;
}

const ContactInfo = () => {
  const today = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
  
  const businessHours: DayHours[] = [
    { day: "Sunday", hours: "Closed", isToday: today === 0 },
    { day: "Monday", hours: "Closed", isToday: today === 1 },
    { day: "Tuesday", hours: "9 AM–3 PM", isToday: today === 2 },
    { day: "Wednesday", hours: "9 AM–7 PM", isToday: today === 3 },
    { day: "Thursday", hours: "9 AM–7 PM", isToday: today === 4 },
    { day: "Friday", hours: "9 AM–7 PM", isToday: today === 5 },
    { day: "Saturday", hours: "9 AM–4 PM", isToday: today === 6 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold text-barber-primary mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-start space-x-3">
          <div className="bg-barber-accent/10 p-3 rounded-full">
            <Phone className="h-6 w-6 text-barber-accent" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Phone</h4>
            <p className="text-gray-600">(856) 414-1015</p>
          </div>
        </div>
        
        {/* Email */}
        <div className="flex items-start space-x-3">
          <div className="bg-barber-accent/10 p-3 rounded-full">
            <Mail className="h-6 w-6 text-barber-accent" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Email</h4>
            <p className="text-gray-600">info@garsbarbershop.com</p>
          </div>
        </div>
        
        {/* Address */}
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Address</h4>
          <p className="text-gray-600">12 E Main St,<br />Maple Shade, NJ 08052</p>
          <a 
            href="https://maps.google.com/?q=12+E+Main+St,+Maple+Shade,+NJ+08052" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-barber-accent hover:underline inline-block mt-2"
          >
            Get Directions
          </a>
        </div>
      </div>
      
      {/* Hours */}
      <div className="mt-8">
        <div className="flex items-start space-x-3 mb-4">
          <div className="bg-barber-accent/10 p-3 rounded-full">
            <Calendar className="h-6 w-6 text-barber-accent" />
          </div>
          <h4 className="font-medium text-gray-800 mt-3">Business Hours</h4>
        </div>
        
        <div className="space-y-2">
          {businessHours.map((item, index) => (
            <div 
              key={index}
              className={`flex justify-between ${item.isToday ? "font-semibold text-barber-accent" : "text-gray-600"}`}
            >
              <span>{item.day}{item.isToday ? " (Today)" : ""}</span>
              <span>{item.hours}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Book Button */}
      <Button 
        className="w-full mt-8 bg-barber-accent hover:bg-barber-accent/90"
        onClick={() => window.open("https://squareup.com/appointments", "_blank")}
      >
        Book an Appointment
      </Button>
    </div>
  );
};

export default ContactInfo;
