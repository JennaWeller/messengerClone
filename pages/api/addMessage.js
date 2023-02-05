import { serverPusher } from "../../pusher"
import redis from "../../redis"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({
      body: "Method not Allowed"
    })
    return
  }

  const { message } = req.body

  const newMessage = {
    ...message,

    //Replace the timestamp of the user to the one on the server
    created_at: Date.now()
  }

  //push to upstash redis db
  await redis.hset("messages", message.id, JSON.stringify(newMessage))
  serverPusher.trigger("messages", "new-message", newMessage)
  res.status(200).json({ message: newMessage })
}
