export const getCategory = async () => {
  try {
    let res = await fetch(`https://fakestoreapi.com/products/categories`);
    if (res.ok) {
      return await res.json();
    }
    throw new Error("wrong api");
  } catch (error) {
    console.log(error);
  }
};
