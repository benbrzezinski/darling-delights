const scrollToValue = (value: number) => {
  window.scrollTo({
    top: value,
    left: 0,
    behavior: "smooth",
  });
};

export default scrollToValue;
