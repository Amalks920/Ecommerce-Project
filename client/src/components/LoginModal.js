import React from "react";

export default function LoginModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-green-400 h-3/6 w-1/12"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="w-1/3 h-3/4 focus:outline-none flex-col justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none  left-1/3 shadow-2xl rounded-3xl bg-white top-44">
            <h1 className="font-bold text-center text-3xl pt-7">Sign Up</h1>
            <form>

            <div className="flex flex-col mt-4">
        <label htmlFor="name" className="text-gray-700">name</label>
        <input
          type="name"
          name="name"
          id="name"
          required
          className="border border-gray-300 rounded-md py-2 px-4 text-gray-900"
        />
      </div>

      <div className="flex flex-col mt-4">
        <label htmlFor="email" className="text-gray-700">Email</label>
        <input
          type="name"
          name="name"
          id="name"
          required
          className="border border-gray-300 rounded-md py-2 px-4 text-gray-900"
        />

      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="phone" className="text-gray-700">Phone</label>
        <input
          type="phone"
          name="phone"
          id="phone"
          required
          className="border border-gray-300 rounded-md py-2 px-4 text-gray-900"
        />

      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="passowrd" className="text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="border border-gray-300 rounded-md py-2 px-4 text-gray-900"
        />

      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="Phone" className="text-gray-700">Re-Enter Password</label>
        <input
          type="re-password"
          name="re-password"
          id="re-password"
          required
          className="border border-gray-300 rounded-md py-2 px-4 text-gray-900"
        />

      </div>
            </form>
          </div>
        </>
      ) : null}
    </>
  );
}

