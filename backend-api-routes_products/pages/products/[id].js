import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Product</h1>
      <h2>{data.name}</h2>
      <p>
        Price: {data.price}
        {data.currency}
      </p>
      <p>Description: {data.description}</p>
      <p>Category: {data.category}</p>
    </div>
  );
}
