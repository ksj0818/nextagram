"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ColorBtn from "./ui/common/ColorBtn";
import HomeIcon from "./ui/icons/header/HomeIcon";
import HomeFill from "./ui/icons/header/HomeFill";
import SearchIcon from "./ui/icons/header/SearchIcon";
import SearchFill from "./ui/icons/header/SearchFill";
import PlusIcon from "./ui/icons/header/PlusIcon";
import PlsuFill from "./ui/icons/header/PlsuFill";

const menu = [
  {
    url: "/",
    icon: <HomeIcon />,
    clicked: <HomeFill />,
  },
  {
    url: "/search",
    icon: <SearchIcon />,
    clicked: <SearchFill />,
  },
  {
    url: "/new",
    icon: <PlusIcon />,
    clicked: <PlsuFill />,
  },
];

export default function Header() {
  const pathName = usePathname();
  return (
    <div className="flex items-center justify-between p-2 ">
      <Link href="/">
        <h1 className="text-xl font-bold min-[500px]:text-4xl sm:text-6xl logoFont">Nextagram</h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-4">
          {menu.map((item) => (
            <li key={item.url}>
              <Link className="min-[499px]:text-2xl" href={item.url}>
                {pathName === item.url ? item.clicked : item.icon}
              </Link>
            </li>
          ))}
          <ColorBtn text="Sign in" onClick={() => {}} />
        </ul>
      </nav>
    </div>
  );
}
