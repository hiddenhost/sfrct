import React from 'react';

export default function SFRCTSupportCards() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
        {/* First Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-100">
          <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
            <div className="flex-shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-gray-300 rounded-full mt-1.5 sm:mt-2"></div>
            <div className="flex-1">
              <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
                <span className="font-bold">SFRCT द्वारा</span> आकस्मिक निधन पर आर्थिक सहयोग योजना के अंतर्गत संस्था में सदस्यता ग्रहण करने वाले व्यक्तियों को 18 वर्ष से 60 वर्ष तक की आयु तक मृत्यु द्वारा लाभ प्राप्त होगा।
                लाभ प्राप्त करने की कंडीशन सदस्यता प्राप्त करने की तिथि से 2 वर्ष के बाद शुरू होगी।
                संस्था में रजिस्ट्रेशन फीस 100₹ और मासिक अंशदान 200₹ होगा।
                यह अंशदान प्रतिवाह देना होगा।
                यदि कोई व्यक्ति लगातार 6 माह अंशदान नहीं देता है तो उसकी सदस्यता समाप्त हो जाएगी।
                यदि 6 माह के अंदर रुकी हुई किश्त जमा कर दी जाती है तो सदस्य पुनः लाभान्वित रहेगा।
                अगर नहीं जमा कर पाने की स्थिति में मृत्यु दावा और सदस्यता लाभ स्वतः समाप्त हो जाएगा।
                मृत्यु दावा का लाभ 1 लाख से 10 लाख होगा।
                और अपंगता लाभ 20 हजार से 1 लाख तक रहेगा।
              </p>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-gray-800 font-semibold px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg w-full sm:w-auto">
                  दिवंगत सहयोग विवरण
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 sm:border-t-2"></div>

        {/* Second Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-100">
          <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
            <div className="flex-shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-gray-300 rounded-full mt-1.5 sm:mt-2"></div>
            <div className="flex-1">
              <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
                <span className="font-bold">SFRCT द्वारा</span> जो भी व्यक्ति अपनी बेटी की शादी के लिए ट्रस्ट से अपना रजिस्ट्रेशन कराकर के
                रजिस्ट्रेशन फीस 100₹ देगा, प्रति माह 200₹ का अंशदान देना होगा।
                5 वर्ष की आयु से 16 वर्ष की आयु तक लागू रहेगा।
                <br /><br />
                ट्रस्ट को जो सहयोग राशि प्राप्त होगी उसके अनुसार
                कम से कम 51000₹ हजार तथा अधिकतम 500000₹ की धन राशि
                दहेज के खातों में दी जायेगी।
                <br /><br />
                किश्त देने पर 6 माह तक 6 माह दौरान एक साथ जमा कराकर
                सुविधा जारी रहेगी। इससे अधिक समय होने पर सुविधा बंद कर दी जायेगी।
              </p>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-gray-800 font-semibold px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg w-full sm:w-auto">
                  बेटी विवाह सहयोग विवरण
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Info Section */}
        <div className="text-center text-gray-600 text-xs sm:text-sm md:text-base pt-4 sm:pt-6 md:pt-8">
          <p className="leading-relaxed">
            अधिक जानकारी के लिए संपर्क करें या हमारे कार्यालय में पधारें
          </p>
        </div>
      </div>
    </div>
  );
}