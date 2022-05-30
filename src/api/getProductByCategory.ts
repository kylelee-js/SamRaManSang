export const getProductByCategory = async (category: string) => {
  try {
    let res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    if (res.ok) {
      return await res.json();
    }
    throw new Error("wrong api");
  } catch (error) {
    console.log(error);
  }
};
