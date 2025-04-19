export function Button({
  children,
  onClick,
  className,
  variant = "default",
  size = "default",
}) {
  const baseStyles = "rounded-lg font-medium transition-all focus:outline-none";
  const sizeStyles = {
    default: "px-4 py-2 text-base",
    icon: "p-2 text-xl",
  };
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
