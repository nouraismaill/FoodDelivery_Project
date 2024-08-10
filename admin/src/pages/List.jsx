import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const respo = await axios.get(`${url}/api/food/list`);
    console.log(respo.data);
    if (respo.data.success) {
      setList(respo.data.data);
    } else {
      toast.error("Error");
    }
  };
  const deleteItems = async (foodID) => {
    const response = await axios.post(`${url}/api/food/delete`, { id: foodID });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full my-7 px-4 md:px-9">
      <div className="w-full">
        <p className="text-gray-800 text-xl font-bold sm:text-2xl">
          All Food List
        </p>
      </div>
      <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto w-full">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b hidden lg:table-header-group md:table-header-group ">
            <tr>
              <th className="py-3 px-6">Image</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Category</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {list.map((item, idx) => (
              <tr
                key={idx}
                className="flex flex-col sm:table-row md:table-row "
              >
                <td className="px-6 py-4 whitespace-nowrap flex items-center justify-center sm:justify-start">
                  <img
                    className="lg:w-[50px] md:w-[50px] sm:w-fit"
                    src={`${url}/images/` + item.image}
                    alt={item.name}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap sm:px-1">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-red-600"
                    onClick={() => deleteItems(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
