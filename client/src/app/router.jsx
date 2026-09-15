import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../layout/PublicLayout";
import NotFoundPage from "./NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: (
          <main className="section">
            <div className="container">
              <h1>CyberX Soft</h1>
            </div>
          </main>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);