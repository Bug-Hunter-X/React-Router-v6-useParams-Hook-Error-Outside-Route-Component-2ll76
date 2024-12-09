The `useParams` hook should always be used within a component that is rendered by a `<Route>` or `<Routes>` component. Here's how you should structure your code:
```javascript
import { Routes, Route, useParams } from 'react-router-dom';

function MyComponent() {
  let { id } = useParams();
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/products/:id" element={<MyComponent />} />
    </Routes>
  );
}
```
This approach ensures that the `useParams` hook has access to the route parameters within the correct context.