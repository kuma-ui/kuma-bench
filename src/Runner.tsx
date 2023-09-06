import React, { Profiler } from "react";

type ComponentProps = {
  testIndex: number;
};

type RunnerProps = {
  TestComponent: React.FC<ComponentProps>;
  numberOfRuns: number;
  iterationN: number;
  componentName: string;
  onResults: (componentName: string, averageDuration: number) => void;
};

export const Runner: React.FC<RunnerProps> = ({
  TestComponent,
  numberOfRuns,
  iterationN,
  componentName,
  onResults,
}) => {
  const iterationResults: Array<number> = [];

  const handleProfilerData = (
    id: string,
    phase: string,
    actualDuration: number
  ) => {
    iterationResults.push(actualDuration);
    if (iterationResults.length === iterationN * numberOfRuns) {
      const averageDuration =
        iterationResults.reduce((acc, cur) => acc + cur, 0) /
        iterationResults.length;
      onResults(componentName, averageDuration);
    }
  };

  const renderTests = () => {
    let testElements = [];
    for (let i = 0; i < numberOfRuns; i++) {
      for (let j = 0; j < iterationN; j++) {
        testElements.push(
          <Profiler
            key={`${i}-${j}`}
            id={`test-${i}-${j}`}
            onRender={handleProfilerData}
          >
            <TestComponent testIndex={j} />
          </Profiler>
        );
      }
    }
    return testElements.map((testElement) => testElement);
  };

  return <>{renderTests()}</>;
};
