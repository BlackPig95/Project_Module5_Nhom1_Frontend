import  { Suspense } from 'react'
import { RouterProvider } from "react-router-dom";
import routes from './routes';
import Loading from './components/clientComponents/Loading';
export default function App() {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <RouterProvider router={routes} />
      </Suspense>
    </>
  );
}
