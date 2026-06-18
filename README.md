# Fast IPTV Channel Viewer for Vercel

Files included:

- `index.html` - IPTV channel browser frontend
- `api/xtream.js` - Vercel proxy for Xtream API and M3U URLs
- `vercel.json` - Vercel function runtime config

Features:

- Xtream login support
- M3U playlist URL support
- Category grouping
- Fast loading for large playlists
- Search
- Copy stream URL
- Download single-channel `.m3u`
- Automatic `.ts` / `.m3u8` detection from `container_extension`

Deploy:

1. Upload this folder to GitHub.
2. Import the repo into Vercel.
3. Deploy.
