import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  LabelList,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";
import * as RAWGApi from "../../../services/rawg-api";
import { useEffect } from "react";


const colors = [
  "rgb(255, 231, 77)", 
  "rgb(190, 255, 77)", 
  "rgb(101, 255, 77)", 
  "rgb(77, 255, 142)", 
  "rgb(77, 255, 231)", 
  "rgb(77, 190, 255)", 
  "rgb(77, 101, 255)", 
  "rgb(227, 46, 46)", 
  "rgb(227, 137, 46)", 
  "rgb(164, 46, 227)", 
  "rgb(227, 46, 199)", 
  "rgb(227, 46, 109)", 
  "rgb(200, 227, 46)", 
  "rgb(160, 125, 115)", 
  "rgb(160, 147, 115)", 
  "rgb(78, 117, 87)", 
  "rgb(36, 88, 132)", 
  "rgb(91, 122, 44)", 
  "rgb(44, 91, 122)"]

function ScatterChartComponent(genres) {
  genres = genres.data;

  return (
    <ResponsiveContainer width="100%" height={250}>
      <ScatterChart 
        margin={{
          top: 15,
          right: 15,
          bottom: 15,
          left: 15,
        }}
      >
        <XAxis hide="true" type="number" dataKey="x" domain={[0, "dataMax + 75000"]} />
        <YAxis hide ="true" type="number" dataKey="y" domain={[0, "dataMax + 75000"]} />
        <ZAxis type="number" dataKey="gamesCount" range={[500, 20000]}/>
        <Tooltip />
        <Scatter data={genres} shape="circle">
          <LabelList dataKey="name" position="center"/>
          {/* {genres.map((genre, i) => {
            return <Cell key={`cell-${i}`} fill={colors[Math.floor(Math.random() * colors.length - 1)]} label/>
          })} */}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default ScatterChartComponent;