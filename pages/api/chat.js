export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const { q } = req.body || {}
  if (!q) return res.status(400).json({error:'Missing question'})
  // Replace this with OpenAI or your AI backend call.
  const answer = `Demo AI: received your query -> "${q}".`
  res.status(200).json({ answer })
}
