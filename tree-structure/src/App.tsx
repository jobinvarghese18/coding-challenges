import "./App.css";

function App() {
  const data = [
    {
      name: "nodemoduels",
      children: [{ name: "package 1" }, { name: "package 2" }],
    },
    {
      name: "src",
      children: [
        { name: "components", children: [{ name: "Table" }] },
        { name: "pages", children: [{ name: "Home" }] },
      ],
    },
    {
      name: "main.tsx",
    },
    {
      name: "index.css",
    },
  ];
  return <></>;
}

export default App;
