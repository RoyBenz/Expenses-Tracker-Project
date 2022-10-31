import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const arrayVal = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maXxVal = Math.max(...arrayVal);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maXxVal}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
