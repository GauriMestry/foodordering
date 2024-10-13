import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import cartReducer from "../../redux/cartSlice";
import Header from "../layout/Header";
import "../layout/layout.css";

const store = configureStore({ reducer: { cart: cartReducer } });

test("Should render Header", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const appLogo = screen.getByTitle("app-logo"); // Example of querying by text content
  expect(appLogo).toBeInTheDocument();
});

test("Should render Header Menus", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const menus = screen.getAllByTitle("menu-item");
  const home = screen.getByText("Home");
  const about = screen.getByText("About Us");
  const cart = screen.getByTestId("cart");
  expect(menus.length).toBe(3);
  expect(home).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(cart).toBeInTheDocument();
});

test("Should check login/logout button", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const btn = screen.getByRole("button");
  const button = screen.getByTestId("my-button");
  fireEvent.click(button);
  expect(btn).toBeInTheDocument();
});
