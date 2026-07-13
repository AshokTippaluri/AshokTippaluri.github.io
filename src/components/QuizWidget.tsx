import { useMemo, useState } from "react";
import { Card } from "./Card";
import { quizQuestions } from "../data/profile";

const QUESTIONS_PER_ROUND = 5;

function pickRandomQuestions() {
  const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, QUESTIONS_PER_ROUND);
}

export function QuizWidget() {
  const [round, setRound] = useState(() => pickRandomQuestions());
  const [selected, setSelected] = useState<(number | null)[]>(() => Array(QUESTIONS_PER_ROUND).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () => selected.reduce((total, choice, i) => total + (choice === round[i].answer ? 1 : 0), 0),
    [selected, round]
  );

  function selectAnswer(questionIndex: number, optionIndex: number) {
    if (submitted) return;
    setSelected((prev) => {
      const next = [...prev];
      next[questionIndex] = optionIndex;
      return next;
    });
  }

  function retry() {
    setRound(pickRandomQuestions());
    setSelected(Array(QUESTIONS_PER_ROUND).fill(null));
    setSubmitted(false);
  }

  const allAnswered = selected.every((choice) => choice !== null);

  return (
    <Card className="p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl font-bold text-ink-95">Quick knowledge check</h3>
          <p className="mt-1 text-sm text-muted">
            {QUESTIONS_PER_ROUND} random questions across cloud, systems, and CS fundamentals.
          </p>
        </div>
        {submitted && (
          <span className="rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-cobalt">
            {score} / {QUESTIONS_PER_ROUND}
          </span>
        )}
      </div>

      <div className="mt-6 space-y-6">
        {round.map((q, qi) => (
          <div key={q.question}>
            <p className="font-medium text-ink-95">
              {qi + 1}. {q.question}
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {q.options.map((option, oi) => {
                const isSelected = selected[qi] === oi;
                const isCorrect = submitted && oi === q.answer;
                const isWrongSelected = submitted && isSelected && oi !== q.answer;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectAnswer(qi, oi)}
                    disabled={submitted}
                    className={`rounded-lg border px-3 py-2 text-left text-sm transition disabled:cursor-default ${
                      isCorrect
                        ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                        : isWrongSelected
                        ? "border-red-300 bg-red-50 text-red-600"
                        : isSelected
                        ? "border-cobalt/40 bg-brand-light text-cobalt"
                        : "border-black/10 bg-page text-ink-65 hover:border-cobalt/20 hover:bg-white"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {!submitted ? (
          <button
            type="button"
            className="btn-primary disabled:opacity-50"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
          >
            Submit answers
          </button>
        ) : (
          <button type="button" className="btn-primary" onClick={retry}>
            Try new questions
          </button>
        )}
      </div>
    </Card>
  );
}
