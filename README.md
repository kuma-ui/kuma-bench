# Kuma UI Performance Benchmark

This aims to compare the rendering performance between a Kuma UI Button component and a regular HTML <button> element. The Kuma UI theoretically should be able to match the performance of raw HTML and CSS since it compiles components with only static styles to raw HTML at build time.

## Experiment Setup
We prepared two components that look exactly the same. One is created using a raw <button> element with class name applied for styling, and the other utilizes the Kuma Button component with direct styling applied.

## Results
The results are quite encouraging, demonstrating that the Kuma UI button does not lag behind the raw button in terms of performance. Here are the average render times for both components:

- Normal Button: 0.013800 ms
- Kuma UI Button: 0.009200 ms

This shows that the Kuma UI button component performs at a comparable level to a native HTML button, which is quite an achievement.

## Setup

```sh
pnpm i && pnpm build
```

This will install the necessary dependencies and build the project, setting it up for the benchmark tests.