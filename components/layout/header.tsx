import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center pt-5 py-5 min-h-5 text-onSecondary text-3xl ">
      <div className="absolute ml-5">
        <Link href="/">
          <a>🏡</a>
        </Link>
      </div>
      <span className="mx-auto">Welcome to pijourney</span>
    </header>
  );
};
