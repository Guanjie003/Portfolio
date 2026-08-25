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
          background: "#100e0d",
          color: "#f6f2ee",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg,#ff6b45,#ffb43a)",
              color: "#1a0d08",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            {profile.name.slice(0, 1).toUpperCase()}
          </div>
          <div style={{ fontSize: 30, color: "#a89d94" }}>{profile.role}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{profile.fullName}</div>
          <div style={{ fontSize: 34, color: "#a89d94", maxWidth: 900 }}>{profile.location}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#ff6b45" }}>
          {profile.email}
        </div>
      </div>
    ),
    size,
  );
}
