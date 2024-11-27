export default async function Page({ params }: { params: Promise<{ catchAll: string[] }> }) {
  const { catchAll } = await params
  console.log({ catchAll });
  return null;
}
