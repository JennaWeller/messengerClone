import redis from "../../redis"

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({
      body: "Method not Allowed"
    })
    return
  }

  const messagesRes = await redis.hvals("messages")
  const messages = messagesRes
    .map(message => JSON.parse(message))
    .sort((a, b) => b.created_at - a.created_at)

  res.status(200).json({ messages })
}
