import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ChatModal from "../chatmodal";

const faqs = [
  {
    question: "What is Prospera?",
    answer:
      "Prospera is a comprehensive savings and investment platform that helps users manage their personal, business, and group finances. It offers flexible savings options, investment opportunities, utility payments, and financial education through the Money School..",
  },
  {
    question: "How do I create an account?",
    answer:
      "To create an account, download the Prospera app from the app store, sign up with your email or phone number, and complete the registration process by providing the necessary personal details and identity verification documents.",
  },
  {
    question: "What types of accounts can I open?",
    answer:
      "You can open a Personal Account, Business Account, or Group Account. Each account offers specific features like QR Pay, WebPay, and multiple access privileges for group management.",
  },

  {
    question: "What savings options does Prospera offer?",
    answer: `
       FlexiSave: Flexible withdrawals
       Goal-Based Save: Savings for specific goals
       LockSave: Locked savings with high-interest rates
       Halal Save: Zero-interest savings
       And more.
      `,
  },

  {
    question: "How do I access customer support?",
    answer:
      "You can contact our support team via email, phone, or the in-app chat feature for assistance with any issues or inquiries",
  },
  {
    question: "Can I pay for utilities using Prospera?",
    answer:
      "Yes, you can pay for services such as airtime, data, and electricity, and even purchase tickets and vouchers directly from the app.",
  },
  {
    question: "How does support What is the Money School??",
    answer:
      "The Money School is a feature in the app offering bite-sized financial literacy and investment education to help you manage and grow your finances more effectively.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 mt-52">
            <h1 className="text-4xl  mb-4 text-purple-600">
              Frequently asked questions
            </h1>
            <p className="text-gray-700 mb-8">
              🧑‍💻 Still need help?{" "}
              <span
                onClick={openModal}
                className="text-indigo-600 underline cursor-pointer"
              >
                Chat to us.
              </span>
            </p>
            <ChatModal isOpen={isModalOpen} onClose={closeModal} />
          </div>

          <div className="w-full md:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-900 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="text-indigo-600">
                    {activeIndex === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="py-2 text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <InfoSection />
      </div>
    </div>
  );
};

const InfoSection = () => (
  <div className="mt-16 p-8 bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4">
      Prospera is here to help you build the future you deserve. Join us today
      and take the first step toward financial freedom.
    </h2>
    {/* <p className="text-gray-600">
      Millions of businesses of all sizes—from startups to large enterprises—use Untitled’s software and APIs to accept payments, send payouts, and manage their businesses online.
    </p> */}
  </div>
);

export default FAQSection;
