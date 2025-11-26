import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AccordionItem.css';

function AccordionItem({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`accordion-item${open ? ' open' : ''}`}>
      <button className="accordion-title" onClick={() => setOpen(!open)}>
        <span className={`accordion-arrow${open ? ' open' : ''}`}>▶</span>
        {job.icon && job.icon}
        <div className="accordion-text">
          <div><span>{job.company}</span> — <span>{job.role}</span></div>
          <div className="accordion-subtitle">{job.years}</div>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="accordion-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0.2, 0.8] }}
          >
            {Array.isArray(job.details)
              ? <ul>{job.details.map((item, i) => <li key={i}>{item}</li>)}</ul>
              : job.details}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AccordionItem;
