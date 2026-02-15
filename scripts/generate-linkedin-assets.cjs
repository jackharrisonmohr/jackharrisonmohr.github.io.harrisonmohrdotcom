const { chromium } = require("playwright");
const path = require("path");

const FONT_DIR = path.join(
  __dirname,
  "../node_modules/@fontsource"
);

// Website dark mode palette
const COLORS = {
  bg: "rgb(26, 24, 22)",
  bgLight: "rgb(32, 30, 27)",
  text: "rgb(232, 227, 219)",
  muted: "rgb(154, 147, 137)",
  border: "rgb(46, 42, 38)",
};

const fontFaces = `
  @font-face {
    font-family: 'Cormorant Garamond';
    font-weight: 600;
    src: url('file://${FONT_DIR}/cormorant-garamond/files/cormorant-garamond-latin-600-normal.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    src: url('file://${FONT_DIR}/inter/files/inter-latin-400-normal.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 500;
    src: url('file://${FONT_DIR}/inter/files/inter-latin-500-normal.woff2') format('woff2');
  }
`;

const bannerHTML = `<!DOCTYPE html>
<html>
<head>
<style>
  ${fontFaces}
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1584px;
    height: 396px;
    background: ${COLORS.bg};
    overflow: hidden;
    position: relative;
  }
  /* Subtle radial gradient for depth */
  .gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 70% 50%, ${COLORS.bgLight} 0%, ${COLORS.bg} 70%);
  }
  /* Very subtle noise texture */
  .noise {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 128px 128px;
  }
  /* Subtle horizontal line accent */
  .line {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, ${COLORS.border} 30%, ${COLORS.border} 70%, transparent 100%);
  }
</style>
</head>
<body>
  <div class="gradient"></div>
  <div class="noise"></div>
  <div class="line"></div>
</body>
</html>`;

const thumbnailHTML = `<!DOCTYPE html>
<html>
<head>
<style>
  ${fontFaces}
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 627px;
    background: ${COLORS.bg};
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 45%, ${COLORS.bgLight} 0%, ${COLORS.bg} 65%);
  }
  .noise {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 128px 128px;
  }
  .content {
    position: relative;
    z-index: 1;
    text-align: center;
  }
  .name {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 600;
    font-size: 72px;
    color: ${COLORS.text};
    letter-spacing: 0.01em;
    line-height: 1.1;
    margin-bottom: 20px;
  }
  .subtitle {
    font-family: 'Inter', system-ui, sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: ${COLORS.muted};
    letter-spacing: 0.04em;
  }
  /* Thin decorative line between name and subtitle */
  .divider {
    width: 48px;
    height: 1px;
    background: ${COLORS.border};
    margin: 0 auto 24px;
  }
</style>
</head>
<body>
  <div class="gradient"></div>
  <div class="noise"></div>
  <div class="content">
    <div class="name">Harrison Mohr</div>
    <div class="divider"></div>
    <div class="subtitle">Applied AI Engineer</div>
  </div>
</body>
</html>`;

async function main() {
  const outDir = path.join(__dirname, "../public/images");
  const browser = await chromium.launch();
  const context = await browser.newContext({ deviceScaleFactor: 2 });

  // Generate banner
  const bannerPage = await context.newPage();
  await bannerPage.setViewportSize({ width: 1584, height: 396 });
  await bannerPage.setContent(bannerHTML, { waitUntil: "networkidle" });
  await bannerPage.waitForTimeout(500); // let fonts load
  await bannerPage.screenshot({
    path: path.join(outDir, "linkedin-banner.png"),
    type: "png",
  });
  console.log("Created linkedin-banner.png (1584x396)");

  // Generate thumbnail
  const thumbPage = await context.newPage();
  await thumbPage.setViewportSize({ width: 1200, height: 627 });
  await thumbPage.setContent(thumbnailHTML, { waitUntil: "networkidle" });
  await thumbPage.waitForTimeout(500);
  await thumbPage.screenshot({
    path: path.join(outDir, "linkedin-featured.png"),
    type: "png",
  });
  console.log("Created linkedin-featured.png (1200x627)");

  // Also save as og-image for the website
  await thumbPage.screenshot({
    path: path.join(outDir, "../og-image.png"),
    type: "png",
  });
  console.log("Created og-image.png (1200x627)");

  await browser.close();
}

main().catch(console.error);
