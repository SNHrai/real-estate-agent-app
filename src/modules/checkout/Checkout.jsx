import React, { useState } from 'react';
import CartOverview from './CartOverview';
import DeliveryInformation from './DeliveryInformation';
import PaymentInformation from './PaymentInformation';
import ReviewAndConfirm from './ReviewAndConfirm';
import OrderConfirmation from './OrderConfirmation';


function Checkout() {
    const [step, setStep] = useState(1);
    const [orderData, setOrderData] = useState({
      cart: [],
      deliveryInfo: {},
      paymentInfo: {},
    });
  
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
  
    const updateOrderData = (data) => {
      setOrderData({ ...orderData, ...data });
    };
  
    return (
        <div className="bg-[#f3f4f6]">
      <div className="container px-4 py-16 mx-auto">
          {step === 1 && <CartOverview nextStep={nextStep} updateOrderData={updateOrderData} />}
          {step === 2 && <DeliveryInformation nextStep={nextStep} prevStep={prevStep} updateOrderData={updateOrderData} />}
          {step === 3 && <PaymentInformation nextStep={nextStep} prevStep={prevStep} updateOrderData={updateOrderData} />}
          {step === 4 && <ReviewAndConfirm nextStep={nextStep} prevStep={prevStep} orderData={orderData} />}
          {step === 5 && <OrderConfirmation orderData={orderData} />}
        </div>
      </div>
    );
  }
  
  export default Checkout;