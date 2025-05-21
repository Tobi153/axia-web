export function Agreement({ message }) {
  return (
    <div className="text-[14px] flex items-center gap-2">
      <input
        type="checkbox"
        name="agreement"
        id="agreement"
        className="accent-btn-green-dark cursor-pointer hover:accent-dark-green"
      />
      <label htmlFor="agreement">{message}</label>
    </div>
  );
}
