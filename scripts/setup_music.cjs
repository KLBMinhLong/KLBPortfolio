const fs = require('fs');
const path = require('path');

const srcDir = 'Infomation/Music';
const destDir = 'public/assets/audio';

fs.mkdirSync(destDir, { recursive: true });

const trackDefinitions = [
  {
    file: 'BEAUZ & JVNA - Crazy.mp3',
    id: 'beauz-jvna-crazy',
    title: 'Crazy',
    artist: 'BEAUZ & JVNA',
    genre: 'EDM / Dance',
    tag: '⚡ Energetic',
  },
  {
    file: 'Bóng Phù Hoa_spotdown.org.mp3',
    id: 'bong-phu-hoa',
    title: 'Bóng Phù Hoa',
    artist: 'Phương Mỹ Chi',
    genre: 'Pop / Ballad',
    tag: '🌸 Melodic',
  },
  {
    file: 'Fly Away_spotdown.org.mp3',
    id: 'fly-away',
    title: 'Fly Away',
    artist: 'TheFatRat ft. Anjulie',
    genre: 'Electronic',
    tag: '🚀 Chillstep',
  },
  {
    file: 'Khi Em Lớn_spotdown.org.mp3',
    id: 'khi-em-lon',
    title: 'Khi Em Lớn',
    artist: 'Orange x Hoàng Dũng',
    genre: 'V-Pop / Acoustic',
    tag: '🌿 Emotional',
  },
  {
    file: 'Kỵ Sĩ Và Ánh Sao_spotdown.org.mp3',
    id: 'ky-si-va-anh-sao',
    title: 'Kỵ Sĩ Và Ánh Sao',
    artist: 'V.A',
    genre: 'Instrumental / Sound',
    tag: '✨ Nostalgic',
  },
  {
    file: 'NO CHASE_spotdown.org.mp3',
    id: 'no-chase',
    title: 'NO CHASE',
    artist: 'V.A',
    genre: 'Hip-Hop / Beat',
    tag: '🔥 Vibe',
  },
  {
    file: 'New Jeans_spotdown.org.mp3',
    id: 'new-jeans',
    title: 'New Jeans',
    artist: 'NewJeans',
    genre: 'K-Pop',
    tag: '🎀 Upbeat',
  },
  {
    file: 'Túy Âm_spotdown.org.mp3',
    id: 'tuy-am',
    title: 'Túy Âm',
    artist: 'Xesi x Masew x Nhật Nguyễn',
    genre: 'Future Bass / Folk',
    tag: '💫 Iconic',
  },
  {
    file: 'Want You_spotdown.org.mp3',
    id: 'want-you',
    title: 'Want You',
    artist: 'V.A',
    genre: 'R&B / Soul',
    tag: '🌙 Smooth',
  },
  {
    file: 'spotifydown.com - 红昭愿.mp3',
    id: 'hong-chieu-nguyen',
    title: 'Hồng Chiêu Nguyện (红昭愿)',
    artist: 'Âm Khuyết Thi Thính',
    genre: 'C-Pop / Traditional EDM',
    tag: '🏮 Oriental',
  },
  {
    file: 'thế giới thần tiên_spotdown.org.mp3',
    id: 'the-gioi-than-tien',
    title: 'Thế Giới Thần Tiên',
    artist: 'V.A',
    genre: 'Lofi / Dream',
    tag: '🪐 Chill',
  },
  {
    file: 'Ánh Sao Và Bầu Trời_spotdown.org.mp3',
    id: 'anh-sao-va-bau-troi',
    title: 'Ánh Sao Và Bầu Trời',
    artist: 'T.R.I',
    genre: 'V-Pop / Indie',
    tag: '⭐ Dreamy',
  },
];

const results = [];

trackDefinitions.forEach((t) => {
  const srcFile = path.join(srcDir, t.file);
  const destFile = path.join(destDir, `${t.id}.mp3`);

  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile);
    const stat = fs.statSync(destFile);
    console.log(`Copied [${t.title}] -> ${destFile} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
    results.push({
      id: t.id,
      title: t.title,
      artist: t.artist,
      genre: t.genre,
      tag: t.tag,
      src: `/assets/audio/${t.id}.mp3`,
    });
  } else {
    console.warn(`File not found: ${srcFile}`);
  }
});

const tsCode = `export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  genre: string;
  tag: string;
  src: string;
}

export const MUSIC_TRACKS: MusicTrack[] = ${JSON.stringify(results, null, 2)};
`;

fs.writeFileSync('src/data/musicTracks.ts', tsCode);
console.log('Successfully generated musicTracks.ts and transferred all audio files!');
