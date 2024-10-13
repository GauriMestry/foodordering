import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import { store } from "./redux/store";
import { GlobalThemeConfig } from "./theme/Theme";
import UserContext from "./utils/context/UserContext";
import { router } from "./utils/routes/routes";

function App() {
  const queryClient = new QueryClient();
  const [userName, setUserName] = useState({});

  useEffect(() => {
    const data = {
      name: "Gauri Mestri",
    };
    setUserName(data?.name);
  }, []);

  return (
    <ConfigProvider theme={GlobalThemeConfig}>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{ loaggedInUser: userName }}>
          <Provider store={store}>
            <RouterProvider router={router}>
              <AppLayout />
            </RouterProvider>
          </Provider>
        </UserContext.Provider>
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
