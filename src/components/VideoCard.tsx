import React from "react";
import { Link } from "react-router-dom";
import { roundFormatter } from "../utils/numberFormat";
import { ItemsList } from "../utils/types";
interface VideoCardProps {
  item: ItemsList;
}
const VideoCard: React.FC<VideoCardProps> = ({ item }) => {
  const titleLength = 50;
  return (
    <Link to={`/watch?v=${item.id}`} className="h-auto">
      <div key={item.id} className="p-1 cursor-pointer box-content">
        <div className="p-2 mt-3 w-72 hover:scale-105">
          <img
            className="rounded-lg object-fill"
            src={item.snippet.thumbnails.high.url}
            alt={item.snippet.localized.title}
          />
          <p className="mt-2 font-serif font-medium text-md">
            {item.snippet.localized.title.substring(0, titleLength)}
            {item.snippet.localized.title.length > titleLength && "..."}
          </p>
          <p className="mt-1 font-serif text-gray-500">
            {item.snippet.channelTitle}
          </p>
          <p className="mt-1 font-sans text-gray-500">
            {roundFormatter(+item.statistics.viewCount)}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default VideoCard;
