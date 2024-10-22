import { YDocProvider } from '@y-sweet/react'
import { App } from './App'

function randomId(): string {
  return Math.random().toString(36).substring(2, 15)
}

type HomeProps = { searchParams: Promise<{ doc: string }> }
export default async function Home({ searchParams }: HomeProps) {
  const docId = (await searchParams).doc ?? randomId()
  return (
    <YDocProvider docId={docId} setQueryParam="doc" authEndpoint="/api/auth">
      <App />
    </YDocProvider>
  )
}
