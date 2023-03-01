import { instance } from "./axios";

export const fetchNotices = async (type: string) => {
  const { data } = await instance.get(`/notice/all/${type}`);
  return data;
};
