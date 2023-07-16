"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { RiSearchFill, RiSearchLine } from "react-icons/ri";
import { BsPlusSquareFill, BsPlusSquare } from "react-icons/bs";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 flex items-center justify-between p-2 border-b-2 border-b-gray-200">
      <Link href="/">
        <h1 className="text-xl font-bold min-[500px]:text-4xl sm:text-6xl logoFont">Nextagram</h1>
      </Link>
      <div className="flex items-center gap-x-3 sm:gap-x-6 min-[500px]:text-3xl sm:text-4xl">
        <Link href="/">{pathname === "/" ? <AiFillHome /> : <AiOutlineHome />}</Link>
        <Link href="/search">{pathname === "/search" ? <RiSearchFill /> : <RiSearchLine />}</Link>
        <Link href="/new">{pathname === "/new" ? <BsPlusSquareFill /> : <BsPlusSquare />}</Link>
        <button className="px-2 py-3 border-4 min-[500px]:text-xl sm:text-2xl rounded-xl ">Sign In</button>
      </div>
    </header>
  );
}
