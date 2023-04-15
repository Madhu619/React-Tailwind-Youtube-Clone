import React, { useEffect, useState } from "react";
import { roundFormatter } from "../utils/numberFormat";
import { ItemsList, SuggestionList, VideoInfo } from "../utils/types";
import LoadingBlock from "./shared/LoadingBlock";

interface SuggestedVideosProps {
  videoId: string;
  playSuggestVideo: (videoId: string) => void;
}

const SuggestedVideos: React.FC<SuggestedVideosProps> = ({
  videoId,
  playSuggestVideo,
}) => {
  const [suggestion, setSuggestion] = useState<SuggestionList[]>([]);
  const [videoData, setVideoData] = useState<VideoInfo>();
  const titleLength = 50;

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&order=viewCount&region=IN&relatedToVideoId=${videoId}&type=video&key=${process.env.REACT_APP_NEW_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setSuggestion([]);
          } else {
            setSuggestion(data.items);
          }
        })
        .catch((err) => setSuggestion([]));
    };
    fetchData();
  }, []);

  if (suggestion.length === 0) {
    return <LoadingBlock />;
  }

  return (
    <>
      {suggestion.map((suggest) => (
        <div
          onClick={() => playSuggestVideo(suggest.id.videoId)}
          key={suggest.id.videoId}
          className="px-1 cursor-pointer box-content flex w-full"
        >
          <div className="px-2 mb-3 flex">
            <img
              className="rounded-lg object-fill  h-32 w-3/4 max-lg:h-40 max-lg:w-11/12"
              src={suggest.snippet.thumbnails.high.url}
              alt={suggest.snippet.title}
            />
            <div className="pl-3">
              <h3 className="mt-2 font-serif font-bold text-md">
                {suggest.snippet.title.substring(0, titleLength)}
                {suggest.snippet.title.length > titleLength && "..."}
              </h3>
              <p className="mt-1 font-serif text-gray-500">
                {suggest.snippet.channelTitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SuggestedVideos;
