import { getProductById } from "../../../services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  console.log(id);
  response.status(200).json(getProductById(id));
}
