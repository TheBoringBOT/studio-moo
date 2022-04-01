import Link from "next/link";
import ThemeToggle from "../layout/theme-toggle";

export default function Header({}) {
  return (
    <div className="flex justify-between align-center items-center leading-tight mb-20 mt-8">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter ">
        <Link href="/blogg">
          <a className="hover:underline">
            {" "}
            {"< "}
            tillbaka
          </a>
        </Link>
      </h2>
      <ThemeToggle iconWidth={30} />
    </div>
  );
}
