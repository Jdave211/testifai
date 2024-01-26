import React from 'react';

const ScoreCircle = ({ percentageGrade }) => {
    const getColor = (score) => {
        const red = Math.round(255 - (score * 255) / 100);
        const green = Math.round((score * 255) / 100);
        return `rgb(${red}, ${green}, 0)`;
      };

      const circleStyle = {
        background: getColor(percentageGrade),
      };


      return (
        <div className="flex items-center justify-center mt-5">
          <div className="relative w-40 h-40 rounded-full flex items-center justify-center font-bold text-white" style={circleStyle}>
            <div className="z-10 text-2xl">{percentageGrade}%</div>
          </div>
        </div>
      );
    };

export default ScoreCircle;


