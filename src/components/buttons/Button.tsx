interface Props {
  title: string;
  leftIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  title,
  leftIcon,
  className,
  onClick,
  ...rest
}: Props) => {
  return (
    <button
      className={`py-2 px-3 border-2 border-borderColor font-semibold flex flex-row items-center gap-2 rounded-md md:rounded-lg ${className}`}
      onClick={onClick}
      {...rest}
    >
      {leftIcon && leftIcon}

      {title}
    </button>
  );
};
