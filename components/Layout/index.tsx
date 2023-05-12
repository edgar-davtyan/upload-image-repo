import Header from "../Header";
import { RootLayoutProps } from "./types";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 56 }}>{children}</main>
    </>
  );
}
