import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/layout/AppLayout";
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
          <RouterProvider router={router}>
            <AppLayout />
          </RouterProvider>
        </UserContext.Provider>
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;