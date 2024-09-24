import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";
import Swal from 'sweetalert2';

const Order = () => {
  const location = useLocation();
  const { bookPrice } = location.state;
  const [quantity, setQuantity] = useState(1);

  // Form data state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    upi: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  // Error state
  const [errors, setErrors] = useState({});

  const totalPrice = bookPrice * quantity;

 // const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate UPI ID (basic validation for demo)
  const validateUpi = (upi) => {
    const upiPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]{3,}$/;
    return upiPattern.test(upi);
  };

  // Validate card details (basic validation for demo)
  const validateCard = () => {
    const cardNumberPattern = /^[0-9]{16}$/;
    const cvvPattern = /^[0-9]{3}$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/; // MM/YY format with mandatory slash
  
    let cardErrors = {};

    if (!formData.cardName) {
      cardErrors.cardName = 'Card name is required.';
    }
    
    if (!cardNumberPattern.test(formData.cardNumber)) {
      cardErrors.cardNumber = 'Invalid card number. It should be 16 digits.';
    }
    
    if (!expiryDatePattern.test(formData.expiryDate)) {
      cardErrors.expiryDate = 'Invalid expiry date. Use MM/YY format.';
    }
    
    if (!cvvPattern.test(formData.cvv)) {
      cardErrors.cvv = 'Invalid CVV. It should be 3 digits.';
    }
    // Return true if no card errors, else return false
    return Object.keys(cardErrors).length === 0 ? true : cardErrors;
  };

  // Mobile number..
  const validateMobile = (mobileNumber) => {
    const mobilePattern = /^[6-9]\d{9}$/;
    return mobilePattern.test(mobileNumber);
    };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    // Basic validation for empty fields
    if (!formData.fullName) {
      formIsValid = false;
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    }

    if (!formData.address) {
      formIsValid = false;
      newErrors.address = 'Address is required';
    }

    if (!formData.city) {
      formIsValid = false;
      newErrors.city = 'City is required';
    }

    if (!formData.state) {
      formIsValid = false;
      newErrors.state = 'State is required';
    }

    if (!formData.postalCode) {
      formIsValid = false;
      newErrors.postalCode = 'Postal code is required';
    }

    if (!formData.country) {
      formIsValid = false;
      newErrors.country = 'Country is required';
    }
    // Mobile number validation..
    if(!validateMobile(formData.mobileNumber)){
      formIsValid = false;
      newErrors.mobileNumber = 'Mobile number should be 10 digits starting with 6-9';
    }

    // Validate UPI or card details
    if (formData.upi) {
      // UPI is entered, validate UPI
      if (!validateUpi(formData.upi)) {
        formIsValid = false;
        newErrors.payment = 'Invalid UPI format';
      }
    } else {
      // No UPI entered, validate card details
      const cardValidation = validateCard();
      if (cardValidation !== true) {
        formIsValid = false;
        newErrors = { ...newErrors, ...cardValidation };
      }
    }
    setErrors(newErrors);
    return formIsValid;
  };

