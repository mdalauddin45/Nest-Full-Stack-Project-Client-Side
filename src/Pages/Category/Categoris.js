import React, { useEffect, useState } from "react";
import CategoryCart from "./CategoryCart";
import snacks from "../../assets/CategoryImage/cat-5.png";
import hodofoods from "../../assets/CategoryImage/cat-4.png";
import friut from "../../assets/CategoryImage/cat-3.png";
import bdfruit from "../../assets/CategoryImage//cat-2.png";
import vagetable from "../../assets/CategoryImage/cat-1.png";

const Categoris = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      // fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  // get only all categoryname
  const allCategory = products?.map((product) => product.category);
  //   console.log(allCategory);
  // get only unique categoryname
  const uniqueCategory = [...new Set(allCategory)];
  //   console.log(uniqueCategory);

  // name wise category length
  const categoryLength = uniqueCategory.map((category) => {
    const categoryProduct = products.filter(
      (product) => product.category === category
    );
    return categoryProduct.length;
  });
  //   console.log(categoryLength);

  const categoryData = [
    {
      id: 1,
      name: uniqueCategory[0],
      image: snacks,
      length: categoryLength[0],
      bg: "bg-[#F2FCE4]",
    },
    {
      id: 2,
      name: uniqueCategory[1],
      image: hodofoods,
      length: categoryLength[1],
      bg: "bg-[#FFFCEB]",
    },
    {
      id: 3,
      name: uniqueCategory[2],
      image: friut,
      length: categoryLength[2],
      bg: "bg-[#ECFFEC]",
    },
    {
      id: 4,
      name: uniqueCategory[3],
      image: bdfruit,
      length: categoryLength[3],
      bg: "bg-[#FEEFEA]",
    },
    {
      id: 5,
      name: uniqueCategory[4],
      image: vagetable,
      length: categoryLength[4],
      bg: "bg-[#FFF3FF]",
    },
  ];
  //   console.log(uniqueCategory);

  return (
    <div className="px-5 ">
      <h1 className="text-[#253D4E] font-semibold text-[32px]">
        Featured Categories
      </h1>

      <div
        className="
        grid gap-6 grid-cols-3 md:grid-cols-5 lg:grid-cols-5  pt-36 "
      >
        {categoryData.map((category) => (
          <CategoryCart key={category.id} category={category}></CategoryCart>
        ))}
      </div>
    </div>
  );
};

export default Categoris;
