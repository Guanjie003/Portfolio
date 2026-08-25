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
          background: "linear-gradient(135deg,#ff6b45,#ffb43a)",
          color: "#1a0d08",
          fontSize: 40,
          fontWeight: 700,
          borderRadius: 14,
        }}
      >
        {profile.name.slice(0, 1).toUpperCase()}
      </div>
    ),
    size,
  );
}
