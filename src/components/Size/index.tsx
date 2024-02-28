import { ChangeEventHandler } from "react";
import { useSearchParams } from "react-router-dom";
import validateSize from "../../utils/validateSize";
import scss from "./Size.module.scss";

const Size = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange: ChangeEventHandler<HTMLLabelElement> = e => {
    const size = e.currentTarget.innerText;
    searchParams.set("size", size);
    setSearchParams(searchParams);
  };

  return (
    <div className={scss.sizeBox}>
      <p className={scss.sizeValue}>
        Size - {validateSize(searchParams.get("size"))}
      </p>
      <ul className={scss.sizes}>
        <li className={scss.sizeItem}>
          <label className={scss.sizeLabel} onChange={handleChange}>
            <input
              type="radio"
              name="size"
              className={scss.radioSize}
              checked={searchParams.get("size") === "48"}
              readOnly
            />
            48
          </label>
        </li>
        <li className={scss.sizeItem}>
          <label className={scss.sizeLabel} onChange={handleChange}>
            <input
              type="radio"
              name="size"
              className={scss.radioSize}
              checked={searchParams.get("size") === "50"}
              readOnly
            />
            50
          </label>
        </li>
        <li className={scss.sizeItem}>
          <label className={scss.sizeLabel} onChange={handleChange}>
            <input
              type="radio"
              name="size"
              className={scss.radioSize}
              checked={searchParams.get("size") === "52"}
              readOnly
            />
            52
          </label>
        </li>
        <li className={scss.sizeItem}>
          <label className={scss.sizeLabel} onChange={handleChange}>
            <input
              type="radio"
              name="size"
              className={scss.radioSize}
              checked={searchParams.get("size") === "54"}
              readOnly
            />
            54
          </label>
        </li>
        <li className={scss.sizeItem}>
          <label className={scss.sizeLabel} onChange={handleChange}>
            <input
              type="radio"
              name="size"
              className={scss.radioSize}
              checked={searchParams.get("size") === "56"}
              readOnly
            />
            56
          </label>
        </li>
        <li className={scss.sizeItem}>
          <label className={scss.sizeLabel} onChange={handleChange}>
            <input
              type="radio"
              name="size"
              className={scss.radioSize}
              checked={searchParams.get("size") === "58"}
              readOnly
            />
            58
          </label>
        </li>
        <li className={scss.sizeItem}>
          <label className={scss.sizeLabel} onChange={handleChange}>
            <input
              type="radio"
              name="size"
              className={scss.radioSize}
              checked={searchParams.get("size") === "60"}
              readOnly
            />
            60
          </label>
        </li>
        <li className={scss.sizeItem}>
          <label className={scss.sizeLabel} onChange={handleChange}>
            <input
              type="radio"
              name="size"
              className={scss.radioSize}
              checked={searchParams.get("size") === "62"}
              readOnly
            />
            62
          </label>
        </li>
        <li className={scss.sizeItem}>
          <label className={scss.sizeLabel} onChange={handleChange}>
            <input
              type="radio"
              name="size"
              className={scss.radioSize}
              checked={searchParams.get("size") === "64"}
              readOnly
            />
            64
          </label>
        </li>
        <li className={scss.sizeItem}>
          <label className={scss.sizeLabel} onChange={handleChange}>
            <input
              type="radio"
              name="size"
              className={scss.radioSize}
              checked={searchParams.get("size") === "66"}
              readOnly
            />
            66
          </label>
        </li>
        <li className={scss.sizeItem}>
          <label className={scss.sizeLabel} onChange={handleChange}>
            <input
              type="radio"
              name="size"
              className={scss.radioSize}
              checked={searchParams.get("size") === "68"}
              readOnly
            />
            68
          </label>
        </li>
        <li className={scss.sizeItem}>
          <label className={scss.sizeLabel} onChange={handleChange}>
            <input
              type="radio"
              name="size"
              className={scss.radioSize}
              checked={searchParams.get("size") === "70"}
              readOnly
            />
            70
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Size;
