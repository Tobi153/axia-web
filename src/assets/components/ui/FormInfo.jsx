export function FormInfo({ heading, note }) {
  return (
    <div className="form-info text-center mb-5">
      <h2 className="form-heading text-[28px] font-[600]">{heading}</h2>
      <p className="text-[18px] text-gray text-gray-light ">{note}</p>
    </div>
  );
}
