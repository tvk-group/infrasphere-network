import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-energy-blue text-white hover:bg-[#1559b8] border border-energy-blue",
  secondary:
    "bg-navy text-white hover:bg-navy-light border border-navy",
  outline:
    "bg-transparent text-navy border border-navy/30 hover:border-energy-blue hover:text-energy-blue",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
