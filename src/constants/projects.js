import {
  SiFirebase,
  SiFlask,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiPytorch,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const ICON_SIZE = 24;
const TECH_STACK_KYOTO_NET = [
  {
    label: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    label: "Javascript",
    icon: <SiJavascript size={ICON_SIZE} color="#FDDC01" />,
  },
  {
    label: "Tailwind CSS",
    icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  },
];
const PROJECTCARD_CONTENTS = [
  {
    url: "https://nextjs14-kyoto-net.vercel.app/",
    name: "Kyoto.NET",
    description:
      "Developed a comprehensive Anime List website utilizing Next.js and Tailwind CSS, integrated with the Jikan API to provide detailed information on a vast array of anime titles.",
    techStack: TECH_STACK_KYOTO_NET,
    image: "/projects/kyoto.png",
    imageAlt: "Kyoto.net Website Screenshot",
  },
];

export { PROJECTCARD_CONTENTS, TECH_STACK_KYOTO_NET };
