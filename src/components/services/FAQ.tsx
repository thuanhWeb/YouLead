"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is executive coaching?",
    answer:
      "Executive coaching is a collaborative, one-on-one partnership designed to help leaders unlock their potential, improve performance, and achieve meaningful professional and personal growth. Sessions are confidential, structured, and tailored to your specific goals.",
  },
  {
    question: "How long does a coaching engagement typically last?",
    answer:
      "Most coaching engagements run between 3 to 6 months, with sessions every two weeks. However, the duration is flexible and depends on your goals, the complexity of the challenges you're working through, and the pace that works best for you.",
  },
  {
    question: "Who is coaching for?",
    answer:
      "Our coaching is designed for emerging leaders, mid-level managers, senior executives, and anyone in a leadership role who wants to grow. Whether you're navigating a career transition, building a team, or stepping into a bigger role, coaching can help.",
  },
  {
    question: "What's the difference between coaching, mentoring, and consulting?",
    answer:
      "Coaching focuses on helping you find your own answers through guided conversation and reflection. Mentoring involves sharing advice from personal experience, while consulting provides expert recommendations. Coaching empowers you to develop lasting skills and self-awareness.",
  },
  {
    question: "How much does coaching cost?",
    answer:
      "Pricing varies based on the type of engagement — individual, group, or workshop. We offer a complimentary discovery call to understand your needs and provide a tailored proposal. Contact us to learn more about our packages.",
  },
  {
    question: "What can I expect from the first session?",
    answer:
      "Your first session is a discovery conversation where we'll explore your goals, current challenges, and what success looks like for you. We'll establish a coaching agreement and outline a roadmap for your engagement. There's no pressure — it's about finding the right fit.",
  },
];

export function FAQ() {
  return (
    <Accordion className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} className="border-b border-charcoal/10">
          <AccordionTrigger className="py-5 text-base font-semibold text-charcoal hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-charcoal/70 leading-relaxed">
            <p>{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
