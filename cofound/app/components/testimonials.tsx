'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        'Took a shot on CoFound, found a great project partner in two days. Wasn’t expecting it to work out that fast.',
      author: 'Sarah Johnson',
      role: 'Game Developer',
      company: 'TechStart',
    },
    {
      quote:
        'As a developer looking to join a startup, CoFound helped me find founders whose vision aligned perfectly with my skills and interests.',
      author: 'Michael Chen',
      role: 'CTO',
      company: 'DataViz',
    },
    {
      quote:
        'CoFound took out the guesswork. We found our project team without months of awkward networking.',
      author: 'Aisha Patel',
      role: 'Network Engineer',
      company: 'EcoSolutions',
    },
    {
      quote:
        'Super fast process. Within a week we were collaborating and building!',
      author: 'Ravi Kumar',
      role: 'ML Engineer',
      company: 'AgroTech',
    },
    {
      quote:
        'Loved the vibe! CoFound made it super easy to connect with passionate folks.',
      author: 'Jessica Lee',
      role: 'UI/UX Designer',
      company: 'DesignKit',
    },
    {
      quote:
        'If you’re serious about finding collaborators, CoFound is a goldmine.',
      author: 'Ankit Mehta',
      role: 'Startup Mentor',
      company: 'Launchify',
    },
  ];

  const cardsPerPage = 3;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + cardsPerPage) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + cardsPerPage
  ).length === cardsPerPage
    ? testimonials.slice(startIndex, startIndex + cardsPerPage)
    : [
        ...testimonials.slice(startIndex),
        ...testimonials.slice(0, cardsPerPage - (testimonials.length - startIndex)),
      ];

  return (
    <div className="bg-black text-[#E0E0E0] p-8 md:p-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative mx-auto mb-12 max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Still unsure ? Hear them .
            </h2>
            <p className="mt-3 text-[#9E9E9E]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                'radial-gradient(circle at center, rgba(187,134,252,0.15) 0%, rgba(18,18,18,0) 70%)',
            }}
          ></div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className=" grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative flex flex-col rounded-2xl border border-[#BB86FC33] shadow-[0_5px_30px_-15px_rgba(187,134,252,0.3)]  bg-gradient-to-b from-secondary/20 to-card p-6 shadow-md backdrop-blur-sm"
              >
                {/* Glow */}
                <div className="absolute -top-5 -left-5 -z-10 h-32 w-32 rounded-full bg-primary/20 blur-xl" />
                <div className="absolute -bottom-10 -right-10 -z-10 h-24 w-24 rounded-full bg-primary/10 blur-lg" />

                {/* Quote Icon */}
                <div className="mb-6 text-primary">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-base text-foreground/90 leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                <div>
                  <p className="text-lg font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Testimonials;
