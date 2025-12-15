"use client"
export default function TeamPage() {
  return (
    <div className="bg-gray-50 py-8 sm:py-10 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-1 sm:mb-2">
            प्रदेश कोर टीम
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 leading-snug">
            Meet Our Experience &<br />Expert Team
          </h2>
        </div>

        {/* Team Member Card */}
        <div className="flex justify-center">
          <div className="text-center">
            {/* Photo Circle */}
            <div className="relative inline-block mb-4 sm:mb-5 md:mb-6">
              <div className="w-48 h-48 xs:w-52 xs:h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 overflow-hidden border-4 sm:border-6 md:border-8 border-white shadow-lg">
                <img
                  src="/group-photo.jpg"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border border-gray-300 sm:border-2"></div>
              <div className="absolute top-4 -right-3 sm:top-6 sm:-right-4 md:top-8 md:-right-6 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-gray-300"></div>
            </div>

            {/* Name */}
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">
              अनुराज सिंह
            </h3>

            {/* Phone */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-0.5 sm:mb-1">
              9756441626
            </p>

            {/* Designation */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
              (संस्थापक)
            </p>
          </div>
        </div>

                
       <div className="max-w-7xl mx-auto px-4 py-10">
  {/* Grid Wrapper */}
  <div className="grid grid-cols-3 gap-6">

    {/* Card 1 */}
    <div className="flex justify-center">
      <div className="text-center">
        <div className="relative inline-block mb-4">
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 overflow-hidden border-4 md:border-6 border-white shadow-lg">
            <img
              src="/Rakhi_chauhan.jpeg"
              alt="राखी चौहान"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
          राखी चौहान
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          (सह-संस्थापक)
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex justify-center">
      <div className="text-center">
        <div className="relative inline-block mb-4">
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 overflow-hidden border-4 md:border-6 border-white shadow-lg">
            <img
              src="/Devendra'.jpeg"
              alt="देवेन्द्र यादव"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
          देवेन्द्र यादव
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          (सह-संस्थापक)
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex justify-center">
      <div className="text-center">
        <div className="relative inline-block mb-4">
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 overflow-hidden border-4 md:border-6 border-white shadow-lg">
            <img
              src="/Surmesh.jpeg"
              alt="सुरमेश यादव"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
          सुरमेश यादव
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          (सह-संस्थापक)
        </p>
      </div>
    </div>

  </div>
</div>




      </div>

      <style jsx>{`
        @media (max-width: 375px) {
          .xs\:w-52 {
            width: 13rem;
          }
          .xs\:h-52 {
            height: 13rem;
          }
        }
      `}</style>
    </div>
  );
}