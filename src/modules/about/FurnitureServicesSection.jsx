import { FaArrowRight } from "react-icons/fa";
import furnitureIllustration from "../../assets/interior.svg"; // You'll need to add this illustration
import { motion } from "framer-motion"; 
import TranspertentSofa from "../../assets/transpertent-sofa.png"


function FurnitureServicesSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#f3f4f6] py-20">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center main-title">
          Enhance Your Space with Our <span className="text-indigo-500">Furniture Services</span>
        </h2>
        <div className="p-8 bg-white rounded-3xl md:p-12">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="w-full mb-8 lg:w-1/2 lg:mb-0">
              <img
                src={TranspertentSofa}
                alt="Furniture Services"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h3 className="mb-4 text-2xl font-semibold main-title">Complete Your Dream Home</h3>
              <p className="mb-6 text-gray-600 fm-txt">
                Our furniture services go beyond just finding your perfect home. We offer expert interior design 
                consultation and high-quality furniture to make your new space truly yours.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-indigo-500 rounded-lg btn-font hover:bg-indigo-600"
                onClick={() => {window.location.href = "/interior-services"}}>
                Explore Furniture Services
                <FaArrowRight className="ml-2" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default FurnitureServicesSection;