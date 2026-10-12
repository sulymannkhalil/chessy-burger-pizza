import Image from "next/image";
import type { MediaAsset } from "@/types";
import { cn } from "@/lib/cn";
import { getAspectClass } from "@/lib/media";

type MediaPlaceholderProps = MediaAsset & {
  className?: string;
  priority?: boolean;
  rounded?: "none" | "lg" | "xl" | "2xl" | "full";
  fill?: boolean;
  objectFit?: "cover" | "contain";
};

const radiusMap = {
  none: "rounded-none",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
} as const;

export function MediaPlaceholder({
  src,
  alt,
  label,
  aspectRatio = "1/1",
  kind = "image",
  className,
  priority = false,
  rounded = "2xl",
  fill = false,
  objectFit = "cover",
}: MediaPlaceholderProps) {
  const shell = cn(
    "relative overflow-hidden border border-brand-dark/10 bg-gradient-to-br from-brand-primary/35 via-brand-supporting to-brand-secondary/25",
    radiusMap[rounded],
    !fill && getAspectClass(aspectRatio),
    fill && "h-full w-full",
    className,
  );

  if (src) {
    return (
      <div className={shell}>
        {kind === "video" ? (
          <video
            className="h-full w-full object-cover"
            src={src}
            controls
            playsInline
            preload="metadata"
          >
            <track kind="captions" />
          </video>
        ) : (
          <Image
            src={src}
            alt={alt ?? label}
            fill
            priority={priority}
            className={objectFit === "contain" ? "object-contain" : "object-cover"}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>
    );
  }

  return (
    <div className={shell} role="img" aria-label={label}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,201,40,0.45),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(216,59,50,0.28),transparent_40%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(135deg,transparent_25%,rgba(36,32,30,0.08)_25%,rgba(36,32,30,0.08)_50%,transparent_50%,transparent_75%,rgba(36,32,30,0.08)_75%)] [background-size:18px_18px]" />
      <div className="relative z-10 flex h-full min-h-[8rem] items-center justify-center p-4 text-center">
        <span className="max-w-[14rem] rounded-full bg-brand-dark/85 px-4 py-2 font-body text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white sm:text-xs">
          {label}
        </span>
      </div>
    </div>
  );
}
