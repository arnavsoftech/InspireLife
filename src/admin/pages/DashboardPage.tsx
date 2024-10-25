import Header from "../components/common/Header";

import {
  RiUserLine,
  RiWallet2Line,
  RiBankLine,
  RiCheckboxCircleLine,
  RiMailCheckLine,
  RiMoneyRupeeCircleLine,
  RiTeamLine,
} from "@remixicon/react";

const DashboardPage = () => {
  return (
    <div className="m-2 mt-6">
      <Header title="Dashboard" />
      <div className="grid grid-cols-3">
        <div className="flex gap-10 flex-wrap lg:flex-nowrap justify-center">
          <div className="bg-blue-500 h-44 rounded-xl w-full lg:w-80 p-4 pt-6 m-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-white text-2xl">Total Users</p>
                <p className="text-4xl">3</p>
              </div>
              <button
                type="button"
                className="text-2xl text-white hover:drop-shadow-xl rounded-full p-4"
              >
                <RiUserLine size={40} />
              </button>
            </div>
            <div className="mt-6 bg-blue-700 flex justify-start items-center rounded-lg">
              <button className="text-white p-2">View More</button>
            </div>
          </div>
        </div>

        <div className="flex gap-10 flex-wrap lg:flex-nowrap justify-center">
          <div className="bg-blue-500 h-44 rounded-xl w-full lg:w-80 p-4 pt-6 m-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-white text-2xl">Active Users</p>
                <p className="text-4xl">1</p>
              </div>
              <button
                type="button"
                className="text-2xl text-white hover:drop-shadow-xl rounded-full p-4"
              >
                <RiTeamLine size={40} />
              </button>
            </div>
            <div className="mt-6 bg-blue-700 flex justify-start items-center rounded-lg">
              <button className="text-white p-2">View More</button>
            </div>
          </div>
        </div>

        <div className="flex gap-10 flex-wrap lg:flex-nowrap justify-center">
          <div className="bg-blue-500 h-44 rounded-xl w-full lg:w-80 p-4 pt-6 m-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-white text-2xl">Today Regd.</p>
                <p className="text-4xl">2</p>
              </div>
              <button
                type="button"
                className="text-2xl text-white hover:drop-shadow-xl rounded-full p-4"
              >
                <RiMailCheckLine size={40} />
              </button>
            </div>
            <div className="mt-6 bg-blue-700 flex justify-start items-center rounded-lg">
              <button className="text-white p-2">View More</button>
            </div>
          </div>
        </div>

        <div className="flex gap-10 flex-wrap lg:flex-nowrap justify-center">
          <div className="bg-blue-500 h-44 rounded-xl w-full lg:w-80 p-4 pt-6 m-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-white text-2xl">
                  Today Activation
                </p>
                <p className="text-4xl">3</p>
              </div>
              <button
                type="button"
                className="text-2xl text-white hover:drop-shadow-xl rounded-full p-4"
              >
                <RiCheckboxCircleLine size={40} />
              </button>
            </div>
            <div className="mt-6 bg-blue-700 flex justify-start items-center rounded-lg">
              <button className="text-white p-2">View More</button>
            </div>
          </div>
        </div>

        <div className="flex gap-10 flex-wrap lg:flex-nowrap justify-center">
          <div className="bg-blue-500 h-44 rounded-xl w-full lg:w-80 p-4 pt-6 m-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-white text-2xl">Total Deposit</p>
                <p className="text-4xl">0</p>
              </div>
              <button
                type="button"
                className="text-2xl text-white hover:drop-shadow-xl rounded-full p-4"
              >
                <RiBankLine size={40} />
              </button>
            </div>
            <div className="mt-6 bg-blue-700 flex justify-start items-center rounded-lg">
              <button className="text-white p-2">View More</button>
            </div>
          </div>
        </div>

        <div className="flex gap-10 flex-wrap lg:flex-nowrap justify-center">
          <div className="bg-blue-500 h-44 rounded-xl w-full lg:w-80 p-4 pt-6 m-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-white text-2xl">Total Withdrawl</p>
                <p className="text-4xl">0</p>
              </div>
              <button
                type="button"
                className="text-2xl text-white hover:drop-shadow-xl rounded-full p-4"
              >
                <RiMoneyRupeeCircleLine size={40} />
              </button>
            </div>
            <div className="mt-6 bg-blue-700 flex justify-start items-center rounded-lg">
              <button className="text-white p-2">View More</button>
            </div>
          </div>
        </div>

        <div className="flex gap-10 flex-wrap lg:flex-nowrap justify-center">
          <div className="bg-blue-500 h-44 rounded-xl w-full lg:w-80 p-4 pt-6 m-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-white text-2xl">Fund Balance</p>
                <p className="text-4xl">0</p>
              </div>
              <button
                type="button"
                className="text-2xl text-white hover:drop-shadow-xl rounded-full p-4"
              >
                <RiWallet2Line size={40} />
              </button>
            </div>
            <div className="mt-6 bg-blue-700 flex justify-start items-center rounded-lg">
              <button className="text-white p-2">View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
