import { useEffect } from "react";
import HeroSlider from "@/components/HeroSlider";
import FeaturedGallery from "@/components/FeaturedGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CallToActionSection from "@/components/sections/CallToActionSection";

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Setup appear animations for any remaining elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".appear-animation").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".appear-animation").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSlider />

        {/* Introduction Section */}
        <IntroSection />

        {/* Featured Gallery Section */}
        <FeaturedGallery />

        {/* Services Overview */}
        <ServicesSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Call to Action */}
        <CallToActionSection />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
