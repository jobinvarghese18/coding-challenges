import { useState } from "react";
import "./App.css";

interface Entry {
  id: number;
  name: string;
  isOpen: boolean;
  children?: Array<Entry>;
}

interface Props {
  entry: Entry;
  depth: number;
}
const Entry = ({ entry, depth }: Props) => {
  console.log(entry.name, "name");
  const [expanded, setIsExpanded] = useState(false);
  return (
    <div onClick={() => setIsExpanded(!expanded)}>
      <div className="list-item" style={{ paddingLeft: `${depth * 20}px` }}>
        {">"} {entry.name}
      </div>
      {entry.children?.map((entry) => {
        return (
          <div key={entry.id}>
            {entry && <Entry entry={entry} depth={depth + 1} />}
          </div>
        );
      })}
    </div>
  );
};
function App() {
  const [data] = useState<Array<Entry>>([
    {
      id: 1,
      name: "nodemoduels",
      isOpen: false,
      children: [
        { id: 11, name: "package 1", isOpen: false },
        { id: 12, name: "package 2", isOpen: false },
      ],
    },
    {
      id: 2,
      name: "src",
      isOpen: false,
      children: [
        {
          id: 21,
          name: "components",
          isOpen: false,
          children: [{ id: 22, name: "Table", isOpen: false }],
        },
        {
          id: 24,
          name: "pages",
          isOpen: false,
          children: [{ id: 25, name: "Home", isOpen: false }],
        },
      ],
    },
    {
      id: 3,
      name: "main.tsx",
      isOpen: false,
    },
    {
      id: 4,
      name: "index.css",
      isOpen: false,
    },
  ]);

  return (
    <div>
      {data.map((item) => {
        return <Entry key={item.id} entry={item} depth={0} />;
      })}
    </div>
  );
}

export default App;
