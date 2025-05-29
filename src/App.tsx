import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
// Blog imports
import HowToMaintainYourHaircut from "./pages/blogs/HowToMaintainYourHaircut";
import ChoosingRightHaircutFaceShape from "./pages/blogs/ChoosingRightHaircutFaceShape";
import BeardGroomingGuide from "./pages/blogs/BeardGroomingGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              {/* Blog Routes */}
              <Route path="/blogs/how-to-maintain-your-haircut" element={<HowToMaintainYourHaircut />} />
              <Route path="/blogs/choosing-right-haircut-face-shape" element={<ChoosingRightHaircutFaceShape />} />
              <Route path="/blogs/beard-grooming-guide" element={<BeardGroomingGuide />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
