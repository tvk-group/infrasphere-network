import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
  className?: string;
}

export function Logo({ variant = "dark", showText = true, className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 shrink-0 ${className}`}>
      <Image
        src="/logo-mark.svg"
        alt=""
        width={36}
        height={36}
        className="w-9 h-9"
        priority
      />
      {showText && (
        <div className="hidden sm:block">
          <span
            className={`font-semibold text-sm tracking-wide ${
              variant === "light" ? "text-white" : "text-navy"
            }`}
          >
            InfraSphere
          </span>
          <span
            className={`text-xs block -mt-0.5 ${
              variant === "light" ? "text-steel-light" : "text-steel"
            }`}
          >
            Network
          </span>
        </div>
      )}
    </Link>
  );
}
