import FooterMobile from "../(mobile)/FooterMobile";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="font-iransans overflow-x-hidden">
      {children}
      <FooterMobile />
    </section>
  );
}
