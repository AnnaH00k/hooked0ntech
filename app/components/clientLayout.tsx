"use client";
import { usePathname } from "next/navigation";
import MenuHeader from "./headers/menuHeader";
import Footer from "./footer";
import LifeHeader from "./headers/lifeHeader";
import PoliticsHeader from "./headers/politicsheader";
import StudyHeader from "./headers/studyHeader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname.includes("hooked0nlife");
  const hideHeaderFooterForPolitics = pathname.includes("hooked0npolitics");


  return (
    <>
      {hideHeaderFooterForPolitics && <PoliticsHeader />}
      {hideHeaderFooter && <LifeHeader />}
      {children}
      {pathname === "/" && <Footer />}
    </>
  );
}
