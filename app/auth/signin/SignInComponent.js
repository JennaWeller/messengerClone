"use client"
import { signIn } from "next-auth/react"

function SignInComponent({ providers }) {
  return (
    <div className="flex justify-center">
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: "http://localhost:3000"
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default SignInComponent
