import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import "@/styles/events.css";

export default function EventsLayout({ children }: LayoutProps<"/events">) {
  return <div className="relative bg-[#f4f4f1] text-[#111317]">
    <SiteHeader current="/events" />
    {children}
    <SiteFooter />
  </div>;
}
