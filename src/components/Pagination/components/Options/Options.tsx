import React from "react";
import { Enter } from "../../../../utilities/keyboard-keys/keys";
import { OptionsProps } from "./Options.types";
import { Input } from "../../../Input";
import { useOptionsStyles } from "./useOptionsStyles.styles";
import { Button } from "../../../Button";

export type SizeChangerRender = (info: {
  disabled: boolean;
  size: number;
  onSizeChange: (value: string | number) => void;
  "aria-label": string;
  className: string;
  options: {
    label: string;
    value: string | number;
  }[];
}) => React.ReactNode;

const defaultPageSizeOptions = [10, 20, 50, 100];

export const Options: React.FC<OptionsProps> = (props) => {
  const {
    pageSizeOptions = defaultPageSizeOptions,
    changeSize,
    pageSize,
    goButton,
    quickGo,
    disabled,
    showSizeChanger,
    sizeChangerRender,
  } = props;

  const styles = useOptionsStyles();

  const [goInputValue, setGoInputValue] = React.useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGoInputValue(parseInt(value));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const go = (e: any) => {
    if (typeof goInputValue !== "number") {
      return;
    }

    if (e.key === Enter || e.type === "click") {
      quickGo?.(goInputValue);
      setGoInputValue(null);
    }
  };

  const getPageSizeOptions = () => {
    if (
      pageSizeOptions.some(
        (option) => option.toString() === pageSize.toString()
      )
    ) {
      return pageSizeOptions;
    }
    return pageSizeOptions.concat([pageSize]).sort((a, b) => {
      const numberA = Number.isNaN(Number(a)) ? 0 : Number(a);
      const numberB = Number.isNaN(Number(b)) ? 0 : Number(b);
      return numberA - numberB;
    });
  };

  // ============== render ==============

  if (!showSizeChanger && !quickGo) {
    return null;
  }

  let changeSelect: React.ReactNode = null;
  let goInput: React.ReactNode = null;
  let gotoButton: React.ReactNode = null;

  // >>>>> Size Changer
  if (showSizeChanger && sizeChangerRender) {
    changeSelect = sizeChangerRender({
      disabled: !!disabled,
      size: pageSize,
      onSizeChange: (e, data) => {
        changeSize?.(parseInt(data.value));
      },
      className: styles.sizeChanger,
      options: getPageSizeOptions(),
    });
  }

  // >>>>> Quick Go
  if (quickGo) {
    if (goButton) {
      gotoButton =
        typeof goButton === "boolean" ? (
          <Button
            appearance="primary"
            onClick={go}
            onKeyUp={go}
            disabled={disabled}
            className={styles.jumperButton}
          >
            确定
          </Button>
        ) : (
          <span onClick={go} onKeyUp={go}>
            {goButton}
          </span>
        );
    }

    goInput = (
      <div className={styles.quickJumper}>
        跳至
        <Input
          className={styles.quickJumperInput}
          disabled={disabled}
          type="number"
          value={goInputValue + ""}
          onChange={handleChange}
          onKeyUp={go}
          aria-label="页"
        />
        页{gotoButton}
      </div>
    );
  }

  return (
    <li className={styles.root}>
      {changeSelect}
      {goInput}
    </li>
  );
};

Options.displayName = "Options";

export default Options;
