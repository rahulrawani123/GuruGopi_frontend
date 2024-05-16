import React, { useEffect, useState } from 'react';

const ContactData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/contact_data'); // Adjust the endpoint as needed
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/contact_data/${id}`, {
        method: 'DELETE',
      });
      setData(data.filter(item => item._id !== id)); // Update state to remove deleted item
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">Contact Data</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile No</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.first_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.last_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.mobile_no}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.message}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleDelete(item._id)} 
                      className="py-2 px-5 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactData;
