import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  vaccine,
  cases,
  deaths,
  recovered,
  time,
} from "../../constants/virusInfo"; // keys to Lines

const CustomLabel = ({ fill, label, viewBox }) => {
  const { cx, cy } = { viewBox };
  return (
    <text
      x={cx}
      y={cy}
      textAnchor="middle"
      dominantBaseline="central"
      fill={fill}
      className="recharts-text recharts-label"
      // transform="rotate(270, 43, 243)"
    >
      <tspan fontSize="14" x={cx} dy={243}>
        {label}
      </tspan>
    </text>
  );

  // const CustomLabel = ({ fill, label, viewBox }) => {
  //   const [cx, cy] = [43, 243];
  //   // const { cx, cy } = {viewBox};
  //   return (
  //     <text
  //       text-anchor="end"
  //       width="30"
  //       transform="rotate(270, 43, 243)"
  //       offset="5"
  //       x={cx}
  //       y={cy}
  //         style={{
  //                   textAnchor: "middle",
  //                   fill: fill,
  //                 }}
  //       // fill={fill}
  //       // text-anchor="end"
  //       className="recharts-text recharts-label"
  //       // textAnchor="middle"
  //       // dominantBaseline="central"
  //     >
  //       <tspan x={cx} dy="-1.5em">
  //         {label}
  //       </tspan>
  //     </text>
  //   );

  //  <Label
  //               angle={270}
  //               position="left"
  //                style={{
  //                 // "& .recharts-label > tspan": ,
  //                 // // position: "absolute",
  //                 // // left: "100px",
  //                 textAnchor: "middle",
  //                 fill: fill,
  //               }}
  //             >
  //               People
  //             </Label>
};

// const CustomizedDot = (props) => {
//   const { cx, cy, stroke, payload, value } = props;

//   console.log(stroke);
//   console.log(payload);
//   console.log(value);
//   console.log(cx);
//   console.log(cy);
//   // if (value > 2500) {
//   //   return (
//   //     <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="red" viewBox="0 0 1024 1024">
//   //       <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
//   //     </svg>
//   //   );
//   // }

//   return (
//     <svg
//       x={cx - 10}
//       y={cy - 10}
//       width={20}
//       height={20}
//       fill="green"
//       viewBox="0 0 1024 1024"
//     >
//       <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
//     </svg>
//   );
// };

const lineType = "monotone";
export default function Chart({ chartData, lineKeys, wrapperClass }) {
  const theme = useTheme();

  return (
    // <div
    //   style={{
    //     // display: "flex",
    //     width: "70vw",
    //     height: "70vh",
    //     // height: "70%",
    //     // maxHeight: "70%",
    //   }}
    // >
    <ResponsiveContainer className={wrapperClass}>
      <LineChart
        data={chartData}
        margin={{
          top: 16,
          right: 16,
          bottom: 0,
          left: 48,
        }}
      >
        <XAxis dataKey={time} stroke={theme.palette.text.secondary} />
        <YAxis stroke={theme.palette.text.secondary}>
          {/* <Label
                // width={230}
                angle={270}
                position="left"
                style={{
                  textAnchor: "middle",
                  fill: theme.palette.text.primary,
                }}
                // content={
                //   <CustomLabel
                //     fill={theme.palette.text.primary}
                //     label={"People"}
                //   />
                // }
              >
                People
              </Label> */}
          {/* <CustomLabel fill={theme.palette.text.primary} label={"People"} /> */}
        </YAxis>
        <Tooltip />
        {lineKeys[cases] && (
          <Line
            isAnimationActive={false}
            type={lineType}
            dataKey={cases}
            stroke={"red"}
            // dot={<CustomizedDot />}
          />
        )}
        {lineKeys[vaccine] && (
          <Line
            isAnimationActive={false}
            type={lineType}
            dataKey={vaccine}
            stroke={theme.palette.primary.main}
            // dot={false}
          />
        )}
        {lineKeys[recovered] && (
          <Line
            isAnimationActive={false}
            type={lineType}
            dataKey={recovered}
            stroke={"green"}
            // dot={false}
          />
        )}
        {lineKeys[deaths] && (
          <Line
            isAnimationActive={false}
            type={lineType}
            dataKey={deaths}
            stroke={"black"}
            // dot={false}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}
