import { InputContainer } from "./styles";

export default function Input({register, name, error, label, handleChange, disabled, ...rest}) {
  return (
    <>
      <label>
        {label}
        {!!error && <span> - {error}</span>}
      </label>
      <InputContainer color={disabled ? "--gray-1" : "--gray-0"}>
        <input
          {...(register && { ...register(name) })}
          {...rest}
          name={name}
          disabled={disabled}
        />
      </InputContainer>
    </>
  );
}
