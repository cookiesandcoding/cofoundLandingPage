'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Rocket, Code, Paintbrush } from 'lucide-react';

const features = [
  {
    step: 'Step 1',
    title: 'Connect',
    content:
      'Find potential collaborators based on skills, interests, and goals.',
    icon: <Rocket className="h-6 w-6 text-[#BB86FC]" />,
    image:
      '/image.png',
  },
  {
    step: 'Step 2',
    title: 'Validate',
    content:
      'Verify compatibility through structured conversations and shared goals.',
    icon: <Paintbrush className="h-6 w-6 text-[#BB86FC]" />,
    image:
      '/image.png',//sample image 
  },
  {
    step: 'Step 3',
    title: 'Collaborate',
    content:
      'Work together on initial projects to test your working relationship.',
    icon: <Code className="h-6 w-6 text-[#BB86FC]" />,
    image:
      '/image.png',
  },
  {
    step: 'Step 4',
    title: 'Launch',
    content:
      'Formalize your partnership and start building something Awesome.',
    icon: <Code className="h-6 w-6 text-[#BB86FC]" />,
    image:
      '/image.png',
  },
];

export default function FeatureSteps() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (4000 / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <div className="bg-black text-[#E0E0E0] p-8 md:p-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative mx-auto mb-12 max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              How it works ? 
            </h2>
            <p className="mt-3 text-[#9E9E9E]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
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
        

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10">
          <div className="order-2 space-y-8 md:order-1">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3, x: -20 }}
                animate={{
                  opacity: index === currentFeature ? 1 : 0.3,
                  x: 0,
                  scale: index === currentFeature ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-full border-2 md:h-14 md:w-14',
                    index === currentFeature
                      ? 'scale-110 border-[#BB86FC] bg-[#BB86FC1A] text-[#BB86FC] shadow-[0_0_15px_rgba(187,134,252,0.3)]'
                      : 'border-[#2C2C2C] bg-[#1E1E1E] text-[#9E9E9E]',
                  )}
                >
                  {feature.icon}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#9E9E9E]">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative order-1 h-[200px] overflow-hidden rounded-xl border border-[#BB86FC33] shadow-[0_5px_30px_-15px_rgba(187,134,252,0.3)] md:order-2 md:h-[300px] lg:h-[400px]">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 overflow-hidden rounded-lg"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                        width={1000}
                        height={500}
                        priority
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 rounded-lg bg-[#1E1E1E]/80 p-2 backdrop-blur-sm">
                        <span className="text-xs font-medium text-[#BB86FC]">
                          {feature.step}
                        </span>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
