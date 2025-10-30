/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Image from "next/image";
import {
	Building2,
	Store,
	UtensilsCrossed,
	GraduationCap,
	Hospital,
	Home,
} from "lucide-react";

export default function CardFadeOutSection() {
	const [activeIndex, setActiveIndex] = useState(2);

	const cards = [
		{
			title: "Retail Store ",
			icon: <Store size={50} />,
			color: "#f6dad9",
			img: "/1.png",
			boxes: [
				"Attracts customers with vibrant visual displays",
				"Enhances brand visibility and recognition",
				"Promotes sales, discounts, and new arrivals instantly",
			],
		},
		{
			title: "Corporate",
			icon: <Building2 size={50} />,
			color: "#f7dde9",
			img: "/2.png",
			boxes: [
				"Improves professional presentation quality",
				"Strengthens corporate branding and identity",
				"Enhances communication during meetings and events",
			],
		},
		{
			title: "Restaurant",
			icon: <UtensilsCrossed size={50} />,
			color: "#d44360",
			img: "/3.png",
			boxes: [
				"Enhances customer ordering experience",
				"Reduces wait times with self-service options",
				"Improves order accuracy and efficiency",
			],
		},
		{
			title: "Education",
			icon: <GraduationCap size={50} />,
			color: "#dddddd",
			img: "/4.png",
			boxes: [
				"Facilitates interactive and engaging lessons",
				"Supports multimedia teaching methods",
				"Improves student attention and learning retention",
			],
		},
		{
			title: "Healthcare",
			icon: <Hospital size={50} />,
			color: "#f7dad9",
			img: "/5.png",
			boxes: [
				"Enhances patient communication and education",
				"Provides clear wayfinding and navigation assistance",
				"Supports staff training with visual materials",
			],
		},
		{
			title: "Real Estate",
			icon: <Home size={50} />,
			color: "#f6d6e5",
			img: "/6.png",
			boxes: [
				"Showcases property listings with high-quality visuals",
				"Enhances customer engagement during presentations",
				"Promotes new developments and projects dynamically",
			],
		},
	];

	const handleClick = (index) => {
		setActiveIndex(activeIndex === index ? -1 : index);
	};

	return (
		<section className="min-h-[140vh] h-full flex flex-col items-center justify-center  overflow-hidden relative">
			<div className="relative flex flex-col items-center w-full">
				{/* Card Container */}
				<div
					className="flex justify-center items-end gap-6 md:gap-10 transition-transform duration-800 ease-in-out relative z-1 overflow-x-auto md:overflow-visible px-4 md:px-0 w-full scrollbar-hide snap-x snap-mandatory"
					style={{
						transform:
							activeIndex !== -1 && window.innerWidth >= 768
								? `translateX(${(activeIndex - 2.5) * -240}px)`
								: "translateX(0)",
					}}
				>
					{cards.map((card, index) => (
						<div
							key={index}
							className={`relative w-[180px] h-60 md:w-[220px] md:h-[280px] shrink-0 snap-center rounded-3xl text-center cursor-pointer overflow-hidden flex flex-col items-center justify-center transition-all duration-500 ${
								activeIndex === index ? "scale-105 shadow-2xl" : ""
							}`}
							style={{ background: card.color, color: "#fff" }}
							onClick={() => handleClick(index)}
						>
							<div className="relative z-3 -mt-[100px] md:-mt-[120px] flex flex-col items-center">
								<span className="mb-4 text-white">{card.icon}</span>
								<h3 className="text-base md:text-lg font-semibold text-white">
									{card.title}
								</h3>
							</div>

							{/* Fade overlay */}
							<div className="absolute bottom-0 left-0 w-full h-[70%] bg-linear-to-b from-transparent to-[#fff6f3] z-2" />
						</div>
					))}
				</div>

				{/* Fade Rect */}
				<div
					className={`hidden md:block absolute top-[70%] left-0 w-full h-[200px] bg-linear-to-b from-transparent to-[#fff6f3] z-2 transition-opacity duration-700 ${
						activeIndex !== -1 ? "opacity-100" : "opacity-0"
					}`}
				/>

				{/* Image Overlay */}
				{activeIndex !== -1 && (
					<div className="flex justify-center w-full mt-8 md:mt-0 md:absolute md:top-[40%] md:left-[35%] md:-translate-x-1/2 opacity-100 transition-opacity duration-1000 z-3 max-w-[90%] md:max-w-[800px]">
						<Image
							src={cards[activeIndex].img}
							alt="Card Image"
							width={800}
							height={600}
							className="rounded-2xl animate-fadeIn object-contain"
						/>
					</div>
				)}

				{/* Info Boxes */}
				<div
					className={`flex flex-col items-start gap-4 mt-8 md:mt-0 z-4 transition-all duration-700 md:absolute md:top-[115%] md:left-[60%] md:-translate-x-1/2 ${
						activeIndex !== -1 ? "opacity-100" : "opacity-0"
					}`}
				>
					{activeIndex !== -1 &&
						cards[activeIndex].boxes.map((text, i) => (
							<div
								key={i}
								className="bg-white rounded-xl px-4 py-3 md:px-5 shadow-md flex items-center gap-3 text-gray-800 text-sm md:text-[15px] font-medium transform translate-x-10 opacity-0 animate-fadeInBox"
								style={{ animationDelay: `${i * 0.2}s` }}
							>
								<img
									src={"/check.png"}
									alt="check"
									className="rounded-full w-5 h-5 object-contain"
								/>
								{text}
							</div>
						))}
				</div>
			</div>

			{/* Animations */}
			<style jsx>{`
				@keyframes fadeIn {
					0% {
						opacity: 0;
						transform: translateY(30px);
					}
					100% {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.animate-fadeIn {
					animation: fadeIn 1.2s ease-in-out forwards;
				}

				@keyframes fadeInBox {
					0% {
						opacity: 0;
						transform: translateX(40px);
					}
					100% {
						opacity: 1;
						transform: translateX(0);
					}
				}

				.animate-fadeInBox {
					animation: fadeInBox 0.5s ease forwards;
				}
			`}</style>
		</section>
	);
}
