export function SubmitButton({ isSubmitting, label }) {
  return (
    <button
      className="bg-btn-green-dark text-white text-center rounded-md px-3 h-[44px] py-2 w-full cursor-pointer hover:bg-dark-green-gradient transition-all duration-300"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Loading..." : label}
    </button>
  );
}
