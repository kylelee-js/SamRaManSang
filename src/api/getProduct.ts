export const getProduct = async (id: string) => {
  try {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (res.ok) {
      return await res.json();
    }
    throw new Error("wrong api");
  } catch (error) {
    console.log(error);
  }
};
