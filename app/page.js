import React from "react"
import ChatInput from "./ChatInput"
import MessageList from "./MessageList"
import { getServerSession } from "next-auth/next"
import { Providers } from "./providers"

async function HomePage() {
  const data = await fetch(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`
  ).then(res => res.json())

  const messages = data.messages

  const session = await getServerSession()

  return (
    <Providers session={session}>
      <main>
        <MessageList intialMessages={messages} />
        <ChatInput session={session} />
      </main>
    </Providers>
  )
}

export default HomePage
