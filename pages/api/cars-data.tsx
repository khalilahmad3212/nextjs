import client from "../../client";

export default async function handler(req: any, res: any) {
  let { slug='electric-car', minValue=1000, maxValue=10000, brand='suv', transmission='suv' } = req.query;

  let data = await getCarsData(slug, minValue, maxValue, brand, transmission);

  console.log("\n\n\n\n\n Sending \n\n\n\n\n\n");
  res.status(200).json({ data });
}

async function getCarsData(slug: string, minValue:number, maxValue: number, brand: string, transmission: string) {

  const cars_data =
    await client.fetch(`[_type=="car" && references([_type=="categary" && slug == '${slug}']._id)]{
        title,
        description,
        "imageUrl": car_image.asset->url
      }`);
  console.log("\n\n\n\n\n Fetched \n\n\n\n\n\n");
  console.log(cars_data);

  return cars_data;
}