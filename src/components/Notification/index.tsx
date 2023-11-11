import { Notification } from "../../types";
import useIcons from "../../hooks/useIcons";
import scss from "./Notification.module.scss";

const Notification = ({ text, paddingTop = "50px" }: Notification) => {
  const { Ring } = useIcons();

  return (
    <div className={scss.infoBox} style={{ paddingTop }}>
      <h2 className={scss.infoText}>{text}</h2>
      <Ring className={scss.ring} />
    </div>
  );
};

export default Notification;
