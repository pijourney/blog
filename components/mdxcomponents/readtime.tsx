import { useEffect, useState } from "react";
export type ReadTimeProps = {
  text: string;
};
export const ReadTime = ({ text }: ReadTimeProps) => {
  const [readingTime, setReadingTime] = useState<number>();

  const calculateTime = (text: string) => {
    const wpm = +(process.env.WPM || 225);

    const words = text ? text.trim().split(/\s+/).length : 0;
    const time = Math.ceil(words / wpm);
    return time;
  };
  useEffect(() => {
    setReadingTime(calculateTime(text));
  }, [text]);

  return (
    <div id="time" className="absolute top-0 right-5">
      {readingTime} min read
    </div>
  );
};
