export function Input({ value, onChange, className, ...props }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${className}`}
      {...props}
    />
  );
}
