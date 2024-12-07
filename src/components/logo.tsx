import Link from "next/link";

export const CompanyLogo = () => {
  return (
    <Link href="/" className="flex flex-col items-end">
      <span className="uppercase font-bold text-3xl -mb-1.5 text-foreground">
        Popken.
      </span>
      <span className="text-primary text-sm mr-3">Web Solutions</span>
    </Link>
  );
};
