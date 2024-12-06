# useThrottle Hook

## Description
`useThrottle` is a custom React hook that throttles a fast changing value. The hook returns a throttled value that only updates at most once every specified delay time. This can be useful in various scenarios such as limiting the frequency of API calls, reducing the number of resize event handlers to improve performance, and more.

## Why useThrottle?

In many web applications, it's common to have events that fire more frequently than we'd like. For example, a user moving a slider or resizing the browser window. If we try to handle these events immediately as they occur, it can lead to performance issues. 

Throttling is a technique where we limit the frequency of these rapidly firing events and only execute the event handler at most once every certain period of time. This hook abstracts the throttling logic, making it reusable across different components.

## Installation

```sh
npm install @your-org/throttle-hook

or 

yarn add @your-org/throttle-hook
```

## Usage

```javascript  
import useThrottle from '@your-org/throttle-hook';

function SliderComponent() {
  const [value, setValue] = useState(0);
  const throttledValue = useThrottle(value, 500);

  useEffect(() => {
    // Perform an action with the throttled value
  }, [throttledValue]);

  return (
    <input
      type="range"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// In this example, the SliderComponent component uses the useThrottle hook to throttle the slider value.
// The action is only performed at most once every 500 milliseconds.
```