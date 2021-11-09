import ReactFlow from "react-flow-renderer";

const elements = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 350, y: 75 },
    draggable: false
  },
  {
    id: "2",
    data: { label: <div>Default Node</div> },
    position: { x: 75, y: 75 },
  },
  {id:"e1-2", source: "1", target: "2", animated: true},
  {id:"e2-3", source:"2", target:"1", animated: true}
];

export default function FDiagram()  {
    return(
    <div style={{ height: 300}}>
        <ReactFlow elements={elements}/>
    </div>
)}