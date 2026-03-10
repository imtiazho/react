import React from "react";
import "./ProgressCircle.css";

const ProgressCircle = ({ percentage = 0, size = 40, strokeWidth = 4 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (percentage / 100) * circumference;
  const color = percentage > 70 ? "green" : percentage > 40 ? "orange" : "red";

  return (
    <div className="progress-container" style={{ width: size, height: size }}>
      <svg className="svgCircle" width={size} height={size}>
        <circle
          className="progress-bg"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        <circle
          className="progress-bar"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>

      <div className="progress-text">{percentage}%</div>
    </div>
  );
};

export default ProgressCircle;
