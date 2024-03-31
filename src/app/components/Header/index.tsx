// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            {/* Assuming your logo is in the public folder */}
            <Image src="/logo.png" width={40} height={40} alt="Figflix Logo" />
            <span className="text-white text-lg ml-2">Figflix</span>
          </a>
        </Link>
        <div className="flex items-center">
          <select className="text-white bg-black border border-gray-700 py-2 px-4 mr-4">
            <option className="text-black">English</option>
            {/* other options */}
          </select>
          <button className="text-white border border-gray-700 py-2 px-4 flex items-center">
            <span>Sign in</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
