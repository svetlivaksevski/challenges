import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <h1>Random Chacater:</h1>
      <p>First name: {data.character.firstName}</p>
      <p>Last name: {data.character.lastName}</p>
      <p>Twitter: {data.character.twitterName}</p>
      <p>Geohash: {data.character.geohash}</p>
    </>
  );
}
