import Select from "react-select";
import { SelectsType } from "../../types";

const Selects = ({
  options,
  handleSelect,
  handleValue,
  width,
  zIndex = "auto",
}: SelectsType) => {
  return (
    <Select
      options={options}
      onChange={handleSelect}
      value={handleValue()}
      styles={{
        container: baseStyles => ({
          ...baseStyles,
          width,
          lineHeight: 1.4,
          zIndex,

          "&::after": {
            content: '""',
            width: "100%",
            height: "1px",
            backgroundColor: "var(--cl-9)",
            position: "absolute",
          },
        }),
        control: baseStyles => ({
          ...baseStyles,
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
        }),
        menu: baseStyles => ({
          ...baseStyles,
          boxShadow: "none",
        }),
        menuList: baseStyles => ({
          ...baseStyles,
          boxShadow: "0px 0px 1px var(--cl-5), 0px 0px 2px var(--cl-5)",
          borderRadius: "var(--br-4)",
          padding: 0,
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          color: state.isFocused ? "var(--cl-4)" : "var(--cl-main)",
          backgroundColor: state.isFocused ? "var(--cl-12)" : "var(--cl-4)",
          cursor: "pointer",

          "&:active": {
            backgroundColor: "var(--cl-12)",
          },
        }),
        indicatorSeparator: baseStyles => ({
          ...baseStyles,
          display: "none",
        }),
      }}
    />
  );
};

export default Selects;
