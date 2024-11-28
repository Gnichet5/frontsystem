import React, { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function Objeto() {
  const splineRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault(); 
    };

    const splineElement = splineRef.current;
    if (splineElement) {
      splineElement.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (splineElement) {
        splineElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="spline-container" ref={splineRef} style={{ width: "100%", height: "100%", overflow: 'hidden',}}>
      <Spline scene="https://prod.spline.design/ZlqNStoLW06FAGgG/scene.splinecode" />
    </div>
  );
}