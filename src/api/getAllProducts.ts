export const getAllProducts = async () => {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    if (res.ok) {
      return await res.json();
    }
    throw new Error("wrong api");
  } catch (error) {
    console.log(error);
  }
};
