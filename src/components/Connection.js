import { Connection } from "react-network-diagrams/lib/components/Connection";

function Connect() {
  const style = {
    node: {
      normal: { fill: "none", stroke: "#DBDBDB", strokeWidth: 4 },
      selected: { fill: "none", stroke: "#B1B1B1", strokeWidth: 6 },
      muted: {
        fill: "none",
        stroke: "#DBDBDB",
        strokeWidth: 2,
        opacity: 0.6,
        cursor: "pointer",
      },
    },
    label: {
      normal: {
        fill: "#9D9D9D",
        fontSize: 10,
        fontFamily: "verdana, sans-serif",
      },
      selected: { fill: "#333", stroke: "none", fontSize: 11 },
      muted: { fill: "#696969", stroke: "none", fontSize: 9, opacity: 0.6 },
    },
    line: {
      normal: {
        fill: "#9D9D9D",
        fontSize: 10,
        fontFamily: "verdana, sans-serif",
      },
      selected: { fill: "#333", stroke: "none", fontSize: 11 },
      muted: { fill: "#696969", stroke: "none", fontSize: 9, opacity: 0.6 },
      highlighted: true,
    },
  };
  return (
    <svg style={{ width: 500 }}>
      <Connection
        x1={100}
        y1={50}
        x2={300}
        y2={50}
        lineShape="linear"
        label="ALBQ-DENV"
        style={style}
        muted={false}
        selected={false}
        radius={10}
        endpointShape="circle"
        navTo={2}
      />
    </svg>
  );
}
export default Connect;
