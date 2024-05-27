import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const ICON_SIZE = 24;

const FOOTER_ITEMS = [
  {
    icon: <FiMail size={ICON_SIZE} />,
    href: "/contact",
    ariaLabel: "Send me an email",
    target: "",
    rel: "",
  },
  {
    icon: <FiLinkedin size={ICON_SIZE} />,
    href: "https://www.linkedin.com/in/ahmad-albara-a359202ab/",
    ariaLabel: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    icon: <FiGithub size={ICON_SIZE} />,
    href: "https://github.com/AhmadAlbara",
    ariaLabel: "GitHub",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export { FOOTER_ITEMS };
