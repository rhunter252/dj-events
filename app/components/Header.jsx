import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white text-black h-16 px-16 shadow-md">
      <div>
        <Link href="/" className="text-red-500 text-lg font-bold uppercase">
          DJ Events
        </Link>
      </div>

      <nav>
        <ul className="flex items-center justify-center list-none">
          <li>
            <Link href="/events">Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
