import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-[100px] mb-[40px] h-16 text-center">
      <p className="my-[5px]">
        Copyright &copy; DJ Events {new Date().getFullYear()}
      </p>
      <p className="my-[5px]">
        <Link href="/about">About</Link>
      </p>
    </footer>
  );
};

export default Footer;
