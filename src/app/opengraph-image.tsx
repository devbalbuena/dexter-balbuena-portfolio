import { ImageResponse } from "next/og";

export const alt = "Dexter E. Balbuena | E-Commerce & Administrative Virtual Assistant";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#faf6f0",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #ebdccb 2%, transparent 0%), radial-gradient(circle at 75px 75px, #ebdccb 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              borderRadius: "999px",
              border: "1px solid #e8ded3",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
              }}
            />
            <span style={{ fontSize: "18px", fontWeight: 700, color: "#1c1917" }}>
              Dexter E. Balbuena
            </span>
            <span style={{ fontSize: "16px", color: "#78716c" }}>• Butuan City, PH</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#f5ece1",
              padding: "8px 18px",
              borderRadius: "12px",
              border: "1px solid #ebdccb",
              color: "#8c532b",
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "monospace",
            }}
          >
            11 PM – 6 AM PHT • US / UK / AU Overlap
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#1c1917",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              maxWidth: "1050px",
            }}
          >
            E-Commerce &amp; Administrative VA with Technical Precision.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#57534e",
              lineHeight: 1.4,
              maxWidth: "960px",
            }}
          >
            Autonomous operations: Amazon &amp; Shopify product research, dynamic Excel &amp; Access database architecture, 39.5K+ Pinterest impressions, and listing QA without babysitting.
          </div>
        </div>

        {/* Bottom Verified Proof Badges */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#ffffff",
              padding: "16px 24px",
              borderRadius: "16px",
              border: "1px solid #e8ded3",
              flex: 1,
            }}
          >
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#8c532b" }}>39.5K+</span>
            <span style={{ fontSize: "14px", fontWeight: 600, color: "#78716c" }}>Pinterest Views &amp; SEO</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#ffffff",
              padding: "16px 24px",
              borderRadius: "16px",
              border: "1px solid #e8ded3",
              flex: 1,
            }}
          >
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#1c1917" }}>MOS Expert</span>
            <span style={{ fontSize: "14px", fontWeight: 600, color: "#78716c" }}>Microsoft Access &amp; Excel</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#ffffff",
              padding: "16px 24px",
              borderRadius: "16px",
              border: "1px solid #e8ded3",
              flex: 1,
            }}
          >
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#1c1917" }}>ERP &amp; Sheets</span>
            <span style={{ fontSize: "14px", fontWeight: 600, color: "#78716c" }}>6 Workbooks + Systems</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
