import React from 'react';

const Loading = () => {
   return (
      <div className="min-h-screen flex items-center justify-center bg-white">
         <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
         </div>
      </div>
   );
};

export default Loading; 