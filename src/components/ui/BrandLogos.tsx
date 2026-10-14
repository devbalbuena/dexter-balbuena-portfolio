import * as React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

/* ==========================================================================
   TOOL BRAND LOGOS (High-definition official vector representations)
   ========================================================================== */

export function ExcelLogo({ size = 28, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="2" y="5" width="28" height="22" rx="3" fill="#107C41" />
      <path d="M18 5H28C29.1 5 30 5.9 30 7V25C30 26.1 29.1 27 28 27H18V5Z" fill="#185C37" />
      <path d="M18 10H27V12H18V10ZM18 14H27V16H18V14ZM18 18H27V20H18V18ZM18 22H27V24H18V22Z" fill="#33C481" opacity="0.8" />
      <rect x="2" y="8" width="16" height="16" rx="2" fill="#107C41" />
      <path
        d="M6.5 13L9.2 16L6.5 19H8.2L9.9 16.9L11.7 19H13.4L10.7 16L13.3 13H11.6L9.9 15.1L8.2 13H6.5Z"
        fill="white"
      />
    </svg>
  );
}

export function GoogleSheetsLogo({ size = 28, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M20 3H7C5.9 3 5 3.9 5 5V27C5 28.1 5.9 29 7 29H25C26.1 29 27 28.1 27 27V10L20 3Z" fill="#0F9D58" />
      <path d="M20 3V10H27L20 3Z" fill="#87CEAB" />
      <rect x="9" y="14" width="14" height="10" rx="1" fill="white" />
      <path d="M15 14V24M9 19H23" stroke="#0F9D58" strokeWidth="1.5" />
    </svg>
  );
}

export function NextjsLogo({ size = 28, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="16" cy="16" r="14" fill="#000000" />
      <path
        d="M23.5 24.5L12.5 10H10V22H12.5V13.8L21.8 25.8C22.4 25.4 23 25 23.5 24.5Z"
        fill="white"
      />
      <rect x="19.5" y="10" width="2.5" height="8" fill="white" />
    </svg>
  );
}

export function CanvaLogo({ size = 28, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="16" cy="16" r="14" fill="url(#canva-grad)" />
      <path
        d="M17.8 9.5C13.2 9.5 10.5 12.8 10.5 16.5C10.5 20.5 13.8 23 18.2 23C20.6 23 22.4 22.2 23.5 21.3L22.2 19.4C21.3 20.1 20 20.7 18.3 20.7C15.4 20.7 13.3 19 13.3 16.3C13.3 13.8 15 11.8 18 11.8C19.8 11.8 21.2 12.4 22.1 13.1L23.4 11.2C22.1 10.1 20.1 9.5 17.8 9.5Z"
        fill="white"
      />
      <defs>
        <linearGradient id="canva-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C4CC" />
          <stop offset="0.5" stopColor="#7D2AE8" />
          <stop offset="1" stopColor="#FF4A9A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PinterestLogo({ size = 28, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="16" cy="16" r="14" fill="#E60023" />
      <path
        d="M16 6C10.5 6 6 10.5 6 16C6 20.2 8.6 23.8 12.3 25.2C12.2 24.4 12.1 23.2 12.3 22.3L13.6 16.8C13.6 16.8 13.2 16 13.2 14.8C13.2 13 14.2 11.7 15.5 11.7C16.6 11.7 17.1 12.5 17.1 13.5C17.1 14.6 16.4 16.2 16 17.8C15.7 19.1 16.6 20.2 17.9 20.2C20.3 20.2 22.1 17.7 22.1 14.1C22.1 11 19.9 8.8 16.3 8.8C12.1 8.8 9.7 11.9 9.7 15.2C9.7 16.5 10.2 17.8 10.8 18.5C11 18.7 11 18.8 10.9 19.2L10.5 20.8C10.4 21.1 10.2 21.2 9.9 21.1C8 20.2 6.8 17.5 6.8 15.1C6.8 10.8 9.9 6.8 16.4 6.8C21.6 6.8 25.6 10.5 25.6 15C25.6 20.1 22.4 24.2 17.9 24.2C16.4 24.2 15 23.4 14.5 22.5L13.7 25.6C13.2 27.5 11.9 29.8 11.2 30.8C12.7 31.3 14.3 31.6 16 31.6C24.8 31.6 32 24.4 32 15.6C32 6.8 24.8 6 16 6Z"
        fill="white"
      />
    </svg>
  );
}

