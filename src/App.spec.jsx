import { test, expect } from "@playwright/experimental-ct-react17";
import App from "./App";

test("renders learn react link", async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toContainText("Learn React");
});
