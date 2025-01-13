import { PortfolioProject } from "./types";
import techyguru_img from "../assets/techyguru.jpg";
import astromanvi_img from "../assets/astromanvi.jpg";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "techyguru",
    title: "Techyguru Academy Website",
    imageUrl: techyguru_img,
    client: "Techyguru Academy",
    location: "Pune",
    category: "web-development",
    objective:
      "To establish Techyguru Academy's online presence and provide an informative and user-friendly platform for students to explore available courses and enroll seamlessly.",
    overview:
      "We designed and developed a dynamic website for Techyguru Academy aimed at showcasing their courses and expertise in training. The website serves as a central hub for students to learn about various programs, access resources, and stay updated on the latest announcements.",
    keyResults: [
      {
        title: "Enhanced Online Visibility",
        points: [
          "The website attracted a significant increase in traffic within the first month of launch, showcasing its effectiveness in reaching a wider audience.",
        ],
      },
      {
        title: "Improved User Engagement",
        points: [
          "Features like an intuitive navigation system and easy course enrollment led to a 40% increase in user engagement compared to previous platforms.",
        ],
      },
      {
        title: "Streamlined Operations",
        points: [
          "Automation of course inquiries and enrollment reduced manual efforts, allowing the academy to focus more on delivering quality education.",
        ],
      },
    ],
    approach: [
      {
        title: "Responsive Design",
        description:
          "Created a responsive and visually appealing website to ensure seamless access across devices.",
      },
      {
        title: "Course Management Integration",
        description:
          "Developed a dedicated section for courses with detailed descriptions, enabling users to understand offerings better and enroll directly.",
      },
      {
        title: "SEO Optimization",
        description:
          "Optimized the website for search engines to improve visibility and attract organic traffic.",
      },
    ],
    outcome: {
      summary:
        "The newly launched website effectively established Techyguru Academy's digital presence. The result was a significant boost in online visibility, improved user engagement, and streamlined operations, positioning the academy as a go-to platform for learning and development.",
    },
    thumbnailUrl: "/api/placeholder/400/320",
    link: "https://techyguruacademy.com/",
  },

  {
    id: "astromanvi",
    title: "AstroManvi Website",
    imageUrl: astromanvi_img,
    client: "AstroManvi",
    location: "Pune",
    category: "web-development",
    objective:
      "To establish AstroManvi's digital presence with an engaging and intuitive astrology website, providing users with access to personalized astrology services and insightful content.",
    overview:
      "We developed a modern and user-friendly website for AstroManvi to enhance their online visibility. The platform allows users to explore astrology services, book consultations, and read informative articles tailored to their astrological interests.",
    keyResults: [
      {
        title: "Website Ready for Launch",
        points: [
          "The website has been fully developed with an intuitive user interface and interactive features.",
        ],
      },
      {
        title: "Integrated Core Functionalities",
        points: [
          "Booking systems for personalized consultations have been successfully implemented.",
        ],
      },
      {
        title: "Optimized for Future Growth",
        points: [
          "SEO strategies and engaging content have been added to ensure visibility once the website goes live.",
        ],
      },
    ],
    approach: [
      {
        title: "Interactive Website Design",
        description:
          "Designed an intuitive website with elements like horoscope tools, ensuring a seamless user experience.",
      },
      {
        title: "Service Integration",
        description: "Call of action for personalized astrology consultations.",
      },
      {
        title: "SEO and Content Strategy",
        description:
          "Optimized the website for search engines and added engaging content to attract organic traffic.",
      },
    ],
    outcome: {
      summary:
        "The website for AstroManvi is ready for launch, providing an engaging and seamless platform for astrology enthusiasts. With all core features integrated and optimized, it is positioned to attract users and establish a strong online presence upon going live.",
    },
    thumbnailUrl: "/api/placeholder/400/320",
    link: "https://astromanvi.vercel.app/",
  },
  
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "marketing", label: "Marketing" },
  { id: "web-development", label: "Web Development" },
  { id: "ai-solutions", label: "AI Solutions" },
];
