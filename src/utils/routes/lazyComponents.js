import { lazy } from "react";

export const AppLayoutComponent = lazy(() =>
  import("../../components/layout/AppLayout")
);

export const ContentComponent = lazy(() =>
  import("../../components/layout/Content")
);

export const AboutComponent = lazy(() =>
  import("../../components/layout/pages/About")
);

export const CartComponent = lazy(() =>
  import("../../components/layout/pages/Cart")
);

export const RestMenuComponent = lazy(() =>
  import("../../components/layout/pages/RestMenu")
);
