import React, { useMemo } from 'react';
import useIntersectionObserver, { ObserverOptions } from '../hooks/useIntersectionObserver';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineItemProps {
  event: TimelineEvent;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event }) => {
  const observerOptions = useMemo<ObserverOptions>(() => ({ threshold: 0.3, triggerOnce: true }), []);
  const [ref, isVisible] = useIntersectionObserver(observerOptions);
  return (
    <div ref={ref} className={`timeline-item ${isVisible ? 'is-visible' : ''}`}>
      <div className="timeline-content">
        <h5>{event.year} - {event.title}</h5>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;