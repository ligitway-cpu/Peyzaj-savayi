import { HTMLAttributes, CSSProperties } from "react";

interface PictureProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchpriority?: "high" | "low" | "auto";
  style?: CSSProperties;
}

export default function Picture({
  src,
  alt,
  className = "w-full h-full object-cover",
  loading = "lazy",
  fetchpriority,
  ...props
}: PictureProps) {
  const isUnsplash = src.includes("unsplash.com");
  
  // Format Unsplash source URLs for optimal delivery (WebP vs JPEG fallback)
  let webpSrcSet = src;
  let fallbackSrc = src;

  if (isUnsplash) {
    try {
      const url = new URL(src);
      // Construct WebP version query parameters
      const webpParams = new URLSearchParams(url.search);
      webpParams.set("fm", "webp");
      webpParams.set("q", "80");
      webpSrcSet = `${url.origin}${url.pathname}?${webpParams.toString()}`;

      // Construct JPEG fallback version query parameters
      const jpgParams = new URLSearchParams(url.search);
      jpgParams.set("fm", "jpg");
      jpgParams.set("q", "80");
      fallbackSrc = `${url.origin}${url.pathname}?${jpgParams.toString()}`;
    } catch {
      // Fallback in case of invalid URL
      webpSrcSet = src + "&fm=webp";
      fallbackSrc = src;
    }
  }

  return (
    <picture className="block w-full h-full">
      {isUnsplash && <source srcSet={webpSrcSet} type="image/webp" />}
      <img
        src={fallbackSrc}
        alt={alt}
        loading={loading}
        // @ts-ignore
        fetchpriority={fetchpriority}
        className={className}
        referrerPolicy="no-referrer"
        {...props}
      />
    </picture>
  );
}
