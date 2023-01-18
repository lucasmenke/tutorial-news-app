import { categories } from "../constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

export default function NavLinks() {
  return (
    <nav>
      {categories.map((category) => (
        <NavLink key={category} category={category} isActive={true} />
      ))}
    </nav>
  );
}
