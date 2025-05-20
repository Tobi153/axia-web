export function FormError({ error }) {
  if (!error) return null;
  return <div className="text-red-700 text-left text-md">{error.message}</div>;
}
