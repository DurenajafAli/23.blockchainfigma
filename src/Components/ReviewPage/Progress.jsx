import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Progress({val}) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < val) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage , val]);

  return (
    <div style={{ textAlign: "center" }}>
      {/* <h4>Circular progress bar in React </h4> */}
      <div style={{ width: 150, marginLeft: 80,marginTop:20 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </div>
  );
}
export default Progress;
