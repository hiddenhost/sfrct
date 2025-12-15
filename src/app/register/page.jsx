"use client";
import React, { useState } from 'react';
import { ArrowBigLeft } from 'lucide-react';
import Link from "next/link";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    nomineeRelation: '',
    dob: '',
    gender: '',
    occupation: 'Government Job',
    govDepartment: '',
    organization: '',
    state: 'Uttar Pradesh',
    district: '',
    block: '',
    email: '',
    address: '',
    nomineeName: '',
    nomineeRelation2: '',
    nomineeMobile: '',
    transactionId: '',
    receipt: null
  });
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async () => {
    console.log('Form Data:', formData);
    
    // Basic required fields validation
    if (!formData.name || !formData.cardNumber || !formData.nomineeRelation || 
        !formData.dob || !formData.gender || !formData.district || 
        !formData.block || !formData.email || !formData.address || 
        !formData.nomineeName || !formData.nomineeRelation2 || 
        !formData.nomineeMobile || !formData.transactionId || !formData.receipt) {
      alert('Please fill all required fields!');
      console.log('Missing fields:', {
        name: !formData.name,
        cardNumber: !formData.cardNumber,
        nomineeRelation: !formData.nomineeRelation,
        dob: !formData.dob,
        gender: !formData.gender,
        district: !formData.district,
        block: !formData.block,
        email: !formData.email,
        address: !formData.address,
        nomineeName: !formData.nomineeName,
        nomineeRelation2: !formData.nomineeRelation2,
        nomineeMobile: !formData.nomineeMobile,
        transactionId: !formData.transactionId,
        receipt: !formData.receipt
      });
      return;
    }

    // Conditional validation for Government Job
    if (formData.occupation === 'Government Job' && !formData.govDepartment) {
      alert('Please select a Government Department!');
      return;
    }

    if (!agreed) {
      alert('Please agree to the terms and conditions!');
      return;
    }

    setIsSubmitting(true);

    // Create FormData
    const submitData = new FormData();
    
    // FormSubmit specific fields - CRITICAL for email delivery
    submitData.append('_captcha', 'false');
    submitData.append('_template', 'box');
    submitData.append('_subject', '🔔 New Registration -SUPER FAST RELIEF CHARITABLE TEAM');
    
    // Add all form fields with proper field names (no spaces for better compatibility)
    submitData.append('Name', formData.name);
    submitData.append('Aadhaar_Card_Number', formData.cardNumber);
    submitData.append('Father_Husband_Name', formData.nomineeRelation);
    submitData.append('Date_of_Birth', formData.dob);
    submitData.append('Gender', formData.gender);
    submitData.append('Email', formData.email);
    submitData.append('Occupation', formData.occupation);
    
    if (formData.govDepartment) {
      submitData.append('Government_Department', formData.govDepartment);
    }
    if (formData.organization) {
      submitData.append('Organization', formData.organization);
    }
    
    submitData.append('State', formData.state);
    submitData.append('District', formData.district);
    submitData.append('Block', formData.block);
    submitData.append('Address', formData.address);
    submitData.append('Nominee_Name', formData.nomineeName);
    submitData.append('Nominee_Relation', formData.nomineeRelation2);
    submitData.append('Nominee_Mobile', formData.nomineeMobile);
    submitData.append('Transaction_ID', formData.transactionId);
    
    // Add receipt file
    if (formData.receipt) {
      submitData.append('Payment_Receipt', formData.receipt);
    }

    // Add formatted message
    const emailMessage = `
NEW REGISTRATION - SUPER FAST RELIEF CHARITABLE TEAM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PERSONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Aadhaar Card Number: ${formData.cardNumber}
Father/Husband Name: ${formData.nomineeRelation}
Date of Birth: ${formData.dob}
Gender: ${formData.gender}
Email: ${formData.email}

OCCUPATION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Occupation: ${formData.occupation}
${formData.govDepartment ? `Government Department: ${formData.govDepartment}` : ''}
${formData.organization ? `Organization: ${formData.organization}` : ''}

LOCATION INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
State: ${formData.state}
District: ${formData.district}
Block: ${formData.block}
Address: ${formData.address}

NOMINEE INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nominee Name: ${formData.nomineeName}
Nominee Relation: ${formData.nomineeRelation2}
Nominee Mobile: ${formData.nomineeMobile}

PAYMENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Transaction ID: ${formData.transactionId}

Registration Date & Time: ${new Date().toLocaleString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  dateStyle: 'full',
  timeStyle: 'long'
})}
    `;
    
    submitData.append('message', emailMessage);

    try {
      const response = await fetch('https://formsubmit.co/sfrctup@gmail.com', {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        alert('✅ Registration submitted successfully! Admin will review your application and contact you soon.');
        // Reset form
        setFormData({
          name: '',
          cardNumber: '',
          nomineeRelation: '',
          dob: '',
          gender: '',
          occupation: 'Government Job',
          govDepartment: '',
          organization: '',
          state: 'Uttar Pradesh',
          district: '',
          block: '',
          email: '',
          address: '',
          nomineeName: '',
          nomineeRelation2: '',
          nomineeMobile: '',
          transactionId: '',
          receipt: null
        });
        setAgreed(false);
      } else {
        const errorText = await response.text();
        console.error('Server response:', errorText);
        alert('❌ Error submitting form. Please try again.');
      }
    } catch (error) {
      alert('❌ Error submitting form. Please check your internet connection and try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        
    {/* Header Image */}
    <div className="relative h-72 bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden">
      <Link href="/">
      <button className="absolute top-4 left-4 flex items-center gap-2 backdrop-blur-sm cursor-pointer text-gray-200 font-medium px-2 py-1 rounded-lg shadow-lg hover:shadow-xl transition duration-300 z-20">
        <ArrowBigLeft size={20} />
        <span>Back to Home</span>
      </button>
      </Link>
      

      {/* Blurred Background Image Layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/about.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Decorative blurred circles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      {/* Register Text (Sharp, Not Blurred) */}
      <div className="relative h-full flex items-center justify-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          Register
        </h1>
      </div>
    </div>

    {/* Payment Information Section - Same Width as Form */}
    <div className="max-w-4xl mt-8 mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        
        {/* QR Code Card - Left Side */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100 flex flex-col">
          <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
            Scan QR Code to Pay
          </h3>
          <div className="flex justify-center items-center bg-gray-50 p-3 rounded-lg flex-1">
            <div className="relative w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">QR Code Image</span>
            </div>
          </div>
          <p className="text-center text-xs text-gray-600 mt-3 font-medium">
            Scan & Pay using any UPI App
          </p>
        </div>

        {/* Bank Details Card - Right Side */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 border-2 border-blue-200 flex flex-col">
          <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
            Bank Account Details
          </h3>
          <div className="space-y-2 flex-1">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Account Name</p>
              <p className="text-sm font-semibold text-gray-800">SUPER FAST RELIEF CHARITABLE TRUST</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Account Number</p>
              <p className="text-base font-bold text-blue-600 tracking-wider">925020055869690</p>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">IFSC Code</p>
                <p className="text-sm font-bold text-blue-600">UTIB0005215</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Branch</p>
                <p className="text-sm font-semibold text-gray-800">MORADABAD</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Customer ID</p>
              <p className="text-sm font-semibold text-gray-800">979335991</p>
            </div>
          </div>
          
          <div className="mt-3 bg-orange-100 border-l-4 border-orange-500 p-3 rounded">
            <p className="text-xs text-orange-800 font-medium">
              ⚠️ Please save the transaction ID after payment for registration
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Registration Form */}
    <div className="max-w-4xl mx-auto px-4 pb-12">
      <div className="bg-white rounded-xl shadow-xl p-8">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Registration Form</h2>
          <p className="text-gray-600 mt-2">Please fill all the required fields carefully</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              नाम <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="नाम (आधार कार्ड के अनुसार)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              आधार कार्ड नंबर <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="आधार कार्ड नंबर"
              maxLength="12"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
          </div>

          {/* Father/Husband Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              पिता/पति का नाम <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nomineeRelation"
              value={formData.nomineeRelation}
              onChange={handleChange}
              placeholder="पिता/पति का नाम"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              जन्म तिथि (आधार कार्ड के अनुसार) <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              लिंग <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            >
              <option value="">Choose...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ईमेल <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ईमेल"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
          </div>

          {/* Occupation */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              व्यवसाय <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Government Job', 'Private Job', 'Business', 'Agriculture', 'Housewife', 'Student', 'Contract Workers', 'Public Representative'].map((occ) => (
                <label key={occ} className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-orange-50 cursor-pointer transition">
                  <input
                    type="radio"
                    name="occupation"
                    value={occ}
                    checked={formData.occupation === occ}
                    onChange={handleChange}
                    className="mr-2 text-orange-500"
                  />
                  <span className="text-sm text-gray-700">{occ}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Government Department */}
          {formData.occupation === 'Government Job' && (
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Government Department <span className="text-red-500">*</span>
              </label>
              <select
                name="govDepartment"
                value={formData.govDepartment}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              >
                <option value="">Select Government Department</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Police">Police</option>
                <option value="Revenue">Revenue</option>
                <option value="Public Works">Public Works</option>
                <option value="Transport">Transport</option>
                <option value="Other">Other</option>
              </select>
            </div>
          )}

          {/* Organization */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              कार्यरत कार्यालय/संगठन/कंपनी/विद्यालय/संस्थान का नाम व पता
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="कार्यरत कार्यालय/संगठन/कंपनी/विद्यालय/संस्थान का नाम व पता (यदि हो तो)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State <span className="text-red-500">*</span>
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            >
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Delhi">Delhi</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>

          {/* District */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              स्थाई निवासी जिला <span className="text-red-500">*</span>
            </label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            >
              <option value="">Select District</option>
              <option value="Meerut">Meerut</option>
              <option value="Moradabad">Moradabad</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Noida">Noida</option>
              <option value="Ghaziabad">Ghaziabad</option>
              <option value="Agra">Agra</option>
            </select>
          </div>

          {/* Block */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              स्थाई निवासी ब्लॉक <span className="text-red-500">*</span>
            </label>
            <select
              name="block"
              value={formData.block}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            >
              <option value="">Select Block</option>
              <option value="Block 1">Block 1</option>
              <option value="Block 2">Block 2</option>
              <option value="Block 3">Block 3</option>
            </select>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              स्थाई पता <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="कृपया अपना स्थाई पता लिखें यहाँ"
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            ></textarea>
          </div>

          {/* Nominee Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              नॉमिनी का नाम <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nomineeName"
              value={formData.nomineeName}
              onChange={handleChange}
              placeholder="नॉमिनी का नाम"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
          </div>

          {/* Nominee Relation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              नॉमिनी से संबंध <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nomineeRelation2"
              value={formData.nomineeRelation2}
              onChange={handleChange}
              placeholder="नॉमिनी से संबंध (जैसे: पति, पत्नी, पुत्र, पुत्री)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
          </div>

          {/* Nominee Mobile */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              नॉमिनी का मोबाइल नंबर <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="nomineeMobile"
              value={formData.nomineeMobile}
              onChange={handleChange}
              placeholder="नॉमिनी का मोबाइल नंबर"
              maxLength="10"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
          </div>

          {/* Transaction ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Transaction ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              placeholder="Please Upload Payment Transaction ID"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
          </div>

          {/* Receipt Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              रसीद को 50 केबी में (Payment Receipt Upload) <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="receipt"
              onChange={handleChange}
              accept="image/*,.pdf"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="md:col-span-2 bg-orange-50 border border-orange-200 rounded-lg p-4">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 mr-3 w-4 h-4 text-orange-600"
              />
              <span className="text-sm text-gray-700">
                <span className="font-semibold text-orange-700">घोषणा *</span><br />
                I have read the rules and regulations of FAST RELIEF CHARITABLE TEAM available on the website. I agree to all the terms and conditions. If I do not contribute regularly under the rules made by FRCT, then my nominee will not be able to Claim the financial help.
              </span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? 'Submitting...' : 'Register Now'}
          </button>
        </div>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>After submission, admin will review your application and contact you via email.</p>
        </div>
      </div>
    </div>
  </div>
  );
}