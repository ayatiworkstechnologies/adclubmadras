import React from "react";
import { motion } from "framer-motion";
import image2 from "@/assets/gallary/gallery-2.png";
import image3 from "@/assets/gallary/gallery-3.png";
import image4 from "@/assets/gallary/gallery-4.png";
import image5 from "@/assets/gallary/gallery-5.png";
import image6 from "@/assets/gallary/gallery-6.png";
import image7 from "@/assets/gallary/gallery-7.png";
import image8 from "@/assets/gallary/gallery-8.png";
import image1 from "@/assets/gallary/gallery-1.png";


// Sample image URLs (replace with actual paths or import your images)
const guestList = [
  { role: "CHAIRMAN", org: "Kasturi & Sons Ltd", name: "Mr. N Murali" },
  { role: "CHAIRMAN", org: "Sri Krishna Sweets", name: "K. Sweetswamy" },
  { role: "CHAIRMAN & WORLD PRESIDENT", org: "International Advertising Association", name: "R. S. Suresh Hanna" },
  { role: "PAST PRESIDENT", org: "IAA India", name: "Mr. N Murali" },
];

const images = [
  image1, image2, image3, image4, 
  image5, image6, image7, image8, 
];

export default function GallaryDetailePage() {
  return (
    <section className="bg-black text-white mt-10 px-4 py-16 sm:px-8 md:px-16">
      {/* Title */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold font-asgard mb-2">
        AD VENTURES BOOK LAUNCH
      </h2>
      <p className="text-center text-sm sm:text-base mb-10">
        Launch of the Book AD VENTURES Authored by Dr. T.S. Nagarajan
      </p>

      {/* Guests of Honour */}
      <h3 className="text-xl sm:text-2xl font-bold text-center uppercase mb-6">
        Guests of Honour
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {guestList.map((guest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-primary text-black p-4 rounded-xl border border-yellow-600 text-center shadow-lg"
          >
            <p className="font-bold uppercase text-sm sm:text-base mb-2">{guest.role}</p>
            <p className="text-xs text-white sm:text-sm mb-2">{guest.org}</p>
            <p className="mt-2 text-white font-thin mb-2">{guest.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl border-2 border-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={src}
              alt={`Event ${index + 1}`}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
