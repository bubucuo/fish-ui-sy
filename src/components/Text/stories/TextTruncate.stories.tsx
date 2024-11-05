import { makeStyles } from "@griffel/react";
import { Text } from "fish-ui-sy";

const useStyles = makeStyles({
  text: {
    overflow: "hidden",
    width: "240px",
    display: "block",
  },
});

const Truncate = () => {
  const styles = useStyles();

  return (
    <Text truncate wrap={false} className={styles.text}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere aliquam
      nisi numquam, fugit recusandae eligendi aspernatur odio minus? Incidunt
      maxime ipsam dolorem quia quas aliquam, quasi consequatur! Ea, minus
      eaque.
    </Text>
  );
};

export default Truncate;
