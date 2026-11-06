import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "LineCheck — on-device AI reads pregnancy and LH ovulation tests";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [icon, screenshot] = await Promise.all([
    readFile(join(process.cwd(), "public/appicons/linecheck-luna.png")),
    readFile(join(process.cwd(), "public/appscreenshots/linecheck/pregnancy-test-scan.png")),
  ]);
  const png = (data: Buffer) => `data:image/png;base64,${data.toString("base64")}`;
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#f7f4ff", color: "#19112e", padding: 64, position: "relative", overflow: "hidden" }}>
      <div style={{ display: "flex", flexDirection: "column", width: 730 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <img src={png(icon)} alt="" width={86} height={86} style={{ borderRadius: 20 }} />
          <span style={{ fontSize: 38, fontWeight: 700 }}>LineCheck</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 34, fontSize: 64, fontWeight: 700, letterSpacing: -2, lineHeight: 1.1 }}>
          <span>Your phone reads</span><span style={{ color: "#6133f2" }}>your test lines.</span>
        </div>
        <div style={{ display: "flex", marginTop: 26, fontSize: 27, maxWidth: 660, lineHeight: 1.4 }}>Luna Check reads pregnancy &amp; LH ovulation tests on your device. No photo uploads.</div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 23, color: "#665a7c" }}>iPhone · iPhone Duo · iPad · Android</div>
      </div>
      <div style={{ display: "flex", position: "absolute", right: 62, top: 65, width: 270, padding: 7, background: "#19112e", borderRadius: 38 }}>
        <img src={png(screenshot)} alt="" width={256} height={557} style={{ borderRadius: 31 }} />
      </div>
    </div>, size,
  );
}
