import React, { useEffect, useState } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  characters?: string;
}

export const ScrambleText = ({
  text,
  className = '',
  delay = 0,
  duration = 1.5,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?',
}: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState(text.replace(/[a-zA-Z0-9]/g, ' '));

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    timeout = setTimeout(() => {
      let iteration = 0;
      const steps = text.length;
      const intervalMs = (duration * 1000) / steps;

      interval = setInterval(() => {
        setDisplayText((current) =>
          current
            .split('')
            .map((_, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (text[index] === ' ' || text[index] === '\n') {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplayText(text);
        }

        iteration += 1 / 3; // Scramble for a bit before resolving each letter
      }, intervalMs);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, duration, characters]);

  // Handle potential newlines in the text
  const parts = displayText.split('\n');

  return (
    <span className={className}>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && <br />}
        </React.Fragment>
      ))}
    </span>
  );
};
