import React from "react";

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative 2xl:mt-0 mt-36 2xl:mb-0 md:mt-36 mb-8 mx-auto 2xl:w-[600px] md:w-[600px] w-[300px]">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="md:text-lg text-lg 2xl:text-3xl font-semibold">
                Booking Form
              </h3>
            </div>
            <div className="relative p-10  flex items-center justify-center flex-col">
              <div className="mt-2">
                <span>Movie:</span>
                <input
                  type="text"
                  className="px-8 w-full placeholder:text-gray-700 border-[2px] focus:ring-[#4540E1] focus:border-[#4540E1] rounded py-2 text-gray-700 focus:outline-none items-center"
                  name="movie"
                />
              </div>
              <form>
                <div>
                  <span>Name:</span>
                  <input
                    type="text"
                    name="name"
                    className="px-8 w-full placeholder:text-gray-700 border-[2px] focus:ring-[#4540E1] focus:border-[#4540E1] rounded py-2 text-gray-700 focus:outline-none items-center"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mt-2">
                  <span>Email:</span>
                  <input
                    type="email"
                    className="px-8 w-full placeholder:text-gray-700 border-[2px] focus:ring-[#4540E1] focus:border-[#4540E1] rounded py-2 text-gray-700 focus:outline-none items-center"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="mt-2">
                  <span>Phone:</span>
                  <input
                    type="text"
                    className="px-8 w-full placeholder:text-gray-700 border-[2px] focus:ring-[#4540E1] focus:border-[#4540E1] rounded py-2 text-gray-700 focus:outline-none items-center"
                    name="phone"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="mt-2">
                  <span>Number Of Tickets:</span>
                  <input
                    type="number"
                    name="Ticket"
                    className="px-8 w-full placeholder:text-gray-700 border-[2px] focus:ring-[#4540E1] focus:border-[#4540E1] rounded py-2 text-gray-700 focus:outline-none items-center"
                  />
                </div>
                <div className="flex items-center justify-start mt-8">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Book
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default Modal;
