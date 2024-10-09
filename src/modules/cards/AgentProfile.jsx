import Agent from "../../assets/profile-pic.jpg"

const AgentProfile = ({ onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-xl animate-fade-in">
        <img src={Agent} alt="Agent" className="mx-auto mb-4 rounded-full w-44 h-44" />
        <h2 className="mb-2 text-2xl main-title">Agent Name</h2>
        <p className="mb-4 -ml-1 mb-txt fs-6 p-2 rounded-xl bg-[#f3f4f6]">Phone: +1 234 567 8900</p>
        <button onClick={onClose} className="px-4 py-2 text-white bg-indigo-500 rounded btn-font">Close</button>
      </div>
    </div>
  );
export default AgentProfile;  