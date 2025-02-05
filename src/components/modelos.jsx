import React from 'react';

const Modelos = React.memo(({Model_Name, Model_ID}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-700">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-2">{Model_Name}</h2>
        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
          ID: {Model_ID}
        </span>
      </div>
    </div>
  )

})

export default Modelos;
