import Header from "../components/common/Header";

const GeneralSettingsPage = () => {
  return (
    <div className="m-2 mt-10 text-white">
      <Header title="Global Settings" />
      <div className="mt-6 border p-6 rounded-lg bg-gray-800">
        <div className="m-2 p-2 flex items-center gap-2">
          <label htmlFor="Logo" className="relative w-1/2">
            Logo
          </label>
          <input
            type="text"
            id="Logo"
            className="border-gray-900 rounded-lg bg-gray-700 w-full p-2"
            placeholder="Logo"
          />
        </div>
        <div className="m-2 p-2 flex items-center gap-2">
          <label htmlFor="Title" className="relative w-1/2">
            Title
          </label>
          <input
            type="text"
            id="Title"
            className="border-gray-900 rounded-lg bg-gray-700 w-full p-2"
            placeholder="Title"
          />
        </div>
        <div className="m-2 p-2 flex items-center gap-2">
          <label htmlFor="Address" className="relative w-1/2">
            Address
          </label>
          <input
            type="text"
            id="Address"
            className="border-gray-900 rounded-lg bg-gray-700 w-full p-2"
            placeholder="Address"
          />
        </div>
        <div className="m-2 p-2 flex items-center gap-2">
          <label htmlFor="Mobile" className="relative w-1/2">
            Mobile
          </label>
          <input
            type="text"
            id="Mobile"
            className="border-gray-900 rounded-lg bg-gray-700 w-full p-2"
            placeholder="Mobile"
          />
        </div>
        <div className="m-2 p-2 flex items-center gap-2">
          <label htmlFor="Email" className="relative w-1/2">
            Email Id
          </label>
          <input
            type="text"
            id="Email"
            className="border-gray-900 rounded-lg bg-gray-700 w-full p-2"
            placeholder="Email"
          />
        </div>
        <div className="m-2 p-2 flex items-center gap-2">
          <label htmlFor="Username" className="relative w-1/2">
            Dashboard Message
          </label>
          <input
            type="text"
            className="border-gray-900 rounded-lg bg-gray-700 w-full p-2"
            placeholder="Message"
          />
        </div>
        <div className="m-2 p-2 flex items-center gap-2">
          <label htmlFor="Username" className="relative w-1/2">
            Pdf Download
          </label>
          <input
            type="text"
            className="border-gray-900 rounded-lg bg-gray-700 w-full p-2"
            placeholder="#"
          />
        </div>

        <div className="mt-6 border-t border-gray-600 pt-6">
          <h3 className="mb-4">Social Sharing</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block">Facebook</label>
              <input
                type="text"
                placeholder="Facebook Page Url"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="block">Twitter</label>
              <input
                type="text"
                placeholder="Twitter Url"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="block">LinkedIn</label>
              <input
                type="text"
                placeholder="LinkedIn Url"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="block">Pinterest</label>
              <input
                type="text"
                placeholder="Pinterest Url"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Save
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
            Restore Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettingsPage;
