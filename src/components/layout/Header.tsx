import Link from "next/link";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  

export default function Header() {
    return (
        <header className="bg-cyan-300 flex justify-between py-4 px-4 justify-around max-w-screen-2xl mx-auto">
            <div className="text-cyan-900 text-3xl font-bold">
                myPortfolio
            </div>
            <ul className="hidden md:block">
        <li className="space-x-5 py-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <ul className="">
            <li className="text-cyan-900 text-2xl py-6">myPortfolio</li>
                <li><Link href="/" >Home</Link></li>
               <li ><Link href="/about" >About</Link></li>
               <li> <Link href="/contact" >Contact</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    

        </header>
    )}
