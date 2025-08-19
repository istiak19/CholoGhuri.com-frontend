import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Faq3Props, FaqItem } from "@/types";

const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "How can I book a tour with Chologhuri?",
    answer:
      "You can book directly through our website by selecting your desired package and following the booking steps. Alternatively, you can contact our support team for assistance.",
  },
  {
    id: "faq-2",
    question: "Do you offer custom tour packages?",
    answer:
      "Yes, we create tailor-made packages based on your travel preferences, budget, and schedule. Just let us know your requirements.",
  },
  {
    id: "faq-3",
    question: "What is included in your tour packages?",
    answer:
      "Our packages usually include accommodation, transport, guided tours, and meals as specified. Each package page provides detailed inclusions and exclusions.",
  },
  {
    id: "faq-4",
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes, cancellations and rescheduling are possible, subject to our cancellation policy. Please check the terms before confirming your booking.",
  },
  {
    id: "faq-5",
    question: "Do you arrange international tours?",
    answer:
      "Yes, besides domestic tours within Bangladesh, we also arrange international tours to popular destinations in Asia and beyond.",
  },
];

const Frequently = ({ heading = "Frequently Asked Questions",
  description = "Find answers to common questions about our tours, bookings, and packages. Can't find what you're looking for? Contact our support team.",
  items = faqItems }: Faq3Props) => {
    
  return (
    <section className="py-16">
      <div className="container space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Frequently;