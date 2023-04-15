import React, { useEffect, useState } from "react";
import { CategoriesList } from "../utils/types";

interface CategoriesProps {
  /**
   * Callback function to update the main page videos
   * @param categoryId
   * @returns
   */
  updateCategory: (categoryId: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ updateCategory }) => {
  const [categories, setCategories] = useState<CategoriesList[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=In&key=${process.env.REACT_APP_NEW_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setCategories([]);
          } else {
            setCategories(data.items);
          }
        })
        .catch((err) => setCategories([]));
    };
    fetchData();
  }, []);
  if (categories.length === 0) {
    return <></>;
  }
  return (
    <div className="flex flex-row flex-nowrap overflow-y-auto no-scrollbar w-full whitespace-nowrap bg-scroll">
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => updateCategory(category.id)}
          className=" bg-slate-100 inline-block p-2 mb-3 px-3 m-2 rounded-2xl cursor-pointer h-10 "
        >
          {category.snippet.title.toString()}
        </div>
      ))}
    </div>
  );
};
export default Categories;
