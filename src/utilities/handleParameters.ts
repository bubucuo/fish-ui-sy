/* eslint-disable @typescript-eslint/no-explicit-any */
export function handleParameters(arr1: any[], arr2: any[]) {
  for (let i = 0; i < arr1.length; i++) {
    (arr1[i] as any).parameters = {
      docs: {
        source: {
          code: arr2[i],
        },
      },
    };
  }
}
