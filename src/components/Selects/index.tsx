import Select from "react-select";
import { Selects } from "../../types";

const Selects = ({
  options,
  handleSelect,
  handleValue,
  width,
  afterWidth,
}: Selects) => {
  return (
    <Select
      options={options}
      onChange={handleSelect}
      value={handleValue()}
      styles={{
        container: baseStyles => ({
          ...baseStyles,
          width,
          lineHeight: "1.18",

          "&::after": {
            content: '""',
            width: afterWidth,
            height: "1px",
            backgroundColor: "var(--cl-9)",
            position: "absolute",
            left: "10px",
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
          borderRadius: "4px",
          padding: 0,
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          color: state.isFocused ? "#fff" : "#000",
          backgroundColor: state.isFocused ? "#0d554a" : "#fff",
          cursor: "pointer",

          "&:active": {
            backgroundColor: "#0d554a",
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
