import Product from "../../../db/models/Product";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  // const { id } = request.query;

  // const product = products.find((product) => product._id === id);

  // if (!product) {
  //   return response.status(404).json({ status: "Not Found" });
  // }

  // response.status(200).json(product);

  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");
    console.log(product);
    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
}
