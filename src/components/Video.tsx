import { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import { useSearchParams } from "react-router-dom";
import { roundFormatter } from "../utils/numberFormat";
import { ChannelInfo, CommentThreadInfo, VideoInfo } from "../utils/types";
import SuggestedVideos from "./SuggestedVideos";

const Video = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [data, setData] = useState<VideoInfo>();
  const [comments, setComments] = useState<CommentThreadInfo[]>([]);
  const [channelInfo, setChannelInfo] = useState<ChannelInfo>();
  const [charLength, setCharLength] = useState(250);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${process.env.REACT_APP_NEW_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setComments(data.items));
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${process.env.REACT_APP_NEW_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data.items[0]);
          fetch(
            `https://youtube.googleapis.com/youtube/v3/channels?id=${data.items[0].snippet.channelId}&part=snippet&part=statistics&regionCode=IN&key=${process.env.REACT_APP_NEW_API_KEY}`
          )
            .then((response) => response.json())
            .then((data) => setChannelInfo(data.items[0]));
        });
    };
    fetchData();
  }, []);

  const playSuggestVideo = (videoId: string) => {
    window.location.href = `/watch?v=${videoId}`;
  };

  return (
    <div className="grow h-screen flex flex-row flex-wrap justify-start md:ml-24 m-default">
      <div className="primary h-5/6 lg:w-8/12 min-md:w-11/12">
        <iframe
          className="w-full h-full mb-3"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        ></iframe>
        <h1>{data && data.snippet.localized.title}</h1>
        {channelInfo && (
          <div className="flex mt-3 mb-10 md:flex-row max-lg:flex-col justify-between">
            <div className="flex ">
              <div className="w-px-40 h-px mr-2">
                <img
                  className="h-40px"
                  src={channelInfo.snippet.thumbnails.default.url}
                  alt={channelInfo.snippet.localized.title
                    .charAt(0)
                    .toLocaleUpperCase()}
                />
              </div>
              <div>
                <h1 className="font-semibold">
                  {channelInfo.snippet.localized.title}
                </h1>
                <h3 className=" text-xs text-gray-500 font-sans">
                  {roundFormatter(channelInfo.statistics.subscriberCount) +
                    ` Subscribers`}
                </h3>
              </div>
              <button
                type="reset"
                className="rounded-2xl bg-black text-white py-2 px-4 ml-3 text-sm"
              >
                {" "}
                Subscribe
              </button>
            </div>
            <div className="flex max-md:mt-3 max-lg:mt-0">
              <div className="rounded-2xl px-2 bg-slate-100 flex justify-center items-center py-2">
                <span>
                  <AiOutlineLike className="text-xl justify-center content-center cursor-pointer" />
                </span>
                <span className="text-sm font-semibold">
                  {data && roundFormatter(+data.statistics.likeCount)}
                </span>
                <RxDividerVertical className=" font-thin text-gray-400 text-2xl" />
                <BiDislike className="text-2xl cursor-pointer text-large" />
              </div>
              <div className="rounded-2xl px-2 bg-slate-100 flex justify-center items-center mx-3">
                <RiShareForwardLine className="text-2xl cursor-pointer" />
                <span className="text-sm">Share</span>
              </div>
              <div className="rounded-2xl px-2 bg-slate-100 flex justify-center items-center">
                <BiDotsHorizontalRounded className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
        )}
        <div className=" bg-slate-100 text-md font-serif text-justify overflow-hidden p-3 rounded-lg">
          {data?.snippet.description.substring(0, charLength)}
          {data && data.snippet.description.length > charLength ? (
            <span
              className="font-semibold cursor-pointer pl-3"
              onClick={() =>
                setCharLength(data && data.snippet.description.length)
              }
            >
              Show more...
            </span>
          ) : (
            <span
              className="font-semibold cursor-pointer pl-3"
              onClick={() => setCharLength(250)}
            >
              Show less...
            </span>
          )}
        </div>

        {comments &&
          comments.map((comment) => {
            return (
              <div className="flex mt-4" key={comment.id}>
                <img
                  className="h-40px rounded-full"
                  src={
                    comment.snippet.topLevelComment.snippet
                      .authorProfileImageUrl
                  }
                  alt={comment.snippet.topLevelComment.snippet.authorDisplayName
                    .charAt(0)
                    .toLocaleUpperCase()}
                />
                <div className="flex flex-col pl-3 ">
                  <div className="flex items-center pb-2">
                    <span className="font-semibold">
                      {
                        comment.snippet.topLevelComment.snippet
                          .authorDisplayName
                      }
                    </span>
                    <span className=" font-serif text-sm ml-3 text-slate-500">
                      {new Date(
                        comment.snippet.topLevelComment.snippet.updatedAt
                      ).toDateString()}
                    </span>
                  </div>
                  <span>
                    {comment.snippet.topLevelComment.snippet.textDisplay}
                  </span>
                  <div className="flex items-center py-3">
                    <AiOutlineLike className="text-xl justify-center content-center cursor-pointer" />
                    <BiDislike className="text-2xl cursor-pointer text-large mx-2" />
                    <span className="text-md cursor-pointer">Reply</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="secondary lg:w-4/12 md:w-11/12">
        <SuggestedVideos
          playSuggestVideo={playSuggestVideo}
          videoId={videoId ?? ""}
        />
      </div>
    </div>
  );
};
export default Video;
