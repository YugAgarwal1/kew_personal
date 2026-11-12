import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import "@/styles/about.css";

export default function AboutLayout({ children }: LayoutProps<"/about">) {
  return <div className="relative bg-[#f3f3ef] text-[#111317]">
    <SiteHeader current="/about" />
    {children}
    <SiteFooter />
  </div>;
}
