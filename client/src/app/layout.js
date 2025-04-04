import Auth from "./auth";
import Providers from "./providers";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("https://griffinarms.com"), // Change to your actual domain when ready
  title: "Griffin Arms & Outdoors – Built for the Hunt",
  description:
    "Explore Griffin Arms & Outdoors – your trusted source for firearms, hunting gear, and outdoor essentials. Precision, performance, and reliability in every product.",
  openGraph: {
    title: "Griffin Arms & Outdoors – Built for the Hunt",
    description:
      "Explore Griffin Arms & Outdoors – your trusted source for firearms, hunting gear, and outdoor essentials.",
    url: "https://griffinarms.com",
    siteName: "Griffin Arms & Outdoors",
    images: "https://griffinarms.com/og-image.jpg", // Upload your image here later
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@griffinarmsoutdoors", // Your Twitter/X handle if you make one
    title: "Griffin Arms & Outdoors – Built for the Hunt",
    description:
      "Top-tier gear for serious hunters and shooting enthusiasts. Discover Griffin Arms & Outdoors.",
    image: "https://griffinarms.com/og-image.jpg", // Same here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Auth>{children}</Auth>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
