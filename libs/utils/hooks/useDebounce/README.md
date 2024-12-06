# useDebounce Hook

## Description
`useDebounce` is a custom React hook that debounces a fast changing value. The hook returns a debounced value that only updates once the specified delay time has passed without the source value changing. This can be useful in various scenarios such as rate limiting search input to reduce API calls, delaying resize events to improve performance, and more.

## Why useDebounce?

In many web applications, it's common to have events that fire more frequently than we'd like. For example, a user typing in a search box or resizing the browser window. If we try to handle these events immediately as they occur, it can lead to performance issues. 

Debouncing is a technique where we add a delay to these rapidly firing events and only execute the event handler after the event has stopped firing for a certain period of time. This hook abstracts the debouncing logic, making it reusable across different components.

## Installation

```sh
npm install @your-org/debounce-hook

or 

yarn add @your-org/debounce-hook
```

## Usage 

```javascript
import useDebounce from '@your-org/debounce-hook';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform the search
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

// In this example, the SearchComponent component uses the useDebounce hook to debounce the search term.
// The search is only performed when the user has stopped typing for 500 milliseconds.
```