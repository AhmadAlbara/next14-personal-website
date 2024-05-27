import {
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const ICON_SIZE = 20;

const CONTACT_ITEMS = [
  {
    icon: <FiGithub size={ICON_SIZE} />,
    url: "https://github.com/AhmadAlbara",
    label: "GitHub",
    backgroundColor: "#262626",
  },
  {
    icon: <FiLinkedin size={ICON_SIZE} />,
    url: "https://www.linkedin.com/in/ahmad-albara-a359202ab/",
    label: "LinkedIn",
    backgroundColor: "#0A66C2",
  },
  {
    icon: <FiInstagram size={ICON_SIZE} />,
    url: "https://www.instagram.com/ahmdalbrr_/ ",
    label: "Instagram",
    backgroundColor: "linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)",
  },
  {
    icon: <FiTwitter size={ICON_SIZE} />,
    url: "https://x.com/ahmdalbrr_",
    label: "Twitter",
    backgroundColor: "#262626",
  },
  {
    icon: <FiYoutube size={ICON_SIZE} />,
    url: "https://www.youtube.com/channel/UCmdyTC294E4JiMGowDPrQWw",
    label: "Youtube",
    backgroundColor: "#c4302b",
  },
];

export { CONTACT_ITEMS };
