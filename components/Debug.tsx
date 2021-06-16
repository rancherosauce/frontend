export default function Debug({ data }: { data: object }) {
  if (!data) return null;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
