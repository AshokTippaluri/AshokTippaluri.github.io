import { useState } from "react";
import { Icon } from "./Icon";
import { learningTopics } from "../data/profile";

function randomTopic() {
  return learningTopics[Math.floor(Math.random() * learningTopics.length)];
}

export function LearningBanner() {
  const [topic] = useState(randomTopic);

  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8">
      <div className="flex items-start gap-3 rounded-xl border border-cobalt/15 bg-brand-light px-4 py-3 md:items-center">
        <div className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-white text-cobalt shadow-card">
          <Icon name="book" size={16} />
        </div>
        <p className="text-sm text-ink-80">
          <span className="font-bold text-cobalt">Today's topic — {topic.term}:</span>{" "}
          {topic.blurb}
        </p>
      </div>
    </div>
  );
}
