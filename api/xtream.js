export default async function handler(req, res) {
  const { host, user, pass, action } = req.query;

  if (!host || !user || !pass || !action) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  try {
    const url =
      `${host}/player_api.php?username=${encodeURIComponent(user)}` +
      `&password=${encodeURIComponent(pass)}&action=${action}`;

    const r = await fetch(url, {
      headers: {
        "User-Agent": "Vercel-Xtream-Proxy"
      }
    });

    const data = await r.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: "Xtream request failed" });
  }
}
