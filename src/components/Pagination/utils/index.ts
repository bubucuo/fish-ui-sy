export const calculatePage = (
  p: number | undefined,
  pageSize: number,
  total: number
) => {
  const _pageSize = typeof p === "undefined" ? pageSize : p;
  return Math.floor((total - 1) / _pageSize) + 1;
};

export const isInteger = (v: number) => {
  const value = Number(v);
  return (
    typeof value === "number" &&
    !Number.isNaN(value) &&
    isFinite(value) &&
    Math.floor(value) === value
  );
};
