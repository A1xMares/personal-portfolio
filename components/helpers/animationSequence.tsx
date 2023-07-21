import { useEffect, useRef, useState } from "react";

interface AnimationSequenceProps {
  children: any;
  showedArea: any;
  animation?: string;
  parentClass?: string;
}

const AnimationSequence = ({
  children,
  showedArea,
  animation,
  parentClass,
}: AnimationSequenceProps) => {
  const [animationState, setAnimationState] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      elRef.current.getBoundingClientRect().top - showedArea[1] < 0 &&
      !animationState
    )
      setAnimationState(true);
  }, [showedArea, animationState]);

  return (
    <div
      ref={elRef}
      className={`delay-3 ${parentClass ? parentClass : ""} ${
        animationState
          ? animation
            ? animation
            : "fadeInBottom"
          : "fadeInUnseen"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimationSequence;
