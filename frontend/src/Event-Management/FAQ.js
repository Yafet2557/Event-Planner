import React from 'react';
const FAQ = () => {



   
  const faqData = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept Visa, MasterCard, and PayPal for payment...',
    },
    {
      question: 'Can I customize my event package?',
      answer: 'Yes, we offer customization options for all event packages...',
    },
  ];

  const faqslist = faqData.map(faqs => {
    return(
        <div className="faq-section">
          <h1>{faqs.question}</h1>
          <p>{faqs.answer}</p>
        </div>
    )
  })


  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqslist}
      </div>
    </div>
  );
};

export default FAQ;






// ABDUL SIMPLER WAY TO DO IT IF U WANT without needing faqlist function
/*
return (
    <div className="app">
      {/* Other components and content */
      //<div className="faq-section">
        //<h2>Frequently Asked Questions</h2>
        //<div className="faq-list">
          //{faqData.map((item, index) => (
           // <div key={index} className="faq-item">
             // <h3>{item.question}</h3>
              //<p>{item.answer}</p>
            //</div>
          //))}
        //</div>
      //</div>
    //</div>
  //);