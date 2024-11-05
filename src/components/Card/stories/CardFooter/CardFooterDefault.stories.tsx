import { makeStyles, Button } from "fish-ui-sy";
import {
  ArrowReply16Regular,
  MoreHorizontal20Regular,
  Share16Regular,
} from "fish-ui-sy-react-icons";
import { CardFooter } from "fish-ui-sy";

const useStyles = makeStyles({
  footer: {
    width: "300px",
  },
});

const Default = () => {
  const styles = useStyles();

  return (
    <CardFooter
      className={styles.footer}
      action={
        <Button appearance="transparent" icon={<MoreHorizontal20Regular />} />
      }
    >
      <Button icon={<ArrowReply16Regular />}>Reply</Button>
      <Button icon={<Share16Regular />}>Share</Button>
    </CardFooter>
  );
};

export default Default;
