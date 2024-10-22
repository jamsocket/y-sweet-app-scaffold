import { getOrCreateDocAndToken } from '@y-sweet/sdk'

if (!process.env.CONNECTION_STRING) {
  throw new Error(
    'CONNECTION_STRING must be set in the environment, e.g. by running `CONNECTION_STRING=[your connection string] npm run dev`',
  )
}
const CONNECTION_STRING = process.env.CONNECTION_STRING

export async function POST(request: Request) {
  // In a production app, you'd want to validate that the user is authenticated
  // and has access to the given doc.
  const { docId } = await request.json()
  const clientToken = await getOrCreateDocAndToken(CONNECTION_STRING, docId)
  return Response.json(clientToken)
}
