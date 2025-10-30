/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Header from "./components/Header";
import { MoveRight, ChevronDown, Star, Plus } from "lucide-react";
import Image from "next/image";
import { Footer } from "./components/Footer";
import CardFadeOutSection from "./components/CardFadeOutSection";

const blogPosts = [
  {
    id: 1,
    image: "/blog2.png",
    title: "Aute Irure Esse Cillum",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. ",
  },
  {
    id: 2,
    image: "/blog1.png",
    title: "Aute Irure Esse Cillum",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
  {
    id: 3,
    image: "/blog3.png",
    title: "Cupidatat Non proident Sunt Nulla",
    description: "Cupidatat non proident, sunt in culpa qui officia.",
  },
];

const faqs = [
  {
    question: "What Is Digital Signage?",
    answer:
      "Digital signage is a display technology that uses screens to share dynamic content like advertisements, announcements, and real-time information.",
  },
  {
    question: "How Does Digital Signage Work?",
    answer:
      "Digital signage works by using digital displays connected to a content management system that allows businesses to update and manage content remotely.",
  },
  {
    question: "Why Is Digital Signage Important For My Business?",
    answer:
      "It enhances brand visibility, engages customers, and allows you to communicate messages effectively across different locations.",
  },
  {
    question: "What Are The Benefits Of Using Digital Signage?",
    answer:
      "Digital signage offers a world of advantages for your business across various industries. It captures attention with vibrant visuals and creates immersive experiences. This can lead to improved engagement, higher sales, and stronger brand awareness.",
  },
  {
    question: "How Does Digital Signage Boost Your Brand?",
    answer:
      "It helps reinforce brand identity through consistent visuals, engaging animations, and dynamic storytelling.",
  },
  {
    question: "Can Digital Signage Target Your Audience?",
    answer:
      "Yes, you can tailor content based on location, time of day, or audience demographics to maximize engagement.",
  },
  {
    question: "How Can Digital Signage Enhance Customer Engagement?",
    answer:
      "Interactive and personalized content can improve customer satisfaction and encourage repeat visits.",
  },
  {
    question: "Can Digital Signage Be Considered A Cost-Effective Solution?",
    answer:
      "Yes, compared to traditional static signage, it reduces printing costs and allows for real-time content updates.",
  },
];

const logos = ["/bus1.png", "/bus2.png", "/bus3.png", "/bus4.png", "/bus5.png"];

const screensData = [
  {
    title: "Indoor Screens",
    image: "/Group 1000005515 (1).png",
    description1:
      "Indoor LED screens deliver crisp, high-resolution visuals ideal for close viewing in conference halls, malls, showrooms, and event venues. They are designed to perform optimally in controlled lighting conditions, ensuring vibrant colors and sharp detail. Lightweight and sleek, they integrate seamlessly into interior spaces without overpowering the décor.",
    description2:
      "They are available in various pixel pitches to suit different viewing distances, making them versatile for both small and large venues. With seamless panel connections, they create a smooth, uninterrupted image that enhances visual appeal. Easy maintenance and energy efficiency make them a cost-effective long-term display solution.",
  },
  {
    title: "Outdoor Screens",
    image: "/Group 1000005515 (2).png",
    description1:
      "Outdoor LED screens are built to withstand harsh weather conditions while delivering excellent brightness and visibility even under direct sunlight. They are perfect for billboards, stadiums, and outdoor advertising.",
    description2:
      "With waterproof and dustproof designs, they ensure consistent performance and durability. Their high contrast and brightness make them ideal for dynamic outdoor displays.",
  },
  {
    title: "Transparent Screens",
    image: "/Group 1000005515 (3).png",
    description1:
      "Transparent LED screens provide stunning visuals while maintaining transparency, perfect for retail windows, showrooms, and exhibitions.",
    description2:
      "They blend digital content with the real-world background, creating an immersive and futuristic viewing experience.",
  },
  {
    title: "Curved Screens",
    image: "/Group 1000005515 (4).png",
    description1:
      "Curved LED screens offer a captivating panoramic view ideal for immersive displays in control rooms, exhibitions, and large venues.",
    description2:
      "Their flexible design allows for creative installations, enhancing depth and engagement with audiences.",
  },
  {
    title: "Interactive Screens",
    image: "/Group 1000005515 (5).png",
    description1:
      "Interactive screens combine touch-sensitive technology with vivid display quality, enabling user engagement in classrooms, malls, and presentations.",
    description2:
      "They support multi-touch input, making them perfect for collaboration, gaming, and digital signage.",
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [active, setActive] = useState(screensData[0]);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="">
      <div
        style={{ backgroundImage: "url('/bg-hero.png')" }}
        className="bg-cover bg-center bg-no-repeat w-full"
      >
        <Header />

        {/* hero section starts  */}
        <section>
          <div className="w-full  px-6 py-16 md:py-24 space-y-5 ">
            <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-10 mb-10">
              {/* Left Section */}
              <div className="flex-1 space-y-5 text-center md:text-left">
                <h3 className="font-semibold text-black text-2xl sm:text-3xl md:text-4xl">
                  Transform Any Space With
                </h3>

                <h1 className="font-bold text-primary text-3xl sm:text-4xl md:text-5xl my-3">
                  Digital Signage
                </h1>

                <p className="text-para text-base sm:text-lg md:text-xl">
                  Light up your brand with stunning digital displays.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-all">
                    Start FREE Trial
                  </button>

                  <button className="border border-primary text-black font-semibold px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-all">
                    Suggest My Signage
                  </button>
                </div>

                {/* Avatar + Rating Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mt-6">
                  {/* Avatar Group */}
                  <div className="flex items-center -space-x-3">
                    {["/ava1.jpg", "/ava2.jpg", "/ava3.jpg", "/ava4.jpg"].map(
                      (src, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden shadow"
                        >
                          <Image
                            src={src}
                            alt={`User ${i + 1}`}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )
                    )}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full border-2 border-white shadow text-lg font-semibold">
                      <Plus size={18} />
                    </div>
                  </div>

                  {/* Rating Section */}
                  <div className="flex flex-col items-center sm:items-start">
                    <div className="flex items-center">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          fill="#FBBF24"
                          stroke="#FBBF24"
                          size={20}
                        />
                      ))}
                      {/* Half star */}
                      <Star fill="url(#half)" stroke="#FBBF24" size={20} />
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient id="half">
                            <stop offset="50%" stopColor="#FBBF24" />
                            <stop offset="50%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-gray-800 font-semibold mt-1 text-sm sm:text-base">
                      4.5 Google Review
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section (Image placeholder) */}
              <div className="flex-1 w-full flex justify-center md:justify-end">
                {/* Replace with actual image */}
                <Image
                  src="/2.png"
                  alt="Digital Signage Display"
                  width={700}
                  height={700}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="space-y-6 mt-28 overflow-hidden">
              <h3 className="font-semibold text-center text-2xl">
                Powering Displays for Growing Businesses
              </h3>

              {/* Auto-scroll carousel */}
              <div className="relative w-full overflow-hidden">
                <div className="flex space-x-10 animate-scroll">
                  {logos.concat(logos).map((src, index) => (
                    <div key={index} className="shrink-0">
                      <Image
                        src={src}
                        alt={`Business logo ${index + 1}`}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* hero section ends  */}
      </div>

      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 p-4 mt-10">
        <div
          style={{ backgroundImage: "url('/bg1.svg')" }}
          className="bg-cover bg-center bg-no-repeat w-full flex flex-col items-center justify-center rounded-lg px-6 py-16 md:py-24 space-y-5 text-center"
        >
          {/* Text Section */}
          <div className="max-w-4xl">
            <h3 className="font-semibold text-black text-2xl sm:text-3xl md:text-4xl">
              Introducing our
            </h3>
            <h1 className="font-bold text-primary text-3xl sm:text-4xl md:text-5xl my-3">
              AI Digital Signage
            </h1>
            <p className="text-para text-base sm:text-lg md:text-xl">
              Get more customer attention with AI! See what shoppers like in
              real time, show the right products, and boost sales with smarter
              ads.
            </p>
          </div>

          {/* Image/Preview Section */}
          <div className="border-8 border-white rounded-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-96 my-6  shadow-md">
            <Image
              src="/4.png"
              alt="Digital Signage Display"
              width={700}
              height={700}
              className="object-contain"
            /></div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button className="px-6 py-3 text-white bg-primary rounded-lg text-base sm:text-lg font-semibold w-full sm:w-auto">
              Start FREE Trial
            </button>
            <button className="px-6 py-3 rounded-lg border border-primary text-black flex items-center justify-center gap-2 text-base sm:text-lg font-semibold w-full sm:w-auto">
              Suggest My Signage
            </button>
          </div>
        </div>
      </section>



      {/* screen display section starts  */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-10">
        <div
          style={{ backgroundImage: "url('/bg-pixel.svg')" }}
          className="bg-cover bg-center bg-no-repeat w-full flex flex-col items-center justify-center rounded-lg px-6 py-16 md:py-24 space-y-5 "
        >
          <h3 className="font-semibold text-black text-2xl sm:text-3xl md:text-4xl">
            We Provide the Following
          </h3>
          <h1 className="font-bold text-primary text-3xl sm:text-4xl md:text-5xl">
            Screen Displays
          </h1>
          <p className="text-para text-base sm:text-lg md:text-xl text-center">
            Commercial-grade signage with built-in software and full-service
            support.
          </p>

          <div className="space-y-8">
            {/* Main Display Section */}
            <div className="bg-accent p-6 rounded-md flex flex-col md:flex-row items-center gap-6">
              <Image
                src={active.image}
                alt={active.title}
                width={200}
                height={300}
                className="object-contain w-full max-w-md rounded-lg"
              />
              <div className="space-y-4">
                <h4 className="font-semibold text-black text-3xl sm:text-4xl">
                  {active.title}
                </h4>
                <p className="text-para">{active.description1}</p>
                <p className="text-para">{active.description2}</p>
              </div>
            </div>

            {/* Clickable Cards Section */}
            <div className="overflow-x-auto scrollbar-hide py-6">
              <div className="flex gap-6 px-4 md:px-0 items-center justify-start md:justify-center">
                {screensData.map((screen, index) => (
                  <div
                    key={index}
                    onClick={() => setActive(screen)}
                    className={`relative shrink-0 cursor-pointer transition-transform hover:scale-105 ${active.title === screen.title ? "shadow-lg" : ""
                      }`}
                  >
                    <Image
                      src={screen.image}
                      alt={screen.title}
                      width={180}
                      height={180}
                      className="z-10 rounded-t-lg"
                    />
                    <p className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 bg-white rounded-b-2xl px-4 py-3 shadow z-20 w-full font-medium text-center">
                      {screen.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* screen display section ends  */}

      {/* Preoject solution section Starts  */}
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-10 overflow-hidden">
        <div
          style={{ backgroundImage: "url('/project-bg.png')" }}
          className="bg-cover bg-center bg-no-repeat w-full flex flex-col items-center justify-center rounded-lg px-6 py-16 md:py-24 space-y-5 text-center"
        >
          <h3 className="font-semibold text-black text-2xl sm:text-3xl md:text-4xl">
            Perfect Solution
          </h3>
          <h1 className="font-bold text-primary text-3xl sm:text-4xl md:text-5xl">
            For Any Industry signage
          </h1>
          <p className="text-para text-base sm:text-lg md:text-xl text-center">
            Businesses from almost every imaginable sector are unlocking the power of C9 Lumina digital signage. 
          </p>
          <CardFadeOutSection />
        </div>
      </section>

      {/* Preoject solution section ends  */}

      {/* Easy to use section Starts  */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 p-4 mt-10">
        <div
          style={{ backgroundImage: "url('/bg1.svg')" }}
          className="bg-cover bg-center bg-no-repeat w-full flex flex-col md:flex-row gap-4 items-center justify-center rounded-lg px-6 md:px-16 py-8 md:py-10 space-y-5"
        >
          <div className=" flex-1 space-y-4">
            <div className=" ">
            <h3 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl my-3">
              <span className="text-primary">Easy to use </span> digital <br />{" "}
              signage software
            </h3>
            <p className="text-para text-base sm:text-lg md:text-xl">
              A cost-effective and professional cloud-based digital signage software that enables you to design, schedule, and send content to any screen.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-start w-full">
            <button className="px-6 py-3 text-white bg-primary rounded-lg text-base sm:text-lg font-semibold w-full sm:w-auto">
              Start FREE Trial
            </button>
            <button className="px-6 py-3 rounded-lg border border-primary text-black flex items-center justify-center gap-2 text-base sm:text-lg font-semibold w-full sm:w-auto">
              Suggest My Signage
            </button>
          </div>
          </div>

          <div className="flex-1 relative">
            <Image
              src="/iPad Mini.svg"
              alt="iPad"
              width={400}
              height={400}
              className="relative z-0 left-10"
            />
            <Image
              src="/icon-group.svg"
              alt="Overlay icons"
              width={400}
              height={400}
              className="absolute top-1/2  -translate-y-1/2 z-10"
            />
          </div>

        </div>
      </section>
      {/* Easy to use section ends  */}

      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-10">
        <div
          style={{ backgroundImage: "url('/bg-pixel.svg')" }}
          className="bg-cover bg-center bg-no-repeat w-full flex flex-col items-center justify-center rounded-lg px-6 py-16 md:py-24 space-y-5 text-center"
        >
          {/* Text Section */}
          <div className="max-w-4xl">
            <h3 className="font-semibold text-black text-2xl sm:text-3xl md:text-4xl">
              Transform Any Space With
            </h3>
            <h1 className="font-bold text-primary text-3xl sm:text-4xl md:text-5xl">
              Digital Signage
            </h1>
            <p className="text-para text-base sm:text-lg md:text-xl">
              Preloaded displays with built-in CMS just plug it in and start
              showcasing content.
            </p>
          </div>

          {/* Image/Preview Section */}
          <div className="border-8 border-white rounded-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-96 my-6 bg-gray-300 shadow-md"></div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button className="px-6 py-3 text-white bg-primary rounded-lg text-base sm:text-lg font-semibold w-full sm:w-auto">
              Start FREE Trial
            </button>
            <button className="px-6 py-3 rounded-lg border border-primary text-black flex items-center justify-center gap-2 text-base sm:text-lg font-semibold w-full sm:w-auto">
              Suggest My Signage
            </button>
          </div>

          <p className="text-temp font-semibold text-base">
            Powering Displays for Growing Businesses
          </p>
        </div>
      </section>

      {/* Portable Section Starts */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 p-4 mt-10">
        <div
          style={{ backgroundImage: "url('/bg1.svg')" }}
          className="bg-cover bg-center bg-no-repeat w-full flex flex-col items-center justify-center rounded-lg px-6 md:px-16 py-8 md:py-10 space-y-5"
        >
          {/* Text Section */}
          <div className="">
            <h3 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl my-3">
              <span className="text-primary"> Portable </span> Section <br />{" "}
              Will Go Here
            </h3>
            <p className="text-para text-base sm:text-lg md:text-xl">
              A cost-effective and professional cloud-based digital signage
              software that enables you to design, schedule, and send content to
              any screen.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-start w-full">
            <button className="px-6 py-3 text-white bg-primary rounded-lg text-base sm:text-lg font-semibold w-full sm:w-auto">
              Start FREE Trial
            </button>
            <button className="px-6 py-3 rounded-lg border border-primary text-black flex items-center justify-center gap-2 text-base sm:text-lg font-semibold w-full sm:w-auto">
              Suggest My Signage
            </button>
          </div>
        </div>
      </section>
      {/* Portable Section Ends */}

      {/* blog section starts */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 p-4 mt-10">
        <div className="flex flex-col items-center justfy-center gap-3">
          <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl font-bold">
            Digital Signage <span className="text-black">Blog</span>
          </h1>
          <p className="text-para text-base sm:text-lg md:text-xl text-center">
            Get insights and updates on digital signage best practices,
            technology, and success stories.
          </p>

          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center w-full">
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-[0px_6px_45.9px_0px_#D545422E]"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-5 flex flex-col grow">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm grow line-clamp-3">
                      {post.description}
                    </p>
                    <button className="group mt-4 self-start text-black font-bold flex items-center gap-2 cursor-pointer transition-colors">
                      Read More
                      <MoveRight
                        className="border border-primary rounded-full p-1 text-base transition-all duration-300 group-hover:bg-primary group-hover:text-white"
                        size={20}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* blog section ends  */}

      {/* Frequently Asked Question section starts */}
      <section className="max-w-7xl mx-auto flex flex-col items-center gap-10 px-4 sm:px-6 md:px-8 py-16 mt-10">
        {/* FAQ Wrapper */}
        <div className="bg-accent w-full rounded-2xl py-12 sm:py-16 px-4 sm:px-6">
          {/* Title */}
          <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-primary">Frequently Asked </span>
              <span className="text-black">Question</span>
            </h1>
            <p className="text-para text-sm sm:text-base md:text-lg">
              Get insights and updates on digital signage best practices,
              technology, and success stories.
            </p>
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl px-4 sm:px-6 py-4 transition-all duration-300 cursor-pointer shadow-[0_6px_45.9px_0_#D545422E] ${isOpen
                      ? "border border-primary"
                      : "border border-transparent"
                    }`}
                  onClick={() => toggle(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3
                      className={`font-semibold text-sm sm:text-base md:text-lg ${isOpen ? "text-primary" : "text-black"
                        }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    >
                      <ChevronDown
                        className={isOpen ? "text-primary" : "text-gray-600"}
                        size={20}
                      />
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mt-3 text-gray-600" : "max-h-0"
                      }`}
                  >
                    <p className="text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Frequently Asked Question section ends */}

      {/* Sync section Starts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16   ">
        <div
          style={{ backgroundImage: "url('/bg-sync.png')" }}
          className="bg-cover bg-center bg-no-repeat flex flex-col-reverse md:flex-row items-center justify-between px-6 py-4 md:py-8 gap-10  rounded-2xl"
        >
          {/* left  */}
          <div className="flex-1 text-white p-6 sm:p-8 md:p-12 flex flex-col items-start w-full text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamlessly sync your content playback
            </h2>
            <p className="text-sm md:text-base mb-6 text-white/90">
              Sync players playlists content playback has never been easier.
              Whether your players are in one location sharing one local network
              (wifi/wired) or if they are in different locations with 3G/4G
              internet connection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
              <button className="bg-white text-primary font-semibold px-6 py-2 rounded-lg transition-all hover:bg-gray-100">
                Start FREE Trial
              </button>
              <button className="border border-white text-white font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-primary transition-all">
                Suggest My Signage
              </button>
            </div>
          </div>

          {/* right  */}
          <div className="flex justify-center w-full md:w-1/2 flex-1 relative  md:self-start md:-mt-[50px]">
            <div className="relative w-[250px] sm:w-[300px] md:w-[400px]">
              <Image
                src="/mcrop2.png"
                alt="Digital Signage Display"
                width={400}
                height={400}
                className="object-contain  md:absolute -top-36 left-0"
              />
              <Image
                src="/mcrop1.png"
                alt="Digital Signage Display"
                width={200}
                height={200}
                className="object-contain  absolute -right-12  top-4"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Sync section ends */}

      <Footer />
    </div>
  );
}
