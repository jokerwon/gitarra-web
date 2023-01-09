import { useRef, forwardRef, Ref } from "react";

export interface IProps {
  value: string | number | undefined;
  selectOnFocus: boolean;
  placeholder: string;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(function Input(
  {
    selectOnFocus,
    onClick,
    onFocus,
    onKeyDown,
    onPressEnter,
    ...restProps
  }: Partial<IProps>,
  ref: Ref<HTMLInputElement | null>
) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onPressEnter && e.key === "Enter") {
      onPressEnter(e);
    }
    onKeyDown?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (selectOnFocus) {
      inputRef.current?.select();
    }
    onFocus?.(e);
  };

  return (
    <span className="inline-block">
      <input
        ref={node => {
          inputRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref && typeof ref === "object" && "current" in ref) {
            // @ts-ignore
            ref.current = node;
          }
        }}
        type="text"
        {...restProps}
        className="inline-block h-[2.8rem] overflow-hidden rounded-lg bg-bluegray-1 px-5 text-center text-lg font-mono font-medium border-none outline-none transition-all duration-300 placeholder:select-none placeholder:font-normal placeholder:font-400 focus:shadow-bluegray focus:shadow-[0_0_1.5rem_var(--un-shadow-color)]"
        onClick={onClick}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      />
    </span>
  );
});

export default Input;
