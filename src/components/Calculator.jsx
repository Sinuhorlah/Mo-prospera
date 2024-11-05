import React, { useState } from 'react';
import Select from 'react-select';
import { Transition } from '@headlessui/react';


const DropdownIndicator = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2"
  >
    <path
      d="M0 7C0 5.114 -5.96046e-08 4.172 0.586 3.586C1.172 3 2.114 3 4 3H16C17.886 3 18.828 3 19.414 3.586C20 4.172 20 5.114 20 7C20 7.471 20 7.707 19.854 7.854C19.707 8 19.47 8 19 8H1C0.529 8 0.293 8 0.146 7.854C-8.9407e-08 7.707 0 7.47 0 7ZM0 16C0 17.886 -5.96046e-08 18.828 0.586 19.414C1.172 20 2.114 20 4 20H16C17.886 20 18.828 20 19.414 19.414C20 18.828 20 17.886 20 16V11C20 10.529 20 10.293 19.854 10.146C19.707 10 19.47 10 19 10H1C0.529 10 0.293 10 0.146 10.146C-8.9407e-08 10.293 0 10.53 0 11V16Z"
      fill="#4E107C"
    />
    <path
      d="M5 1V4M15 1V4"
      stroke="#4E107C"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const getOrdinalSuffix = (n) => {
  const l = n % 10;
  const t = n % 100;
  if (l === 1 && t !== 11) return `${n}st`;
  if (l === 2 && t !== 12) return `${n}nd`;
  if (l === 3 && t !== 13) return `${n}rd`;
  return `${n}th`;
};

const parseNumber = (str) => parseFloat(str.replace(/,/g, ''));

const formatNumber = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const formatDate = (daysFromToday) => {
  const date = new Date(Date.now() + daysFromToday * 86400000);
  const day = getOrdinalSuffix(date.getDate());
  const month = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ][date.getMonth()];
  const year = date.getFullYear();
  return `${day}, ${month}., ${year}`;
};

const frequencyOptions = [
  { value: 'Daily', label: 'Daily' },
  { value: 'Weekly', label: 'Weekly' },
  { value: 'Monthly', label: 'Monthly' },
];

const periodOptions = [
  { value: 30, label: '30 days' },
  { value: 60, label: '60 days' },
  { value: 90, label: '90 days' },
  { value: 120, label: '120 days' },
  { value: 180, label: '180 days' },
  { value: 270, label: '270 days' },
  { value: 360, label: '360 days' },
];
const Product = [
  { value: 1, label: 'Flex Savings' },
  { value: 2, label: ' Ethical Savings' },
  { value: 3, label: ' Target Savings' },
  { value: 4, label: 'Halal Savings' },
  { value: 5, label: ' Group Savings' },
];

const ColoredCircle = ({ bgColor }) => (
  <div className={`h-4 w-4 rounded-full ${bgColor}`}></div>
);


const ResultDisplay = ({ submittedData }) => {
  const { seedAmount, harvestDate, interestEarned } = submittedData;
  const formattedHarvestDate = formatDate(harvestDate.value);
  const totalBalance = formatNumber(
    parseNumber(seedAmount) + parseFloat(interestEarned)
  );

  return (
    <div className=" py-12 flex flex-col items-center px-14">
      <div className="flex flex-col gap-y-1 items-center">
        <div className="flex gap-x-2 items-center">
          <ColoredCircle bgColor="bg-purple-light" />
          <p className="font-work-sans text-purple-600">TOTAL BALANCE</p>
        </div>
        <p className="font-poppins text-center text-wrap text-purple-600 font-extrabold text-2xl">
          ₦{totalBalance}
        </p>
      </div>


      <div className="text-center font-poppins text-2xl px-8 lg:px-10 my-6 lg:my-8">
        Saving ₦{seedAmount} as a one-time deposit for {harvestDate?.label} will
        result in a balance of ₦{totalBalance} by {formattedHarvestDate}
      </div>


      <div className="flex flex-col gap-y-1 items-center mt-8">
        <div className="flex gap-x-2 items-center">
          <ColoredCircle bgColor="bg-blue" />
          <p className="font-work-sans text-blue font-bold">
        Prospera Interest
          </p>
        </div>
        <p className="font-poppins text-center text-wrap text-blue font-extrabold text-2xl">
          ₦{formatNumber(interestEarned)}
        </p>
      </div>

      <p className="text-center italic font-poppins px-10 mt-8 text-xs">
        Disclaimer: The calculated results are estimates and may vary due to
        fluctuations in interest rates over time.
      </p>
    </div>
  );
};