export function NotionLogo({ size = 28, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="26" height="26" rx="5" fill="#000000" />
      <path
        d="M8.5 7.5L20.8 6.5C22.5 6.3 23.2 7.1 23.5 8.7L25 21.7C25.2 23.3 24.5 24.5 22.8 24.7L10.5 25.7C8.8 25.9 8.1 25.1 7.8 23.5L6.3 10.5C6.1 8.9 6.8 7.7 8.5 7.5Z"
        fill="white"
      />
      <path
        d="M10.8 10.8L16.2 10.4L20.4 19L20.6 10L22.6 9.8L22.2 21.2L17.2 21.6L12.7 12.8L12.5 21.9L10.4 22L10.8 10.8Z"
        fill="#000000"
      />
    </svg>
  );
}

export function SemrushLogo({ size = 28, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="16" cy="16" r="14" fill="#FF642D" />
      <path
        d="M16 6C13.5 8.5 12 12 12.5 15C13 18 15 19.5 16.5 18C18 16.5 18 14 17 12.5C16 11 16 10 16 6ZM19 13C19 15.5 20.5 17.5 22.5 17C23.5 16.8 24 16 24 16C24 20.5 20.5 24 16 24C12 24 9 20.5 9 17C9 14.5 10.5 11 12 9.5C11.5 11 11 13 11.5 14.5C12 16 13.5 16.5 14 16C14.5 15.5 14.5 14 14 13C13.5 12 14 11 15 10C15 12 16.5 13.5 17.5 13.5C18.5 13.5 19 13 19 13Z"
        fill="white"
      />
    </svg>
  );
}

export function ShopifyLogo({ size = 28, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M24.7 9.3C24.6 9.1 24.3 9 24.1 9L21.3 8.7C21.2 8.7 21 8.5 20.9 8.3L19.4 5.3C19.1 4.7 18.5 4.3 17.8 4.4C17.6 4.4 17.5 4.5 17.3 4.6L16.2 5.5C16.1 5.6 15.9 5.6 15.8 5.6L14.7 4.7C14.2 4.3 13.5 4.3 13 4.7C12.9 4.8 12.7 5 12.6 5.2L11.1 8.2C11 8.4 10.8 8.6 10.6 8.6L7.8 8.9C7.2 9 6.7 9.4 6.5 10C6.4 10.2 6.4 10.4 6.5 10.6L10.3 25.1C10.5 25.7 11 26.2 11.7 26.2H20.2C20.8 26.2 21.4 25.8 21.6 25.1L25.4 10.6C25.6 10.1 25.3 9.6 24.7 9.3Z"
        fill="#95BF47"
      />
      <path
        d="M17.8 4.4C17.6 4.4 17.5 4.5 17.3 4.6L16.2 5.5C16.1 5.6 15.9 5.6 15.8 5.6L14.7 4.7C14.2 4.3 13.5 4.3 13 4.7C12.9 4.8 12.7 5 12.6 5.2L11.1 8.2C11 8.4 10.8 8.6 10.6 8.6L7.8 8.9C7.2 9 6.7 9.4 6.5 10C6.4 10.2 6.4 10.4 6.5 10.6L10.3 25.1C10.5 25.7 11 26.2 11.7 26.2H16V4.4H17.8Z"
        fill="#5E8E3E"
      />
      <path
        d="M18.8 13.7C17.7 13.4 17.1 13.2 17.1 12.6C17.1 12 17.6 11.6 18.5 11.6C19.3 11.6 20.1 11.9 20.8 12.4L21.4 10.8C20.6 10.3 19.5 10 18.3 10C16.2 10 14.8 11.2 14.8 13C14.8 14.8 16.3 15.4 17.9 15.9C19.1 16.3 19.7 16.6 19.7 17.3C19.7 18 19 18.5 18 18.5C16.9 18.5 15.8 18 15 17.3L14.3 19C15.3 19.8 16.7 20.2 18.1 20.2C20.4 20.2 22 19.1 22 17.1C22 15.1 20.4 14.2 18.8 13.7Z"
        fill="white"
      />
    </svg>
  );
}

