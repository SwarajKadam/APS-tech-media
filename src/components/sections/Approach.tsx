"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../components/shared/canvas-reveal-effect";

export function Approach() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-5xl text-center font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-fade-in">
          Our Process
        </h2>

        <div className="py-20  flex  flex-col lg:flex-row items-center justify-center bg-black dark:bg-black w-full gap-4 mx-auto px-8 animate-fade-in">
          <Card
            title="Discovery & Planning"
            icon={<AceternityIcon order="Phase 1" />}
            description="We offer a comprehensive Discovery and Planning phase to set the foundation for your project. During this phase, we thoroughly analyze your requirements, understand your goals, and identify challenges and opportunities. Based on this analysis, we create a detailed roadmap that outlines the project's objectives, key milestones, and deliverables, ensuring a clear and structured path to success."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-yellow-600"
              colors={[[253, 224, 71]]}
            />
          </Card>

          <Card
            title="Design & Development"
            icon={<AceternityIcon order="Phase 2" />}
            description="In the Design and Development phase, our team transforms your vision into reality using cutting-edge technology and innovative design. We focus on creating visually stunning, user-friendly interfaces while ensuring the development process adheres to the highest standards. From wireframes and prototypes to fully functional solutions, we seamlessly integrate aesthetics and functionality to deliver a product that exceeds expectations."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-600"
            />
          </Card>

          <Card
            title="Testing & Quality Assurance"
            icon={<AceternityIcon order="Phase 3" />}
            description="In the Testing and Quality Assurance phase, we conduct rigorous evaluations to ensure the final product is flawless and performs seamlessly. Our process includes functional testing, performance assessments, security checks, and user experience validation to identify and resolve any issues. By maintaining strict quality standards, we guarantee a reliable, efficient, and user-friendly solution that meets your expectations."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>

          <Card
            title="Deployment & Support"
            icon={<AceternityIcon order="Phase 4" />}
            description="In the Deployment and Support phase, we ensure a smooth and seamless launch of your product. Our team handles every aspect of deployment, from setting up the infrastructure to configuring all necessary components. After deployment, we provide ongoing support and maintenance to address any issues, implement updates, and ensure optimal performance, giving you peace of mind as your product evolves."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-pink-600"
              colors={[[249, 168, 212]]}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border  group/canvas-card flex items-center justify-center border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] lg:h-[35rem] rounded-3xl"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute inset-0 flex items-center justify-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto">
          {icon}
        </div>

        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="text-sm dark:text-white  opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center style={{color:#e4ecff}}">
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      {" "}
      {/* Full width and height for centering */}
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
