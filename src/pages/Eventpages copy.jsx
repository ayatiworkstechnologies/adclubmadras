import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { getEvents, getEventsCategory } from "@/api/api";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const formatTime = (seconds) => {
  if (!seconds && seconds !== 0) return "N/A";
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export default function AllEvents() {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([{ id: null, name: "All" }]);
  const [activeCategoryID, setActiveCategoryID] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const TABS_VISIBLE = 4;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsData, categoriesData] = await Promise.all([
          getEvents(),
          getEventsCategory(),
        ]);

        // Sort events by eventDate in descending order
        const sortedEvents = eventsData.sort(
          (a, b) => new Date(b.eventDate) - new Date(a.eventDate)
        );

        setEvents(sortedEvents);

        const formattedCategories = categoriesData.map((cat) => ({
          id: cat.id,
          name: cat.categoryName,
        }));

        setCategories([{ id: null, name: "All" }, ...formattedCategories]);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const toggleAccordion = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const filteredEvents =
    activeCategoryID === null
      ? events
      : events.filter((event) => event.eventCategoryID === activeCategoryID);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + TABS_VISIBLE < categories.length)
      setStartIndex(startIndex + 1);
  };

  const visibleTabs = categories.slice(startIndex, startIndex + TABS_VISIBLE);

  const formatTime = (seconds) => {
    if (!seconds) return "Not Available";
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getMonthName = (dateStr) => {
    const monthNum = parseInt(dateStr?.split("-")[1], 10) - 1;
    return isNaN(monthNum)
      ? "Month"
      : new Date(0, monthNum).toLocaleString("default", { month: "short" });
  };

  return (
    <section className="relative bg-black min-h-screen text-white mt-20 px-4 sm:px-6 md:px-12 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* 🔘 Horizontal Tabs */}
        <div className="flex justify-center items-center gap-8 mb-10 text-sm sm:text-base font-bold uppercase font-asgard">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="nav-chevron-btn"
          >
            <ChevronLeft className="chevron-icon" />
          </button>

          <div className="flex gap-8 items-center">
            {visibleTabs.map((cat, index) => (
              <React.Fragment key={cat.id ?? "all"}>
                <div className="relative w-20 h-20 flex items-center justify-center">
                  {activeCategoryID === cat.id && (
                    <div className="absolute inset-0 scale-110">
                      <DotLottieReact
                        src="/circleanime.lottie"
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  )}

                  <button
                    onClick={() => setActiveCategoryID(cat.id)}
                    className={`relative z-10 px-4 py-2 text-xs sm:text-sm font-bold uppercase rounded-full transition duration-300 ${
                      activeCategoryID === cat.id
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {cat.name}
                  </button>
                </div>

                {index !== visibleTabs.length - 1 && (
                  <span className="text-primary">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex + TABS_VISIBLE >= categories.length}
            className="nav-chevron-btn"
          >
            <ChevronRight className="chevron-icon" />
          </button>
        </div>

        {/* 🔘 Accordion Events */}
        {filteredEvents.map((event, i) => (
          <div
            key={i}
            className="group border-b border-dashed border-gray-700 pb-6"
          >
            {/* Summary */}
            <div className="flex flex-col sm:grid sm:grid-cols-11 gap-4 p-4 rounded-md transition-shadow duration-300 group-hover:shadow-lg">
              <div className="w-full sm:col-span-1 h-20 flex flex-col items-center justify-center rounded font-bold text-xs bg-white text-black group-hover:bg-primary transition-colors duration-300">
                <span className="uppercase">{event.eventDates || "DATE"}</span>
                <span className="border-t border-black w-10 py-1" />
                <span className="text-xl font-black leading-none">
                  {event.eventDate?.split("-")[2] || "00"}
                </span>
                <span className="text-[10px] font-bold uppercase">
                  {getMonthName(event.eventDate)}{" "}
                  {event.eventDate?.split("-")[0] || "0000"}
                </span>
              </div>

              <p className="sm:col-span-6 text-sm sm:text-base lg:text-lg p-3 font-semibold font-glancyr break-words">
                {event.eventTitle}
              </p>

              <span className="sm:col-span-2 text-[10px] sm:text-sm uppercase font-glancyr border border-white px-3 py-1 rounded-full w-fit h-fit">
                {
                  (
                    categories.find(
                      (cat) => cat.id === event.eventCategoryID
                    ) || { name: "Unknown" }
                  ).name
                }
              </span>

              <div className="sm:col-span-2 flex sm:justify-end">
                <button
                  onClick={() => toggleAccordion(i)}
                  className="relative w-10 h-10 rounded-full bg-primary overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:w-28"
                >
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      openIndex === i ? "opacity-100" : "group-hover:opacity-0"
                    }`}
                  >
                    {openIndex === i ? (
                      <ChevronDown className="w-4 h-4 text-black" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-black" />
                    )}
                  </div>
                  <div
                    className={`absolute inset-0 flex items-center justify-center ${
                      openIndex === i
                        ? "opacity-0"
                        : "opacity-0 group-hover:opacity-100"
                    } transition-opacity duration-300`}
                  >
                    <span className="text-black text-[10px] sm:text-xs font-bold uppercase tracking-wide whitespace-nowrap">
                      View Details
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Accordion Content */}
            {openIndex === i && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 px-2 sm:px-4 text-sm sm:text-base">
                <div className="sm:col-span-2 space-y-6">
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { label: "Date", value: event?.eventDate || "N/A" },
                      { label: "Time", value: formatTime(event?.eventTime) },
                      {
                        label: "Reporting Time",
                        value: formatTime(event?.reportingTime),
                      },
                      { label: "Venue", value: event?.eventVenue || "N/A" },
                      {
                        label: "Entry Fee",
                        value:
                          event?.memberFeeText ||
                          (event?.memberFee && event?.nonMemberFee
                            ? `Members: ₹${event.memberFee} | Non Members: ₹${event.nonMemberFee}`
                            : "N/A"),
                      },
                      {
                        label: "Registration / Streaming",
                        value: event?.streaming_link ? (
                          <a
                            href={event.streaming_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-white hover:text-yellow-300"
                          >
                            Click to Register
                          </a>
                        ) : (
                          "N/A"
                        ),
                      },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="bg-primary rounded-xl p-4 shadow-md text-black"
                      >
                        <div className="font-bold text-xs mb-1">{label}:</div>
                        <div className="text-sm break-words">
                          {typeof value === "string" ||
                          typeof value === "number"
                            ? value
                            : value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-gray-400 pt-2">
                    Terms &amp; Conditions:
                  </div>

                  <div>
                    <span className="text-lg sm:text-xl font-asgard font-semibold uppercase inline-block mb-5">
                      {
                        (
                          categories.find(
                            (cat) => cat.id === event?.eventCategoryID
                          ) || {
                            name: "Unknown",
                          }
                        ).name
                      }{" "}
                      Registration:
                    </span>
                    <div
                      className="text-white font-glancyr whitespace-pre-line break-words"
                      dangerouslySetInnerHTML={{
                        __html:
                          event?.eventDescription?.trim() ||
                          "<p>No description available.</p>",
                      }}
                    ></div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-6 inline-flex items-center font-asgard"
                  >
                    <span className="px-5 py-3 bg-white text-black rounded-full font-bold hover:bg-primary hover:text-black transition-colors duration-300">
                      Register Now
                    </span>
                    <span className="px-4 py-3 bg-white text-black rounded-full hover:bg-primary hover:text-black transition-colors duration-300 flex items-center">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </motion.button>
                </div>

                <div className="sm:col-span-1 flex justify-center sm:justify-start">
                  <img
                    src={event?.eventPoster || "/assets/placeholder.jpg"}
                    alt="Event Poster"
                    className="w-[800px] h-[400px] rounded border border-primary object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
