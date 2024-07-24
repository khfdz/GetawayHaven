import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LogoBCA from '../../public/icons/logo_bank.png';
import LogoMandiri from '../../public/icons/logo_bank-1.png';
import IconUpload from '../../public/icons/ic_upload.png';

const Payment2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 }; // Default to 0 if state is undefined

  // Ensure that totalPrice is a number
  const subTotal = Number(totalPrice);
  const tax = subTotal * 0.1;
  const grandTotal = subTotal + tax;

  // Round values to the nearest integer
  const roundedSubTotal = Math.round(subTotal);
  const roundedTax = Math.round(tax);
  const roundedGrandTotal = Math.round(grandTotal);

  const [formValues, setFormValues] = useState({
    originBank: '',
    sendersName: '',
    email: '',
    phone: '',
  });
  const [fileName, setFileName] = useState('');
  const [isFileSelected, setIsFileSelected] = useState(false);

  const handleCompleteReservation = () => {
    if (formValues.sendersName && formValues.originBank && isFileSelected) {
      navigate('/payment3', {
        state: { totalPrice: roundedGrandTotal }
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setIsFileSelected(true); // Mark file as selected
    } else {
      setFileName('');
      setIsFileSelected(false); // No file selected
    }
  };

  // Disable button if any field is empty or file is not selected
  const isDisabled = !formValues.sendersName || !formValues.originBank || !isFileSelected;

  return (
    <div className='animate-slide-in-bottom'>
      <nav className='bg-white border-gray-200 py-2.5 rounded mb-6 mt-1'>
        <div className='container flex items-center justify-center mx-auto'>
          <Link to='/' className='text-xl font-small'>
            <span className='text-pink1'>Getaway</span>
            <span className='text-red-800'>haven.</span>
          </Link>
        </div>
        <hr className='border-gray-300 my-4' />
      </nav>

      {/* Label Section */}
      <div className="flex justify-center items-center mb-2">
        <div className="relative flex items-center">
          <div className="absolute inset-x-0 flex items-center">
            <hr className="border-gray-300 w-full" />
          </div>
          <div className="relative flex space-x-12">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green1 text-gray-800 font-semibold">
              <span className="text-white text-xl">&#10003;</span> 
            </div>
            <div className='border-2 border-gray-300 rounded-full'>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-600 font-semibold border-4 border-white">2</div>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-600 font-semibold">3</div>
          </div>
        </div>
      </div>

      <div className='p-6 ml-20 mr-20'>
        {/* Payment Section */}
        <h2 className='text-3xl font-semibold mb-2 text-pink1 text-center'>Payment</h2>
        <p className='text-sm mb-12 text-gray-500 text-center'>Please follow the instructions below</p>

        <div className="grid grid-cols-2 gap-6">
          {/* Booking Information */}
          <div>
            <div className="pb-6 mb-6 mr-12">
              <p className="text-sm font-semibold mb-2">Transfer Information :</p>
              <p className="text-sm">Tax: 10%</p>
              <p className="text-sm">Sub total: ${roundedSubTotal} USD</p> {/* Format to integer */}
              <p className="text-sm">Total: ${roundedGrandTotal} USD</p> {/* Format to integer */}

              <div className='flex items-center mb-4'>
                <img src={LogoBCA} alt="BCA Logo" className="w-[100px] h-auto object-cover rounded mr-12" />
                <div>
                  <p className="text-sm font-semibold">Bank Central Asia</p>
                  <p className="text-gray-500 text-sm">22014833174</p>
                  <p className="text-gray-500 text-sm">Getaway Haven Official</p>
                </div>
              </div>

              <div className='flex items-center'>
                <img src={LogoMandiri} alt="Mandiri Logo" className="w-[100px] h-auto object-cover rounded mr-12" />
                <div>
                  <p className="text-sm font-semibold">Bank Mandiri Official</p>
                  <p className="text-gray-500 text-sm">1531483434</p>
                  <p className="text-gray-500 text-sm">Getaway Haven</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="border-l-2 border-gray-300 pl-14">
            <div className="flex flex-col gap-4">
              <label className="text-sm font-semibold text-pink1">
                Upload Transfer Proof
                <div className="flex items-center mt-2">
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex font-normal items-center cursor-pointer bg-gray3 h-12 rounded border overflow-hidden"
                  >
                    <button
                      type="button"
                      className='w-12 h-12 bg-blue3 text-white text-2xl text-center rounded-md flex items-center justify-center'
                    >
                      <img src={IconUpload} alt="Upload Icon" className="w-[20px]" />
                    </button>
                    <span className="text-sm font-normal text-gray-500 ml-2 truncate w-[320px]">{fileName || 'Choose file'}</span>
                  </label>
                </div>
              </label>

              <label className="text-sm font-semibold text-pink1">Origin Bank</label>
              <input
                type="text"
                name="originBank"
                placeholder="Enter your bank name"
                value={formValues.originBank}
                onChange={handleInputChange}
                className="text-sm bg-gray3 p-2 h-12 rounded border w-[380px]"
              />
              
              <label className="text-sm font-semibold text-pink1">Sender's Name</label>
              <input
                type="text"
                name="sendersName"
                placeholder="Enter your name"
                value={formValues.sendersName}
                onChange={handleInputChange}
                className="text-sm bg-gray3 p-2 h-12 rounded border w-[380px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-6">
          <button
            onClick={handleCompleteReservation}
            className={`text-sm px-4 py-2 rounded-md w-[320px] h-10 ${isDisabled ? 'bg-gray-400 text-gray-200' : 'bg-pink1'} text-white shadow-md`}
            disabled={isDisabled}
          >
            Complete Your Payment
          </button>
          <button
            onClick={() => navigate('/')}
            className="text-sm bg-gray3 text-gray-500 px-4 py-2 rounded-md w-[320px] h-10"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment2;
