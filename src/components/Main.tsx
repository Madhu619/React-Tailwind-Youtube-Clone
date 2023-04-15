import React, { useCallback, useEffect, useState } from "react";
import { ItemsList } from "../utils/types";
import Categories from "./Categories";
import NotAvailable from "./NotAvailable";
import LoadingBlock from "./shared/LoadingBlock";
import VideoCard from "./VideoCard";

const Main: React.FC = () => {
  const [data, setData] = useState([]);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN${
        categoryId !== null ? `&videoCategoryId=` + categoryId : ""
      }&key=${process.env.REACT_APP_NEW_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        debugger;
        if (data.error) {
          setLoading(false);
          setData([]);
        } else {
          setData(data.items);
          setLoading(false);
        }
      });
  }, [categoryId]);

  const updateCategories = useCallback((categoryId: string) => {
    setCategoryId(categoryId);
  }, []);

  useEffect(() => {
    setLoading(!loading);
    fetchData();
  }, [categoryId]);

  if (loading) {
    return (
      <div className=" flex justify-center items-center h-full">
        <LoadingBlock />
      </div>
    );
  }
  return (
    <div className="flex flex-col flex-wrap  ml-24 ">
      <Categories updateCategory={updateCategories} />
      {data.length == 0 ? (
        <NotAvailable />
      ) : (
        <div className=" flex flex-row flex-wrap justify-around ...">
          {data.map((item: ItemsList) => {
            return <VideoCard key={item.id} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};
export default Main;