//  Handle of submission code...

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const amount = totalPrice;
        const response = await fetch('http://localhost:8080/create-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount }),
        });
  
        const order = await response.json();
        const options = {
          key: import.meta.env.VITE_RAZORPAY_ID,
          amount: order.amount,
          currency: order.currency,
          order_id: order.id,
          prefill: {
            name: formData.fullName,
            email: formData.email,
            contact: formData.mobileNumber,
          },
          theme: {
            // color: '#F37254',
            color: '#5457f3'
          },
          handler: function (response) {
            // This function will run after payment is successful
            Swal.fire({
              title: 'Order Placed Successfully!',
              text: `Your payment was successful with Payment ID: ${response.razorpay_payment_id}`,
              icon: 'success',
              confirmButtonText: 'OK',
            });
  
            // Reset form after successful payment
            setFormData({
              fullName: '',
              email: '',
              address: '',
              city: '',
              state: '',
              postalCode: '',
              country: '',
              upi: '',
              cardNumber: '',
              cardName: '',
              expiryDate: '',
              cvv: '',
              mobileNumber: '',
            });
            setErrors({});
          },
        };
  
        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error('Error creating Razorpay order:', error);
      }
    }
  };


  
   return (
     <div className="min-h-screen bg-cyan-300 py-16">
       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
         <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Place Your Order</h1>

         <div className="flex justify-between items-center mb-6">
           <p className="text-xl font-semibold text-gray-700">Price per Book: <MdCurrencyRupee className='inline mr-1' /> {bookPrice}</p>
           <div className="flex items-center">
             <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mr-2">Quantity</label>
             <input
               type="number"
               id="quantity"
               value={quantity}
               min="1"
               onChange={(e) => setQuantity(Number(e.target.value))}
               className="border border-gray-300 p-2 rounded-lg w-24"
             />
           </div>
         </div>

         <div className="mb-6">
           <p className="text-lg font-semibold text-gray-900">Total Price: <span className="text-blue-600 font-bold"> <MdCurrencyRupee className='inline mr-1' /> {totalPrice.toFixed(2)}</span></p>
         </div>

         <form onSubmit={handleSubmit}>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
             <div>
               <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
               <input
                 type="text"
                 id="fullName"
                 name="fullName"
                 value={formData.fullName}
                 onChange={handleInputChange}
                 
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
               />
               {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
             </div>
             <div>
               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
               <input
                 type="email"
                 id="email"
                 name="email"
                 value={formData.email}
                 onChange={handleInputChange}
                 
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
               />
               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
             </div>
           </div>

           <div className="mb-6">
             <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
             <input
               type="tel"
               id="mobileNumber"
               name="mobileNumber"
               value={formData.mobileNumber}
               onChange={handleInputChange}
               className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
             />
             {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
           </div>

           <div className="mb-6">
             <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
             <input
               type="text"
               id="address"
               name="address"
               value={formData.address}
               onChange={handleInputChange}
               
               className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
             />
             {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
             <div>
               <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
               <input
                 type="text"
                 id="city"
                 name="city"
                 value={formData.city}
                 onChange={handleInputChange}
                 
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
               />
               {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
             </div>
             <div>
               <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
               <input
                 type="text"
                 id="state"
                 name="state"
                 value={formData.state}
                 onChange={handleInputChange}
                 
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
               />
               {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
             </div>
             <div>
               <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
               <input
                 type="text"
                 id="postalCode"
                 name="postalCode"
                 value={formData.postalCode}
                 onChange={handleInputChange}
                
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
               />
               {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode}</p>}
             </div>
           </div>

           <div className="mb-6">
             <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
             <input
               type="text"
               id="country"
               name="country"
               value={formData.country}
               onChange={handleInputChange}
               
               className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
             />
             {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
           </div>

           {/* Devivery time */}
           <p className='block text-gray-700 font-semibold mb-4'>Approx. Delivery Time: <span className='font-bold text-xl'> 1 Day</span>
          </p>

           {/* Payment Section */}

           <h2 className="text-2xl font-bold mb-4">Payment Information (UPI or Card Details)</h2>
           {/* {errors.payment && <p className="text-red-500 text-sm mb-4">{errors.payment}</p>} */}
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
             <div>
               <label htmlFor="upi" className="block text-sm font-medium text-gray-700">UPI</label>
               <input
                 type="text"
                 id="upi"
                 name="upi"
                 value={formData.upi}
                 onChange={handleInputChange}
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                 placeholder='username@bankname'
               />
               {
               errors.payment && <p className='text-red-500 text-sm'>{errors.payment}</p>
               }
             </div>

             <div>
               <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
               <input
                 type="text"
                 id="cardNumber"
                 name="cardNumber"
                 value={formData.cardNumber}
                 onChange={handleInputChange}
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                 placeholder="1234 5678 9101 1121"
               />
               {
                errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>
               }
             </div>

             <div>
               <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Card Name</label>
               <input
                 type="text"
                 id="cardName"
                 name="cardName"
                 value={formData.cardName}
                 onChange={handleInputChange}
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
               />
               {
                errors.cardName && <p className="text-red-500 text-sm">{errors.cardName}</p>
               }
             </div>

             <div>
               <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date (MM/YY)</label>
               <input
                 type="text"
                 id="expiryDate"
                 name="expiryDate"
                 value={formData.expiryDate}
                 onChange={handleInputChange}
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                 placeholder="MM/YY"
               />
               {
                errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>
               }
             </div>

             <div>
               <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
               <input
                 type="text"
                 id="cvv"
                 name="cvv"
                 value={formData.cvv}
                 onChange={handleInputChange}
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                 placeholder="***"
               />
               {
                errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>
               }
             </div>
           </div>
           <button
            type="submit"
             className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-black transition-colors"
           >
             Place Order
           </button>
         </form>
       </div>
     </div>
   );
};

export default Order;

