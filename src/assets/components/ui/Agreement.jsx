export function Agreement({ message }) {
  return (
    <div className="text-[14px]">
      <input type="checkbox" name="agreement" id="agreement" />
      <label htmlFor="agreement">{message}</label>
    </div>
  );
}
