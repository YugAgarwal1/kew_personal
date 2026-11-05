"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function UpcomingEvents() {
  const upcomingEvents = [
    {
      name: "Renewable Energy India Expo 2019",
      description: "India's premier renewable energy exhibition focusing on solar, wind, and other renewable energy technologies. KEW plans to showcase its switchgear solutions for renewable energy applications.",
    },
    {
      name: "Dealer and Retailer Meets across Indian cities in 2018–2019",
      description: "Strategic partner engagement meetings held across major Indian cities to strengthen relationships with dealers and retailers. These events focused on product training, market insights, and business growth strategies.",
    },
    {
      name: "GRIDTECH 2019",
      description: "Power sector technology exhibition showcasing smart grid technologies, transmission and distribution equipment. KEW participated to present its advanced switchgear and protection solutions for the power sector.",
    },
    {
      name: "Middle East Electricity 2019",
      description: "International power industry exhibition connecting manufacturers, suppliers and professionals from the Middle East and global markets. KEW showcased its electrical distribution products to international buyers.",
    },
    {
      name: "JIMEX 2019, Jordan",
      description: "Jordan International Machinery Exhibition, a key platform for industrial and engineering products in the Middle East region. KEW presented its switchgear and electrical equipment to regional markets.",
    },
    {
      name: "ELECRAMA 2018",
      description: "The 13th edition of IEEMA's flagship electrical exhibition held at Greater Noida, Delhi NCR. KEW showcased its complete range of switchgear, fusegear and power distribution products.",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <section aria-labelledby="upcoming-events-title" className="section-pad" data-ev-reveal>
      <div className="shell">
        <h2 id="upcoming-events-title" className="events-list-title font-display">
          Events <span>KEW is planning to attend.</span>
        </h2>

        <div className="upcoming-events-container">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="upcoming-event-item" data-ev-stagger-item>
              <button
                className={`upcoming-event-name-btn ${selectedEvent === index ? "is-active" : ""}`}
                onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                aria-expanded={selectedEvent === index}
              >
                {event.name}
                <ChevronDown className={`upcoming-event-arrow ${selectedEvent === index ? "is-rotated" : ""}`} />
              </button>
              {selectedEvent === index && (
                <div className="upcoming-event-content">
                  <p>{event.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
