export const fetchCategories = async () => {
  const response = await fetch("https://epos.enke.in/api/list-category");
  const data = await response.json();
  return data.category;
};

export const fetchProducts = async () => {
  const response = await fetch("https://epos.enke.in/api/product-searchbar");
  const data = await response.json();
  return data.product;
};
