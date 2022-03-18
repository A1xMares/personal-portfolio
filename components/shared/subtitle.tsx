import { useEffect, useRef, useState } from "react";

const Subtitle = ({ showedArea, preffix, text }) => {
  const [underlineState, setUnderlineState] = useState(false);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (underlineRef.current.getBoundingClientRect().top - showedArea[1] < 0)
      setUnderlineState(true);
  }, [showedArea]);

  return (
    <>
      <h2 className="font-bold text-4xl pr-4">
        <span className="accent-1 text-xl">{preffix} </span>
        {text}
      </h2>
      <div
        className={`mt-3 h-1 rounded-md bg-accent-1 transition-all ease-out duration-1000 delay-500	${
          underlineState ? "w-full" : "w-0"
        }`}
        ref={underlineRef}
      ></div>
    </>
  );
};

export default Subtitle;
