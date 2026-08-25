import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.fullName} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#0a0a0a",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span>{profile.role}</span>
          <span>{profile.availability}</span>
        </div>

        <div style={{ display: "flex", fontSize: 210, fontWeight: 700, letterSpacing: -12, lineHeight: 0.85 }}>
          {profile.displayName}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            borderTop: "1px solid #0a0a0a",
            paddingTop: 20,
          }}
        >
          <span>{profile.email}</span>
          <span>github.com/Guanjie003</span>
        </div>
      </div>
    ),
    size,
  );
}
