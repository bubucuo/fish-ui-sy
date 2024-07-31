import { makeStyles } from "@griffel/react";
import { tokens, webLightTheme, FishProvider } from "fish-ui-sy";

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

export const Nested = () => {
  const styles = useStyles();
  return (
    <FishProvider theme={webLightTheme}>
      <div className={styles.example}>
        <div className={styles.text}>Web Light Theme using brand tokens</div>

        <FishProvider
          theme={{
            colorBrandStroke1: "#780510",
            colorBrandBackground2: "#fa8072",
            colorBrandForeground2: "#780510",
          }}
        >
          <div className={styles.example}>
            <div className={styles.text}>
              Nested FishProvider with partial theme
            </div>
          </div>
        </FishProvider>
      </div>
    </FishProvider>
  );
};
