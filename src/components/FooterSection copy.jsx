import React, { useState } from "react";
import logo from "/logo.svg";
import footerFream from "../assets/fotter-fream.svg";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import LoginModal from "../pages/MemberLogin";

const FooterSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div
      className="bg-primary text-black font-bold px-4 py-10 sm:px-6 md:px-10 lg:px-16 flex flex-col"
      style={{
        backgroundImage: `url(${footerFream})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Content */}
      <div className="">
        <div className="grid grid-cols md:grid-cols-12 md:grid-rows-4 gap-4">
          {/* Logo */}
          <a href="/">
            <div className="md:col-span-2 flex justify-start items-start animate-fadeIn">
              <img src={logo} alt="logo" className="w-full h-20 text-black" />
            </div>
          </a>

          {/* Navigation */}
          <div className="md:col-start-6 md:col-span-6 grid grid-cols-2 sm:grid-cols-4 text-xs md:text-sm font-normal leading-tight gap-y-4 animate-slideInUp mt-6 md:mt-0 text-center md:text-right">
            <div className="flex flex-col space-y-2">
              <a
                href="/about-us"
                className="hover:text-white hover:font-bold  decoration-white transition duration-200"
              >
                ABOUT US
              </a>
              <a
                href="https://pgda.adclubmadras.com/"
                className="hover:text-white hover:font-bold  decoration-white transition duration-200"
              >
                COURSES
              </a>
              <a
                href="/become-a-member"
                className="hover:text-white hover:font-bold  decoration-white transition duration-200"
              >
                BECOME A MEMBER
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <a
                href="/events"
                className="hover:text-white hover:font-bold decoration-white transition duration-200"
              >
                EVENTS
              </a>
              <a
                href="/gallery"
                className="hover:text-white hover:font-bold  decoration-white transition duration-200"
              >
                GALLERY
              </a>
              <a
                href="/career"
                className="hover:text-white hover:font-bold  decoration-white transition duration-200"
              >
                CAREER
              </a>
            </div>
            <div className="flex flex-col space-y-2 font-extrabold">
              <a
                href="/contact"
                className="hover:text-white  decoration-white transition duration-200"
              >
                CONTACT
              </a>
            </div>
            <div className="flex flex-col space-y-2 font-extrabold">
              {/* <a href="/members-login" className="hover:text-white decoration-white transition duration-200">MEMBERS LOGIN</a> */}
              <button
                onClick={toggleModal}
                className="text-sm text-black hover:text-white font-asgard uppercase decoration-white transition duration-200"
              >
                Member Login
              </button>
            </div>
            {/* Modal */}
            <LoginModal isOpen={isModalOpen} onClose={toggleModal} />
          </div>

          {/* Central Big Text */}
          <div className="md:col-span-8 row-span-4 font-asgard flex flex-col justify-center items-center text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none animate-slideInLeft mt-10 md:mt-0">
            <h1 className="leading-none">ADVERTISING</h1>
            <h1 className="leading-none">CLUB MADRAS</h1>
          </div>

          {/* Contact Info */}
          <div className="md:col-start-10 md:col-span-3 text-xs md:text-sm font-normal mt-6 md:mt-2 leading-snug animate-fadeIn delay-300">
            <p>57, Bazullah Road,</p>
            <p>T. Nagar, Chennai - 600 017</p>
            <p>9848710762, 044 - 42694778</p>
            <p>
              <a
                href="mailto:advertisingclubmadras@gmail.com"
                className="underline"
              >
                advertisingclubmadras@gmail.com
              </a>
            </p>
            <div className="flex space-x-4 mt-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-black hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-black hover:text-white transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      {/* Footer Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-black/30 text-xs font-medium flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left flex-wrap">
        <p className="hover:text-white decoration-white transition duration-200">
          ADVERTISING CLUB MADRAS © 2024
        </p>

        <div className="flex items-center gap-4">
          <a
            href="/privacy-policy"
            className="hover:text-white decoration-white transition duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-conditions"
            className="hover:text-white decoration-white transition duration-200"
          >
            Terms & Conditions
          </a>
          <a
            href="/refund-and-cancellation"
            className="hover:text-white decoration-white transition duration-200"
          >
            Refund & Cancellation
          </a>
        </div>

        <p className="flex   items-center gap-2 hover:text-white decoration-white transition duration-200"  onClick={() =>
                  window.open("https://ayatiworks.com/", "_blank")
                }>
          DESIGN & DEVELOPMENT{" "}
          <span className="font-bold ml-1">BY AYATIWORKS</span>
          <img src="/web_logo.png"  onClick={() =>
                  window.open("https://ayatiworks.com/", "_blank")
                } alt="AyatiWorks Logo" className="w-20 h-20" />
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
