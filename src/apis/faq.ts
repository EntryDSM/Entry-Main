import { instance } from "./axios";

export const fetchFaQ = async () => {
  const { data } = await instance.get("/faq/all");
  return data;
};
