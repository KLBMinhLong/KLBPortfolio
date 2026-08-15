const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const packs = [
  { file: 'color-pixels-electric-blue-pack.png', id: 'electric-blue', name: 'Electric Blue Pixel', viName: 'Pixel Xanh Điện', icon: '⚡' },
  { file: 'pack984.png', id: 'vietnam-flag', name: 'Vietnam Flag', viName: 'Cờ Việt Nam', icon: '🇻🇳' },
  { file: 'pack2662.png', id: 'cat-paw', name: 'Cute Cat Paw', viName: 'Bàn Chân Mèo', icon: '🐾' },
  { file: 'bugcat-tired-coffee-machine-pack.png', id: 'bugcat-coffee', name: 'Bugcat & Coffee', viName: 'Bugcat Cà Phê', icon: '☕' },
  { file: 'Chrome-Dino-T-Rex.png', id: 'chrome-dino', name: 'Chrome Dino T-Rex', viName: 'Khủng Long Dino', icon: '🦖' },
  { file: 'BrazilDogDanceMeme.png', id: 'brazil-dog', name: 'Dancing Dog Meme', viName: 'Chó Nhảy Meme', icon: '🐕' },
  { file: 'meme-malow-cat-pack.png', id: 'malow-cat', name: 'Marshmallow Cat', viName: 'Mèo Malow Béo', icon: '🐱' },
  { file: '3d-pixel-blue-and-gold-macaw-parrot-pack.png', id: 'pixel-parrot', name: '3D Pixel Macaw', viName: 'Vẹt Macaw Pixel', icon: '🦜' },
  { file: 'pixel-jellyfish-pack.png', id: 'pixel-jellyfish', name: 'Pixel Jellyfish', viName: 'Sứa Biển Pixel', icon: '🪼' },
  { file: 'anime-ttigraas-slime-rimuru-tempest-pack.png', id: 'rimuru-slime', name: 'Rimuru Tempest Slime', viName: 'Slime Rimuru', icon: '💧' },
  { file: 'flowers-cherry-flowers-pack.png', id: 'cherry-blossom', name: 'Cherry Blossom', viName: 'Hoa Anh Đào', icon: '🌸' },
];

function processAll() {
  const metaResults = [];

  for (const pack of packs) {
    const inputPath = path.join('Infomation/CustomCursor', pack.file);
    const buffer = fs.readFileSync(inputPath);
    const srcPng = PNG.sync.read(buffer);

    const midX = Math.floor(srcPng.width / 2);

    // Bounding box for left half
    let minX1 = midX, maxX1 = 0, minY1 = srcPng.height, maxY1 = 0;
    for (let y = 0; y < srcPng.height; y++) {
      for (let x = 0; x < midX; x++) {
        const idx = (srcPng.width * y + x) << 2;
        const a = srcPng.data[idx + 3];
        if (a > 15) {
          minX1 = Math.min(minX1, x);
          maxX1 = Math.max(maxX1, x);
          minY1 = Math.min(minY1, y);
          maxY1 = Math.max(maxY1, y);
        }
      }
    }

    // Bounding box for right half
    let minX2 = srcPng.width, maxX2 = midX, minY2 = srcPng.height, maxY2 = 0;
    for (let y = 0; y < srcPng.height; y++) {
      for (let x = midX; x < srcPng.width; x++) {
        const idx = (srcPng.width * y + x) << 2;
        const a = srcPng.data[idx + 3];
        if (a > 15) {
          minX2 = Math.min(minX2, x);
          maxX2 = Math.max(maxX2, x);
          minY2 = Math.min(minY2, y);
          maxY2 = Math.max(maxY2, y);
        }
      }
    }

    function cropAndScale(minX, maxX, minY, maxY, targetSize = 32) {
      const cropW = Math.max(1, maxX - minX + 1);
      const cropH = Math.max(1, maxY - minY + 1);
      const maxDim = Math.max(cropW, cropH);

      // Scale to fit targetSize nicely with 1px padding
      const scale = (targetSize - 2) / maxDim;
      const destW = Math.round(cropW * scale);
      const destH = Math.round(cropH * scale);

      const outPng = new PNG({ width: targetSize, height: targetSize });
      outPng.data.fill(0);

      // Scale
      for (let dy = 0; dy < destH; dy++) {
        for (let dx = 0; dx < destW; dx++) {
          const sx = minX + Math.min(cropW - 1, Math.floor(dx / scale));
          const sy = minY + Math.min(cropH - 1, Math.floor(dy / scale));
          const srcIdx = (srcPng.width * sy + sx) << 2;
          const outIdx = (targetSize * dy + dx) << 2;

          outPng.data[outIdx] = srcPng.data[srcIdx];
          outPng.data[outIdx + 1] = srcPng.data[srcIdx + 1];
          outPng.data[outIdx + 2] = srcPng.data[srcIdx + 2];
          outPng.data[outIdx + 3] = srcPng.data[srcIdx + 3];
        }
      }

      // Determine hotspot
      let hotspotX = 0, hotspotY = 0;
      let found = false;
      for (let y = 0; y < targetSize; y++) {
        for (let x = 0; x < targetSize; x++) {
          const idx = (targetSize * y + x) << 2;
          if (outPng.data[idx + 3] > 100) {
            hotspotX = x;
            hotspotY = y;
            found = true;
            break;
          }
        }
        if (found) break;
      }

      return { outPng, hotspotX, hotspotY };
    }

    const defaultRes = cropAndScale(minX1, maxX1, minY1, maxY1, 32);
    const pointerRes = cropAndScale(minX2, maxX2, minY2, maxY2, 32);

    const outDir = path.join('public/assets/cursors', pack.id);
    fs.mkdirSync(outDir, { recursive: true });

    fs.writeFileSync(path.join(outDir, 'default.png'), PNG.sync.write(defaultRes.outPng));
    fs.writeFileSync(path.join(outDir, 'pointer.png'), PNG.sync.write(pointerRes.outPng));

    console.log(`[${pack.id}] default hotspot: (${defaultRes.hotspotX}, ${defaultRes.hotspotY}), pointer hotspot: (${pointerRes.hotspotX}, ${pointerRes.hotspotY})`);

    metaResults.push({
      id: pack.id,
      name: pack.name,
      viName: pack.viName,
      icon: pack.icon,
      defaultPath: `/assets/cursors/${pack.id}/default.png`,
      pointerPath: `/assets/cursors/${pack.id}/pointer.png`,
      defaultHotspot: [defaultRes.hotspotX, defaultRes.hotspotY],
      pointerHotspot: [pointerRes.hotspotX, pointerRes.hotspotY]
    });
  }

  // Also include default system cursor option at top
  const allCursors = [
    {
      id: 'default',
      name: 'Default Cursor',
      viName: 'Mặc định Hệ thống',
      icon: '↖',
      defaultPath: '',
      pointerPath: '',
      defaultHotspot: [0, 0],
      pointerHotspot: [0, 0]
    },
    ...metaResults
  ];

  fs.mkdirSync('src/data', { recursive: true });
  fs.writeFileSync('src/data/cursorPacks.ts', `export interface CursorPack {
  id: string;
  name: string;
  viName: string;
  icon: string;
  defaultPath: string;
  pointerPath: string;
  defaultHotspot: [number, number];
  pointerHotspot: [number, number];
}

export const CURSOR_PACKS: CursorPack[] = ${JSON.stringify(allCursors, null, 2)};
`);

  console.log('Finished generating all cursor assets and cursorPacks.ts successfully!');
}

processAll();
