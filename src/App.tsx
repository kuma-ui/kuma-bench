import { useState, type FC } from "react";
import { Runner } from "./Runner";
import { Button as KumaButton } from "@kuma-ui/core";
import "./button.css";

const NormalButtonTest: FC<{ testIndex: number }> = ({ testIndex }) => {
  return <button className="button">{`normal ${testIndex}`}</button>;
};

const KumaButtonTest: FC<{ testIndex: number }> = ({ testIndex }) => {
  return (
    <KumaButton
      borderRadius="14px"
      p="16px 32px"
      fontWeight="600"
      bg="#576ddf"
      color="white"
      _hover={{
        opacity: 0.8,
      }}
    >{`Kuma ${testIndex}`}</KumaButton>
  );
};
function App() {
  const [rerender, setRerender] = useState(false);
  const [results, setResults] = useState<any>([]);
  const handleResults = (componentName, averageDuration) => {
    console.log(
      `Average render time of ${componentName}: ${averageDuration.toFixed(
        6
      )} ms`
    );
    if (results.length < 2) {
      setResults((results) => [...results, { componentName, averageDuration }]);
    }
  };

  return (
    <div>
      <h1>Benchmark Test</h1>
      {results.map((result, index) => (
        <p key={index}>
          {result.componentName}: {result.averageDuration.toFixed(6)} ms
        </p>
      ))}
      <Runner
        TestComponent={NormalButtonTest}
        numberOfRuns={10}
        iterationN={100}
        componentName="Normal Button"
        onResults={handleResults}
      />

      <Runner
        TestComponent={KumaButtonTest}
        numberOfRuns={10}
        iterationN={100}
        componentName="Kuma UI Button"
        onResults={handleResults}
      />
    </div>
  );
}

export default App;
