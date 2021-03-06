export async function getCategories() {
  try {
    const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categories = await fetchCategories.json();
    return categories;
  } catch {
    return (Error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const getIdQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const idQuery = await getIdQuery.json();
    return idQuery;
  } catch {
    return (Error);
  }
}
