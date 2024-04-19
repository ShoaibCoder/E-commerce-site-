import React, { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const context = useContext(myContext);
  const { getAllProduct } = context;
  // Search State
  const [search, setSearch] = useState("");

  // Filter Search Data
  const filterSearchData = getAllProduct.filter((obj) =>
    obj.title.toLowerCase().includes(search)
  ).slice(0, 8);

  const navigate = useNavigate();

  return (
    <div className="relative z-50">
      {/* search input */}
      <div className="input flex justify-center z-50">
        <input
          type="text"
          placeholder="Search product with lowercase"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white placeholder-gray-500 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black"
        />
      </div>

      {/* search drop-down */}
      {search && (
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable text-black bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
          {filterSearchData.length > 0 ? (
            filterSearchData.map((item, index) => (
              <div
                key={index}
                className="py-2 px-2 cursor-pointer z-50"
                onClick={() => navigate(`/productinfo/${item.id}`)}
              >
                <div className="flex items-center gap-2 z-50">
                  <img className="w-10" src={item.productImageUrl} alt="" />
                  {item.title}
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center">
              <img
                src="https://lecadeau.in/assets/images/pnf.jpg"
                alt="img"
              height={'50px'} width={'50px'} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
