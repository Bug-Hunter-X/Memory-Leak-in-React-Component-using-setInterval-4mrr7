```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect use of setInterval without cleanup
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```