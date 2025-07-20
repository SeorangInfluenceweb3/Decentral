export default function handler(req, res) {
  // Base64 dari link tujuan (contoh: https://example.com)
  const encoded = 'aHR0cHM6Ly9mYWNlYm9vay5jb20=';
  const decodedUrl = Buffer.from(encoded, 'base64').toString('utf-8');

  res.writeHead(302, {
    Location: decodedUrl
  });
  res.end();
}