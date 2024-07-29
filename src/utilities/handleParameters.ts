export default function handleParameters(arr1: React.FC, arr2: string) {
  for (let i = 0; i < arr1.length; i++) {
    arr1[i].parameters = {
      docs: {
        source: {
          code: arr2[i],
        },
      },
    };
  }
  return arr1;
}
