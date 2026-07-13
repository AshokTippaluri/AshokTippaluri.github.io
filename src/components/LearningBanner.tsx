import { useState } from "react";
import { Icon } from "./Icon";
import { learningTopics } from "../data/profile";

function randomTopic() {
  return learningTopics[Math.floor(Math.random() * learningTopics.length)];
}

export function LearningBanner() {
  const [topic] = useState(randomTopic);

  return (
    <div className="inline-flex max-w-xl items-center gap-2 rounded-full border border-cobalt/15 bg-brand-light px-3 py-1 text-left">
      <Icon name="book" size={13} className="flex-shrink-0 text-cobalt" />
      <p className="text-xs font-semibold text-ink-65">
        <span className="text-cobalt">Today's topic — {topic.term}:</span> {topic.blurb}
      </p>
    </div>
  );
}
