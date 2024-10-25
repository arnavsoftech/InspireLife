import Header from "../components/common/Header";

const EditProfilePage = () => {
  return (
    <div className="m-2 mt-10">
      <Header title="Edit Profile" />
      <div className="flex items-center justify-center h-screen space-x-8 border rounded-lg">
        <div className="flex items-center justify-center">
          <div className="flex justify-center items-center">
            <input type="file" className="hidden" id="fileUpload" />
            <label
              htmlFor="fileUpload"
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded cursor-pointer"
            >
              Choose File
            </label>
            <span className="ml-2 text-gray-400">No file chosen</span>
          </div>
        </div>

        <div className="w-80">
          <form className="space-y-4">
            <div>
              <label className="block text-white">Username</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white">Email Id</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white">Country</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white">Phone Number</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
