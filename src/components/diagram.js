import { TrafficMap } from "react-network-diagrams/lib/components/TrafficMap";

function TraffMap() {
  
  

  const edgeThickness = {
    "100G": 5,
    "40G": 4,
    "10G": 4,
    "1G": 3,
    "100M": 2,
    subG: 1,
  };

  const pathColorMap = {
    first: "#68E32D",
    second: "#ffffff"
  }
  const edgeColorMap = [
    {color: "#990000"}]
  
  const topology = {
    name: "desc",
    nodes: [
      {
        name: "A",
        type: "endpoint",
        x: 25,
        y: 50,
        label_position: "top",
      },
      {
        name: "B",
        type: "endpoint",
        x: 75,
        y: 50,
        label_position: "top",
      },
    ],
    edges: [{ capacity: "100G", source: "A", target: "B" }],
     paths: [
      { name: "first", steps: ["A", "B"] },
      { name: "second", steps: ["B", "A"] },
    ], 
  };

  const stylesMap = {
    pathLabel: {
      node: {
        normal: { display: "none" },
        selected: { display: "none" },
        muted: { display: "none" },
      },
      label: {
        normal: { fill: "#696969", fontSize: 11 },
        selected: { fill: "#333", fontSize: 11 },
        muted: { fill: "#696969", fontSize: 9, opacity: 0.6 },
      },
    },
    connector: {
      node: {
        normal: { fill: "#B0B0B0", stroke: "#B0B0B0" },
        selected: {
          fill: "#37B6D3",
          stroke: "rgba(55, 182, 211, 0.22)",
          strokeWidth: 10,
        },
        muted: {
          fill: "#B0B0B0",
          stroke: "#ff0000",
          opacity: 0.6,
        },
      },
      label: {
        normal: { fill: "#696969", fontSize: 11 },
        selected: { fill: "#333", fontSize: 11 },
        muted: { fill: "#696969", fontSize: 9, opacity: 0.6 },
      },
    }, 
  }; 

  
  return (
    <figure className="network-topology">
      <TrafficMap
        bounds = {{ x1: 0, y1: 0, x2: 100, y2: 100 }}
        topology={topology}
        showPaths={true}
        edgeThicknessMap={edgeThickness}
        edgeDrawingMethod="pathBidirectionalArrow"
        stylesMap={stylesMap}
        pathColorMap={pathColorMap}
        
      />
    </figure>
  );
}

export default TraffMap;
