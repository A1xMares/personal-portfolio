import { useEffect, useRef, useState } from "react";

const AnimationSequence = ({ children, showedArea }) => {
  const [animationState, setAnimationState] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elRef.current.getBoundingClientRect().top - showedArea[1] < 0)
      setAnimationState(true);
  }, [showedArea]);

  return (
    <div
      ref={elRef}
      className={`delay-3 ${animationState ? "fadeInBottom" : "fadeInUnseen"}`}
    >
      {children}
    </div>
  );
};

export default AnimationSequence;