const Calculator = ({ home }) => {
  const [seedAmount, setSeedAmount] = useState('');
  const [harvestDate, setHarvestDate] = useState(null);
  const [frequency, setFrequency] = useState(frequencyOptions[0]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const formatInput = (value) =>
    value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const sanitizeInput = (value) =>
    value.toString().replace(/[^0-9]/g, '');

  // Parse formatted input back to number
  const parseInput = (value) => parseFloat(value.replace(/,/g, ''));

  const isFormValid = seedAmount && harvestDate;

  const handleCalculate = () => {
    if (!harvestDate || !seedAmount) return;

    const interestRates = {
      30: 14.85,
      60: 16.2,
      90: 18,
      120: 18.9,
      180: 19.8,
      270: 20.7,
      360: 21.6,
    };

    const rate = interestRates[harvestDate.value];
    const parsedSeedAmount = parseInput(seedAmount);
    const interestEarned = Math.round(
      (rate / 100) * parsedSeedAmount * harvestDate.value / 366
    );

    setSubmittedData({
      harvestDate,
      seedAmount,
      interestEarned,
    });

    setIsResultVisible(true);
  };

  return (
    <section
      className={`${home
        ? 'border-t border-t-transparent border-gray-300 shadow-inner shadow-t-gray-300/40 '
        : ''
        } mt-4 px-14 md:px-8 lg:px-16 py-28`}
    >
      <div
        style={{ backgroundImage: 'url(/images/calculatorbg.svg)' }}
        className="relative bg-cover bg-no-repeat bg-left-0 bg-top-12 bg-bottom-24"
      >
        <div className="z-30 flex flex-col lg:flex-row gap-y-24 lg:gap-y-0 lg:space-x-4 justify-start gap-x-20 px-14">
          {/* Input Section */}
          <div className="lg:w-6/12 w-full flex flex-col justify-center">
            <div className="flex flex-col lg:justify-start gap-2 mb-4">
              <h5 className="animate_animated animate_slideInUp text-3xl font-work-sans text-purple-600 font-bold mb-3 leading-8">
                What Are You Sowing Today? Calculate The Harvest Here
              </h5>
              <div>
                <div className="mb-6">
                  <label
                    htmlFor="seedAmount"
                    className="block text-black text-sm sm:text-lg font-work-sans font-light mb-2"
                  >
                    How much do you want to save?
                  </label>
                  <input
                    type="tel"
                    id="seedAmount"
                    className="w-full border outline-none bg-white border-gray-300 p-2 py-3 focus:border-purple-light rounded-md"
                    value={seedAmount}
                    placeholder="₦500,000"
                    onChange={(e) => {
                      const formatted = formatInput(sanitizeInput(e.target.value));
                      setSeedAmount(formatted);
                    }}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="frequency"
                    className="block text-purple-600 text-sm sm:text-lg font-work-sans font-light mb-2"
                  >
                    How long do you want to save for?
                  </label>
                  <Select
                    styles={{
                      control: (base) => ({
                        ...base,
                        backgroundColor: '#ffffff',
                        padding: '8px 0.75rem',
                        border: '1px solid rgb(209 213 219)',
                        boxShadow: 'none',
                        '&:focus': {
                          outline: 'none',
                          borderColor: '#170127',
                        },
                      }),
                      indicatorSeparator: () => ({
                        display: 'none',
                      }),
                      dropdownIndicator: () => ({
                        display: 'none',
                      }),
                    }}
                    inputId="frequency"
                    options={periodOptions}
                    value={harvestDate}
                    components={{ DropdownIndicator }}
                    onChange={setHarvestDate}
                    className="w-full"
                  />
                </div>
                <button
                  className={`w-1/2 ${
                    isFormValid
                      ? 'hover:cursor-pointer'
                      : 'hover:cursor-not-allowed'
                    } font-work-sans bg-black mt-5 hover:bg-purple-600 text-white py-3 px-4 rounded-lg`}
                  disabled={!isFormValid}
                  onClick={handleCalculate}
                >
                  check result
                </button>
              </div>
            </div>
          </div>
         

          {/* Result Section */}
          <div className="lg:w-6/12">
            <Transition
              show={isResultVisible}
              enter="transition ease-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
              className="shadow-lg bg-[#F7F7F7] bg-opacity-100 z-40 rounded-2xl flex-col w-full h-full flex justify-center items-center"
            >
              <div>
                {submittedData && <ResultDisplay submittedData={submittedData} />}
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;