const ThankYou = ({ onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-xl animate-fade-in">
        <h2 className="mb-4 text-2xl font- main-title">Thank You!</h2>
        <p className="amt fs-3">Our agent will contact you soon.</p>
        <button onClick={onClose} className="px-4 py-2 mt-4 text-white bg-indigo-500 rounded btn-font">Close</button>
      </div>
    </div>
  );

export default ThankYou;