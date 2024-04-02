import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductsPage() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>All products</h1>
      <ul>
        {data.map((p) => (
          <div key={p.id}>
            <h2>{p.name}</h2>
            <p>
              Price: {p.price}
              {p.currency}
            </p>
            <p>Description: {p.description}</p>
            <p>Category: {p.category}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
