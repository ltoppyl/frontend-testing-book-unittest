import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Agreement } from "./Agreement";

const user = userEvent.setup();

test("fieldset のアクセシブルネームは、legend を引用している", () => {
  render(<Agreement />);
  expect(screen.getByRole("group", { name: "利用規約の同意" })).toBeInTheDocument();
});

test("チェックボックスはチェックが入っていない", () => {
  render(<Agreement />);
  expect(screen.getByRole("checkbox")).not.toBeChecked();
});

test("利用規約へのリンクがある", () => {
  render(<Agreement />);
  expect(screen.getByRole("link")).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveTextContent("利用規約");
  expect(screen.getByRole("link")).toHaveAttribute("href", "/terms");
  expect(screen.getByRole("link", { name: "利用規約" })).toHaveAttribute("href", "/terms");
});

test("ユーザーがチェックボックスにチェックを入れることができる", async () => {
  render(<Agreement />);
  const checkbox = screen.getByRole("checkbox");

  expect(checkbox).not.toBeChecked();

  // ユーザーがチェックボックスにチェックする動作をモック
  await user.click(checkbox);
  expect(checkbox).toBeChecked();
});

test("Snapshot: 利用規約の同意が表示される", () => {
  const { container } = render(<Agreement />);
  expect(container).toMatchSnapshot();
});
