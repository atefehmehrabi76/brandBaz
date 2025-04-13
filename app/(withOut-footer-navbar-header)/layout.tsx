import FooterMobile from "../(mobile)/FooterMobile";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="font-Iransans overflow-x-hidden">
      {children}
      <FooterMobile />
    </section>
  );
}
