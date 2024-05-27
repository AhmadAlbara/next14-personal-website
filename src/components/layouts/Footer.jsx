import BreakLine from "../elements/BreakLine";

const Footer = () => {
  return (
    <footer className="mb-[104px] px-8 md:mb-6">
      <BreakLine />
      <p className="mt-8 text-sm text-center">
        copyright &copy; Ahmad Albara {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
