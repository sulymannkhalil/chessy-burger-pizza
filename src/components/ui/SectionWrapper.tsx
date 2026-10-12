import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: ElementType;
  tight?: boolean;
};

export function SectionWrapper({
  id,
  children,
  className,
  as: Tag = "section",
  tight = false,
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative scroll-mt-24",
        tight
          ? "py-[clamp(3rem,6vw,5rem)]"
          : "py-[clamp(4rem,8vw,7.5rem)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
