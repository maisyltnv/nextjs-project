import { ReduxProviders } from "../../redux/provider";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProviders>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ReduxProviders>
  );
}
