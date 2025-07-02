'use client';

import { useState, useEffect } from 'react';
import Footer from "@/components/footer/footer";
import Welcome from "@/components/welcome/welcome";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import MidSection from '@/components/hero/mid-section';
import Testimonials from '@/components/testimonial/testimonial';
import Blogs from '@/components/blogs/blogs';
import Loader from "@/components/loader/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading all resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Loader isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <Header />
          <Welcome />
          <Hero />
          <MidSection />
          <Testimonials />
          <Blogs />
          <Footer />
        </>
      )}
    </div>
  );
}