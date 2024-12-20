import type { SizeChangerRender } from "../Pagination";

export interface OptionsProps {
  disabled?: boolean;
  pageSize: number;
  pageSizeOptions?: number[];
  goButton?: boolean | string;
  changeSize?: (size: number) => void;
  quickGo?: ((value: number) => void) | null;
  buildOptionText?: (value: number | string) => string;
  showSizeChanger: boolean;
  sizeChangerRender?: SizeChangerRender;
}
