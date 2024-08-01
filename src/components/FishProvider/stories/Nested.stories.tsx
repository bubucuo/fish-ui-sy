import { makeStyles } from "@griffel/react";
import { tokens, FishProvider } from "fish-ui-sy";

const useStyles = makeStyles({
  example: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    border: `5px solid ${tokens.colorBrandStroke1}`,
    borderRadius: "5px",
    margin: "5px",
  },
  text: {
    padding: "5px",
    fontSize: "18px",
  },
});

const Nested = () => {
  const styles = useStyles();
  return (
    <FishProvider>
      <div className={styles.example}>
        <div className={styles.text}>Web Light Theme using brand tokens</div>
        <FishProvider
          theme={{
            colorBrandStroke1: "red",
            colorBrandBackground2: "green",
            colorBrandForeground2: "yellow",
            // 更多的 theme 属性
          }}
        >
          <Child />
        </FishProvider>
        <Child />
      </div>
    </FishProvider>
  );
};

function Child() {
  const styles = useStyles();
  return (
    <div className={styles.example}>
      <div className={styles.text}>
        Child Nested FishProvider with partial theme
      </div>
    </div>
  );
}

export default Nested;
