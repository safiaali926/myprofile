import Link from "next/link"
export default function Footer() {
    return (
<footer className="bg-gray-900 ">
<div className="grid grid-cols-3">
<div className="m-9">
<h1 className="text-cyan-300 text-3xl">  myPortfolio  </h1>
<p className="text-white max-w-xs text-justify mt-3">I'm excited to take on new challenges and help brands stand out in the digital world! Let's collaborate to make your project a reality.</p>
</div>
<div>
    <h1 className="text-cyan-300 m-9">Quick Links</h1>
<ul className="text-white m-9 ">
    <li><Link href="/" className="hover:text-cyan-300">Home</Link></li>
    <li><Link href="/about" className="hover:text-cyan-300">About</Link></li>
    <li><Link href="/contact" className="hover:text-cyan-300">Contact</Link></li>

</ul>
</div>
<div></div>



</div>


</footer>
    )}