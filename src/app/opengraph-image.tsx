import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "FairCareAI — Clinical AI Fairness & Bias Detection";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "white",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            height: "8px",
            background:
              "linear-gradient(90deg, #0072B2 0%, #56B4E9 40%, #009E73 70%, #E69F00 100%)",
            flexShrink: 0,
          }}
        />

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 80px",
            background:
              "linear-gradient(135deg, #E3F2FD 0%, #f0f6ff 30%, #ffffff 70%)",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "36px",
            }}
          >
            <div
              style={{
                background: "#0072B2",
                borderRadius: "14px",
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "800",
                fontSize: "20px",
                marginRight: "14px",
              }}
            >
              FC
            </div>
            <span
              style={{
                color: "#0072B2",
                fontWeight: "800",
                fontSize: "30px",
                letterSpacing: "-0.5px",
              }}
            >
              Fair
            </span>
            <span
              style={{
                color: "#191919",
                fontWeight: "800",
                fontSize: "30px",
                letterSpacing: "-0.5px",
              }}
            >
              CareAI
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "60px",
              fontWeight: "800",
              lineHeight: "1.1",
              letterSpacing: "-1.5px",
              marginBottom: "24px",
            }}
          >
            <span style={{ color: "#191919" }}>Fairness auditing</span>
            <span style={{ color: "#0072B2" }}>for healthcare AI</span>
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: "21px",
              color: "#6B6B6B",
              lineHeight: "1.5",
              maxWidth: "680px",
              marginBottom: "40px",
            }}
          >
            Detect demographic bias in clinical ML models — governance-ready
            reports in minutes. Open source, HIPAA-friendly.
          </div>

          {/* Badges */}
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              "pip install faircare",
              "Python 3.10+",
              "Apache-2.0",
              "HIPAA-friendly",
            ].map((badge) => (
              <div
                key={badge}
                style={{
                  background: "white",
                  border: "1.5px solid #E3E2E0",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#6B6B6B",
                  display: "flex",
                }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
