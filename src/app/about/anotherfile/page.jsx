"use client";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function AnotherPage() {
  const { data, error } = useSWR("/api/activity", fetcher);

  return (
    <main>
      {data?.map((d, i) => {
        return <div key={i}>{d.Description}</div>;
      })}
    </main>
  );
}
