import React, { useEffect, useState } from "react";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  async function fetchApi() {
    try {
      const res = await fetch("https://dummyjson.com/products?sortBy=title&order=asc");
      const data = await res.json();
      if (data && data.products) {
        setProducts(data.products);
      } else {
        console.error("Invalid data format", data);
      }
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  }

  function selectPageHandler(selectedPage) {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(products.length / 10) &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const totalPages = Math.ceil(products.length / 10);

  return (
    <div>
      {products.length > 0 ? (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((product) => {
            return (
              <span className="products__single" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      ) : (
        <p>No products available</p>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <span onClick={() => selectPageHandler(page - 1)}>
            🔙
          </span>
          {[...Array(totalPages)].map((_, index) => (
            <span
              key={index}
              onClick={() => selectPageHandler(index + 1)}
              className={page===index+1 ? "pagination__selected":""}
            >
              {index + 1}
            </span>
          ))}
          <span onClick={() => selectPageHandler(page + 1)}>
            ⏩
          </span>
        </div>
      )}
    </div>
  );
}

export default Pagination;
