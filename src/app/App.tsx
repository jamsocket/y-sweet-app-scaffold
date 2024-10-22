'use client'

import { useMap } from '@y-sweet/react'
import JamsocketLogo from './jamsocket-logo'

function SharedCounter() {
  const myMap = useMap<number>('my-map')
  const count = myMap.get('count') ?? 0

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => myMap.set('count', count - 1)}
        className="rounded-md border border-neutral-400 text-center size-8 text-white hover:bg-neutral-800 transition"
      >
        -
      </button>
      <div className="text-2xl text-white">{count}</div>
      <button
        onClick={() => myMap.set('count', count + 1)}
        className="rounded-md border border-neutral-400 text-center size-8 text-white hover:bg-neutral-800 transition"
      >
        +
      </button>
    </div>
  )
}

export function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-white flex flex-col items-center">
        <div className="flex items-center gap-4 font-geist mb-4">
          <h1 className="text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#eea0d5] to-[#ed6e8e] bg-clip-text text-transparent">
              Y-S
            </span>
            <span className="bg-gradient-to-r from-[#ed6e8e] via-[#eea0d5] to-[#ed6e8e] bg-clip-text text-transparent">
              weet
            </span>
          </h1>
          <span className="font-light text-lg">by</span>
          <JamsocketLogo className="h-10" />
        </div>
        <h3 className="text-lg text-neutral-400 mb-8">
          <a
            href={window.location.href}
            target="_blank"
            className="text-neutral-300 hover:text-white transition"
          >
            Open this page
          </a>{' '}
          in another tab to see the shared state in action.
        </h3>
        <div className="flex items-center gap-4">
          <a
            href="https://docs.jamsocket.com/y-sweet/quickstart"
            className="rounded-full border bg-white px-4 py-2 text-black hover:bg-neutral-100 transition"
          >
            Get Started
          </a>
          <a
            href="https://docs.yjs.dev/"
            className="rounded-full border border-neutral-400 px-4 py-2 text-white hover:bg-neutral-800 transition"
          >
            Yjs Docs
          </a>
        </div>
        <div className="w-96 border-t border-neutral-700 my-16" />
        <SharedCounter />
      </div>
    </div>
  )
}
