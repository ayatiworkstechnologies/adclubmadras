import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    date: "27",
    month: "JAN",
    year: "24",
    day: "SUN",
    title: "Webinar On Resetting Advertiser And Advertising Expectations",
    tag: "Open Series",
  },
  {
    date: "01",
    month: "FEB",
    year: "24",
    day: "TUE",
    title: "8th AdClub T10 Tennis Ball Cricket Tournament 2023",
    tag: "Sports",
  },
  {
    date: "15",
    month: "MAR",
    year: "24",
    day: "FRI",
    title: "Workshop On How To Create A Cool Brand Name",
    tag: "Workshop",
  },
  {
    date: "27",
    month: "JAN",
    year: "24",
    day: "SUN",
    title: "TOI And Adclub Madras Presents An Exclusive Brand Quiz",
    tag: "Quiz",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-center font-asgard font-extrabold text-xl sm:text-3xl uppercase mb-10 tracking-wider"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Upcoming Events
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="group border-b border-dashed border-gray-700 p-4 rounded-md  transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Date Box */}
              <div
                className={`w-full sm:w-20 h-20 flex flex-col rounded items-center justify-center 
                font-bold text-xs transition-all duration-300 ${
                  event.highlight
                    ? "bg-primary text-black"
                    : "bg-white text-black group-hover:bg-primary"
                }`}
              >
                <span className="uppercase">{event.day}</span>
                <span className="border-t w-10 py-1 border-black" />
                <span className="text-xl font-black leading-none">
                  {event.date}
                </span>
                <span className="text-[10px] font-bold uppercase">
                  {event.month} {event.year}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between space-y-2 sm:space-y-0 sm:grid sm:grid-cols-8 sm:items-center gap-4">
                {/* Title */}
                <p className="text-sm sm:col-span-5 sm:text-base md:text-lg font-semibold font-glancyr">
                  {event.title}
                </p>

                {/* Tag */}
                <span className="text-[10px] sm:col-span-2 sm:text-sm uppercase font-glancyr border border-white px-2 py-1 rounded-full w-fit">
                  {event.tag}
                </span>

                {/* Button */}
                <div className="sm:col-span-1 flex sm:justify-end">
                  <div className="relative w-10 h-10 rounded-full bg-primary overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:w-28">
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                      <ArrowRight className="text-black w-4 h-4" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-black text-[10px] font-bold uppercase tracking-wide whitespace-nowrap">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="inline-flex font-asgard items-center"
          >
            <span className="px-6 py-2.5 bg-white text-black uppercase rounded-full text-sm font-bold hover:bg-yellow-300 transition-all duration-300">
              View All Events
            </span>
            <span className=" p-2 bg-white text-black rounded-full hover:bg-yellow-300 transition-all duration-300">
              <ArrowRight className="h-5 w-5" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
