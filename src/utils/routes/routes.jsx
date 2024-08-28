import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import {
  CardShimmer,
  RestCardInfoShimmer,
} from "../../components/common/CardShimmer";
import ComponentError from "../../components/common/ComponentError";
import Contact from "../../components/layout/pages/Contact";
import {
  AboutComponent,
  AppLayoutComponent,
  CartComponent,
  ContentComponent,
  RestMenuComponent,
} from "./lazyComponents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<CardShimmer />}>
        <AppLayoutComponent />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<CardShimmer />}>
            <ContentComponent />
          </Suspense>
        ),
        errorElement: <ComponentError />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<RestCardInfoShimmer />}>
            <AboutComponent />
          </Suspense>
        ),
        errorElement: <ComponentError />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ComponentError />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<RestCardInfoShimmer />}>
            <CartComponent />
          </Suspense>
        ),
        errorElement: <ComponentError />,
      },
      {
        path: "/restaurants/:restId",
        element: (
          <Suspense fallback={<RestCardInfoShimmer />}>
            <RestMenuComponent />
          </Suspense>
        ),
        errorElement: <ComponentError />,
      },
    ],
    errorElement: <ComponentError />,
  },
]);
