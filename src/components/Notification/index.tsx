import { Notification } from "../../types";
import useIcons from "../../hooks/useIcons";
import scss from "./Notification.module.scss";

const Notification = ({
  text,
  flexGrow = 0,
  paddingTop = "50px",
}: Notification) => {
  const { Ring } = useIcons();

  return (
    <div className={scss.infoBox} style={{ flexGrow, paddingTop }}>
      <h2 className={scss.infoText}>{text}</h2>
      <Ring className={scss.ring} />
    </div>
  );
};

export default Notification;
