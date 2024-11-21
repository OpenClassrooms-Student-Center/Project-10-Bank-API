import { DetailedHTMLProps, FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./index.module.scss";

type InputProps = DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type Props = {
  label?: string;
  options: string[];
  isRequired?: boolean;
  defaultValue?: string;
  errorMessage?: string;
  inputProps?: InputProps;
  formProps?: UseFormRegisterReturn;
  showEmptyOption?: boolean;
};

// will be use with react-hook-form
const Select: FC<Props> = ({
  label,
  options,
  isRequired,
  defaultValue,
  errorMessage,
  inputProps,
  formProps,
  showEmptyOption,
}) => {
  return (
    <div className={classes["root"]}>
      {label && (
        <label htmlFor={inputProps?.id}>
          {label}
          {isRequired && <span className="text-red-500"> *</span>}
        </label>
      )}
      <select
        {...inputProps}
        {...formProps}
        defaultValue={defaultValue}
        className={classes["select"]}
      >
        {showEmptyOption && <option value="" />}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default Select;
