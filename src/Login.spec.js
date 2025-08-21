import { test, expect } from "@playwright/experimental-ct-react17";
import { MemoryRouter } from "react-router-dom";
import App from "./App"; // Import your main App component
import Login from "./Login";

test("displays login failure message", async ({ mount }) => {
  const component = await mount(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  await expect(component).toContainText("Login Form");
  await component
    .locator("input[placeholder='Email']")
    .fill("testuser@gmail.com");
  await component.locator("input[placeholder='Password']").fill("password");
  await component.locator("button[type='submit']").click();
  await expect(component).toContainText(
    "Email or Password is not matching with our records"
  );
});

test("verifies successful login page is displayed", async ({ mount }) => {
  const component = await mount(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  await expect(component).toContainText("Login Form");
  await component
    .locator("input[placeholder='Email']")
    .fill("user@example.com");
  await component.locator("input[placeholder='Password']").fill("password123");
  await component.locator("button[type='submit']").click();
  await expect(component).toContainText("Login Successful!");
  await expect(
    component.locator('img[src="/login-success.jpg"]')
  ).toBeVisible();
});
