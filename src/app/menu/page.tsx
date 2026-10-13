import { redirect } from "next/navigation";

/** Menu page is hidden for now — full menu lives at /menu/Menu.pdf */
export default function MenuPage() {
  redirect("/");
}
