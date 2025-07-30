import React, { useState } from "react";

const faqData = [
  {
    question: "What types of consultations are available?",
    answer: "We provide three types of consultations – video, instant call, and chat consultation."
  },
  {
    question: "Can I get refund for the wallet money?",
    answer: "Refunds for wallet money are subject to our platform's refund policy. Please contact support for assistance."
  },
  {
    question: "What is the Amrutam Forum?",
    answer: "The Amrutam Forum is a community feature where users and practitioners interact, ask questions, and share health knowledge."
  },
  {
    question: "Can I pause the audio consultation?",
    answer: "Yes, you may pause audio consultations if needed, subject to the current session guidelines."
  },
  {
    question: "Is there a minimum duration for an audio consultation?",
    answer: "A minimum duration may apply based on the type of consultation. Please refer to the session rules or FAQ for specifics."
  }
];

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <div style={styles.faqList}>
      {faqData.map((item, idx) => (
        <div style={styles.faqItem} key={idx}>
          <button
            style={styles.questionBtn}
            onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            aria-expanded={openIdx === idx}
          >
            {item.question}
            <span style={styles.arrow}>{openIdx === idx ? "−" : "+"}</span>
          </button>
          {openIdx === idx && (
            <div style={styles.faqAnswer}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

const styles = {
  faqList: {
    maxWidth: 660,
    margin: "0 auto"
  },
  faqItem: {
    background: "#fff",
    borderRadius: 15,
    boxShadow: "0 2px 8px #ecf6ed99",
    margin: "0 0 18px 0",
    textAlign: "left",
    overflow: "hidden"
  },
  questionBtn: {
    width: "100%",
    padding: "21px 28px",
    color: "#2d7a36",
    background: "#f2f7ee",
    fontWeight: 600,
    fontSize: 16,
    border: "none",
    outline: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  arrow: {
    fontSize: 22,
    fontWeight: 700
  },
  faqAnswer: {
    padding: "19px 32px 19px 32px",
    color: "#586161",
    background: "#fff",
    fontSize: 15.5,
    lineHeight: 1.6,
    borderTop: "1px solid #e2e9df"
  }
};

export default FAQSection;