/* ==========================================================================
   CERTIFICATE ISSUER LOGOS (High-definition official vector representations)
   ========================================================================== */

export function MicrosoftLogo({ size = 22, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" />
      <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" />
      <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
      <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
    </svg>
  );
}

export function GoogleLogo({ size = 22, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M22.5 12.3C22.5 11.5 22.4 10.7 22.3 10H12V14.3H17.9C17.6 15.7 16.8 16.9 15.6 17.7V20.5H19.2C21.3 18.6 22.5 15.7 22.5 12.3Z"
        fill="#4285F4"
      />
      <path
        d="M12 23C15 23 17.5 22 19.2 20.5L15.6 17.7C14.6 18.4 13.4 18.8 12 18.8C9.1 18.8 6.7 16.9 5.8 14.2H2.1V17.1C3.9 20.6 7.7 23 12 23Z"
        fill="#34A853"
      />
      <path
        d="M5.8 14.2C5.6 13.4 5.5 12.7 5.5 12C5.5 11.3 5.6 10.6 5.8 9.8V6.9H2.1C1.3 8.5 0.9 10.2 0.9 12C0.9 13.8 1.3 15.5 2.1 17.1L5.8 14.2Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.2C13.6 5.2 15.1 5.8 16.2 6.8L19.3 3.7C17.5 2 15 0.9 12 0.9C7.7 0.9 3.9 3.4 2.1 6.9L5.8 9.8C6.7 7.1 9.1 5.2 12 5.2Z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function HubSpotLogo({ size = 22, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="#FF7A59" />
      <path
        d="M16.5 11.2V9.8C17.1 9.5 17.5 8.9 17.5 8.2C17.5 7.2 16.7 6.4 15.7 6.4C14.7 6.4 13.9 7.2 13.9 8.2C13.9 8.9 14.3 9.5 14.9 9.8V11.2C14.4 11.4 13.9 11.8 13.6 12.3L10.3 10C10.4 9.7 10.4 9.4 10.4 9.1C10.4 7.6 9.2 6.4 7.7 6.4C6.2 6.4 5 7.6 5 9.1C5 10.6 6.2 11.8 7.7 11.8C8.2 11.8 8.6 11.7 9 11.4L12.2 13.8C12.1 14.1 12 14.4 12 14.8C12 16.7 13.5 18.2 15.4 18.2C17.3 18.2 18.8 16.7 18.8 14.8C18.8 13.1 17.7 11.6 16.5 11.2ZM15.4 16.4C14.5 16.4 13.8 15.7 13.8 14.8C13.8 13.9 14.5 13.2 15.4 13.2C16.3 13.2 17 13.9 17 14.8C17 15.7 16.3 16.4 15.4 16.4Z"
        fill="white"
      />
    </svg>
  );
}

/**
 * Universal Issuer Logo selector
 * Matches issuer strings and renders the authentic brand SVG logo
 */
export function IssuerLogo({ 
  issuer, 
  size = 22, 
  className 
}: { 
  issuer: string; 
  size?: number; 
  className?: string; 
}) {
  const norm = issuer.toLowerCase();

  if (norm.includes("microsoft")) {
    return <MicrosoftLogo size={size} className={className} />;
  }
  if (norm.includes("google")) {
    return <GoogleLogo size={size} className={className} />;
  }
  if (norm.includes("hubspot")) {
    return <HubSpotLogo size={size} className={className} />;
  }
  if (norm.includes("semrush")) {
    return <SemrushLogo size={size} className={className} />;
  }

  // Fallback generic badge
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#8c532b] text-white text-xs font-bold">
      {issuer.slice(0, 1)}
    </span>
  );
}
