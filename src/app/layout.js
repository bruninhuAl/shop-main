import Header from "../app/components/Header";
import Footer from "../app/components/Footer";

export const metadata = {
  title: "Twitchlolja.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
