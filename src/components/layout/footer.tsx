import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="m-4 md:m-9">
          <h1 className="text-cyan-300 text-3xl">myPortfolio</h1>
          <p className="text-white max-w-xs text-justify mt-3">
            I&apos;m excited to take on new challenges and help brands stand out in the digital world! Let&apos;s collaborate to make your project a reality.
          </p>
        </div>
        
        {/* Column 2 */}
        <div className="m-4 md:m-9">
          <h1 className="text-cyan-300 mb-3">Quick Links</h1>
          <ul className="text-white space-y-2">
            <li>
              <Link href="/" className="hover:text-cyan-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cyan-300">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan-300">Contact</Link>
            </li>
          </ul>
        </div>
        
        {/* Empty Column (for balance or future use) */}
        <div className="m-4 md:m-9"></div>
      </div>
    </footer>
  );
}
