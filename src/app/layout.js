import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "Twitchlolja.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header>
        {children}
        </Header>
      </body>
    </html>
  );
}
