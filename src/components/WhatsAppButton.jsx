import { WhatsApp } from "./Icons";

const MSG = encodeURIComponent(
  "Hello Olgate Ltd, I'd like to discuss a project with your team.",
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/250780000000?text=${MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with Olgate Ltd on WhatsApp"
    >
      <WhatsApp size={24} />
    </a>
  );
}
