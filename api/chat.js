export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const key = process.env.ANTHROPIC_API_KEY;
  
  // Debug: tell us what the key looks like without revealing it
  return res.status(200).json({
    key_exists: !!key,
    key_length: key ? key.length : 0,
    key_prefix: key ? key.substring(0, 10) : 'none',
  });
}
