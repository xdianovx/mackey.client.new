export const useGetFileExtention = (item: any) => {
  return item?.split(".").pop();
};
