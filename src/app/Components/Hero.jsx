"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // icons
import Image from "next/image";

export default function Hero() {
  const slides = [
    {
      id: 1,
      title: "Delivering Innovation",
      desc: "Building modern web apps with speed, scalability, and style.",
      img: "https://9l83awfqh1.ufs.sh/f/20tiYTv6bKZEDVg8wUPH6YMBTL8PVuvjmC3IozsUx2D7H1fw",
    },
    {
      id: 2,
      title: "MERN Stack Expertise",
      desc: "Crafting seamless full-stack solutions for real business impact.",
      img: "https://9l83awfqh1.ufs.sh/f/20tiYTv6bKZE8PamEeqXiBWFOoTyVdjMs56JqxpkzQ4YXSLe",
    },
    {
      id: 3,
      title: "Next.js + Tailwind",
      desc: "Modern, responsive, lightning-fast UI & UX development.",
      img: "https://9l83awfqh1.ufs.sh/f/20tiYTv6bKZERQNvf1clwj6xrEmM9dB7ckauXDNsKiv1VCqP",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-full h-[70vh] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={slides[index].img}
            alt={slides[index].title}
            fill
            priority
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
            <motion.h1
              key={slides[index].title}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
            >
              {slides[index].title}
            </motion.h1>
            <motion.p
              key={slides[index].desc}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg max-w-2xl mb-6"
            >
              {slides[index].desc}
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all rounded-xl shadow-lg"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-indigo-500 scale-110" : "bg-white/70"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
