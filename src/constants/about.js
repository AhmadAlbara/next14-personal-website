import {
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
} from "react-icons/si";

const ABOUT_TEXTS = [
  {
    text: "Hi! I'm Ahmad. I began learning web development during my time in vocational high school (SMK). With a keen interest in technology, I started my journey by exploring web development forums. To deepen my knowledge, I watched various YouTube videos, focusing on both frontend and backend development.",
  },
  {
    text: "I am enthusiastic about broadening my expertise in both frontend and backend development, as there are numerous technologies and concepts to explore. I derive immense satisfaction from learning new information and techniques, and I am driven to continuously expand my skills. Constructive feedback is invaluable to me, as it aids in honing my abilities and improving my overall proficiency.",
  },
  {
    text: "This website serves as a platform for me to express my thoughts and exhibit the projects I've been involved in. I strongly believe in the value of documenting my learning process, not only to reinforce my own understanding but also to share insights with others. Don't hesitate to get in touch I'm here to provide assistance and support !",
  },
];

const FAVORITE_STACKS = [
  {
    icon: <SiJavascript color="#FDDC01" />,
    name: "Javascript",
  },
  {
    icon: <SiLaravel color="#fb503b" />,
    name: "Laravel",
  },
  {
    icon: <SiTailwindcss color="#38BDF8" />,
    name: "Tailwind",
  },
  { icon: <SiReact color="#149FCB" />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiNodedotjs color="#418A3F" />, name: "Node.js" },
];

export { ABOUT_TEXTS, FAVORITE_STACKS };
