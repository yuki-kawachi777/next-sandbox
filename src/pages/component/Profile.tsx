import useSWR from "swr";
import { fetcher } from "../fetcher";

export const Profile = () => {
  const { data } = useSWR("/api/user", fetcher, { suspense: true });
  return <div>hello, {data.name}</div>;
};
