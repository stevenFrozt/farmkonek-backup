import ErrorMessage from "./ErrorMessage";
import Label from "./Label";

const TextField = ({
  label = "",
  placeholder = "Enter your text here...",
  type = "text",
  onChange,
  value,
  required = false,
  error = "",
  size,
  fullWidth = false,
  onBlur,
  absolute = false,
  rightIcon = "",
  leftIcon = "",
}) => {
  return (
    <div
      className={`relative flex flex-col ${TextSize(size)} ${
        fullWidth && "w-full"
      }`}
    >
      <Label required={required}>{label}</Label>
      <div
        className={`flex gap-3 relative items-center  border ${
          error !== "" ? "border-red-600" : "border-gray-300"
        } focus:border-primary-600 ${TextFieldSize(size)}`}
      >
        {leftIcon !== "" && (
          <div className="z-20 left-5 cursor-pointer">
            <span className="[&>*]:w-6 [&>*]:h-6 text-xl font-semibold text-gray-400">
              {leftIcon}
            </span>
          </div>
        )}
        <input
          className={`flex-1 w-full focus:outline-none 
      `}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {rightIcon !== "" && (
          <div className="z-20 right-5 cursor-pointer">
            <span className="[&>*]:w-6 [&>*]:h-6 text-gray-400">
              {rightIcon}
            </span>
          </div>
        )}
      </div>
      {error !== "" && <ErrorMessage absolute={absolute}>{error}</ErrorMessage>}
    </div>
  );
};

export default TextField;

const TextSize = (size = "default") =>
  ({
    default: "text-base",
    sm: "text-sm",
    lg: "text-lg",
  }[size]);

const TextFieldSize = (size = "default") =>
  ({
    default: "py-2.5 px-4 rounded-md",
    sm: "px-3.5 py-2 rounded-md",
    lg: "px-4 py-2.5 rounded-md",
  }[size]);

const TextFieldSpacing = (rightIcon = "", leftIcon = "") => {
  if (!leftIcon && !rightIcon) {
    return TextFieldSize(size);
  }
};
