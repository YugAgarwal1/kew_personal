import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import "@/styles/contact.css";

export default function ContactLayout({ children }: LayoutProps<"/contact">) {
  return <div className="relative bg-[#f3f3ef] text-[#111317]">
    <SiteHeader current="/contact" />
    {children}
    <SiteFooter />
  </div>;
}
