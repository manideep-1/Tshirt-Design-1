import React from "react";

function FAQ3({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="pointer">
        <div className="faq-question">
          <p>{faq.question}</p>
        </div>

        <div className="faq-answer">
          <p> {faq.description}</p>
        </div>
        <div className="faq-answer">
          <p>{faq.a}</p>
        </div>
        <div className="faq-answer">
          <p> {faq.b}</p>
        </div>
        <div className="faq-answer">
          <p> {faq.c}</p>
        </div>
        <div className="faq-answer">
          <hr style={{ margin: "2px" }} />

          <div className="answer sdf">
            Was this information helpful?
            <span className="dfg">
              <div>
                <a
                  className="qwerty button"
                  style={{ color: "gray" }}
                  href="#popup1"
                >
                  Yes
                </a>
                <a
                  className="zxc button"
                  style={{ color: "gray" }}
                  href="#popup1"
                >
                  No
                </a>
              </div>
            </span>
          </div>

          <hr style={{ margin: "1px" }} />
        </div>

        <div id="popup1" className="overlay">
          <div className="popup">
            <a className="close" href="/">
              &times;
            </a>
            <div className="content">
              <h1>Thanks For Your Feedback</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ3;
