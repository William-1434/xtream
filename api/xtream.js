export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const { host, user, pass, action, playlist } = req.query;

    let targetUrl = "";

    if (playlist) {
      targetUrl = playlist;
    } else {
      if (!host || !user || !pass || !action) {
        return res.status(400).json({
          error: "Missing parameters"
        });
      }

      targetUrl =
        `${String(host).replace(/\/$/, "")}/player_api.php` +
        `?username=${encodeURIComponent(user)}` +
        `&password=${encodeURIComponent(pass)}` +
        `&action=${encodeURIComponent(action)}`;
    }

    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 Vercel IPTV Proxy"
      }
    });

    const contentType = response.headers.get("content-type") || "text/plain";
    const body = await response.text();

    res.setHeader("Content-Type", contentType);
    return res.status(response.status).send(body);

  } catch (err) {
    return res.status(500).json({
      error: err.message || "Proxy failed"
    });
  }
}
