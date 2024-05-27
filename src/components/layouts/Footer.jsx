import { FOOTER_ITEMS } from "@/constants/footer";
import BreakLine from "../elements/BreakLine";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mb-[104px] px-8 md:mb-6">
      <BreakLine />
      <p className="mb-4 text-sm font-medium text-center md:text-xl">
        Reach me out{" "}
        <span className="inline-block ml-1 animate-waving-hand">🙌</span>
      </p>
      <ul className="flex justify-center gap-4">
        {FOOTER_ITEMS.map(({ icon, href, ariaLabel, target, rel }, index) => (
          <li key={index}>
            <Link
              href={href}
              aria-label={ariaLabel}
              target={target}
              rel={rel}
              className={`${target === "_blank" && "cursor-pointer"}`}
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-center">
        copyright &copy; Ahmad Albara {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
