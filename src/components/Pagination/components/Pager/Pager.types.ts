export interface PagerProps {
  page: number;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (page: number) => void;
  onKeyPress?: (
    e: React.KeyboardEvent<HTMLLIElement>,
    onClick: PagerProps["onClick"],
    page: PagerProps["page"]
  ) => void;
}
