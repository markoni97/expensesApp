import React from "react";

import classes from "./Chart.module.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  //Reduces the array to a single value. Calculates the total value
  const totalMaximum = dataPointValue.reduce((acumulator, currentValue) => {
    return acumulator + currentValue;
  });

  return (
    <div className={classes.Chart}>
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            label={dataPoint.label}
            maxValue={totalMaximum}
          />
        );
      })}
    </div>
  );
};

export default Chart;
