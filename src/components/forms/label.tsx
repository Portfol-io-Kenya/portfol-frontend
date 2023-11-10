import clsx from 'clsx';

const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  className,
  ...rest
}) => {
  return (
    <label
      className={clsx(
        'block text-body-dark font-semibold text-sm leading-none mb-3',
        className
      )}
      {...rest}
    />
  );
};

export default Label;
