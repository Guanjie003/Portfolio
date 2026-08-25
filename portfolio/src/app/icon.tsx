import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#ffffff",
          fontSize: 42,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        {profile.name.slice(0, 1).toUpperCase()}
      </div>
    ),
    size,
  );
}
