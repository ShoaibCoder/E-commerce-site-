import React, { useContext } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductDetail from "../../components/mainper/ProductDetail";
import Layout from "../../components/layout/Layout";
import OrderDetail from "../../components/mainper/OrderDetail";
import UserDetail from "../../components/mainper/UserDetail";
import myContext from "../../context/myContext";

const MainPerson = () => {

  const user = JSON.parse(localStorage.getItem("users"))
  const context = useContext(myContext);
  const {getAllProduct, getAllOrder, getAllUser} = context;

  return (
    <Layout>
    <div>
      {/* Top */}
      <div className="top mb-5 px-10 mt-5">
        <div className=" bg-indigo-100 py-5 border border-indigo-700 rounded-lg" style={{boxShadow:"0 14px 16px rgba(0,0,0,0.12)"}}>
          <h1 className=" text-center text-2xl font-bold text-indigo-900">
            Admin Dashboard
          </h1>
        </div>
      </div>

      <div className="px-10">
        {/* Mid  */}
        <div className="mid mb-5">
          {/* main  */}
          <div className=" bg-indigo-100 py-5 rounded-xl border border-indigo-700" style={{boxShadow:"0 14px 16px rgba(0,0,0,0.21)"}}>
            {/* image  */}
            <div className="flex justify-center">
              <img
                src="admin.png"
                alt="" height={100} width={100}
              />
            </div>
            {/* text  */}
            <div className="">
              <h1 className=" text-center text-lg ">
                <span className=" font-bold">Name : </span>
                 {user?.name}
              </h1>
              <h1 className=" text-center text-lg">
                <span className=" font-bold">Email : </span>
                {user?.email}
              </h1>
              <h1 className=" text-center text-lg"><span className=" font-bold">Date : </span>
               {user?.date}
               </h1>
               <h1 className=" text-center text-lg ">
                <span className=" font-bold">Role : </span>
                {user?.role}
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="">
            <Tabs>
          <TabList className="flex flex-wrap mb-3 text-center justify-center" >
            {/* Total Products */}

            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer " >
              <div className=" border bg-indigo-100 hover:bg-indigo-400 border-indigo-700 px-4 py-3 rounded-xl " style={{boxShadow:"0 14px 16px rgba(0,0,0,0.1)"}}>
                <div className="text-indigo-500  mb-3 inline-block">
                 
                  <img src="cart.png" alt="" className="h-18 w-20"/>
                </div>
                <h2 className="title-font font-medium text-3xl text-indigo-900 fonts1">
                 {getAllProduct.length}
                </h2>
                <p className=" text-indigo-900  font-bold">Total Products</p>
              </div>
            </Tab>

            {/* Total Order  */}
            <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
              <div className=" border bg-indigo-100 hover:bg-indigo-400 border-indigo-700 px-4 py-3 rounded-xl" style={{boxShadow:"0 14px 16px rgba(0,0,0,0.1)"}}>
                <div className="text-indigo-500  mb-3 inline-block">
                 
                  <img src="order.png" alt="" className="h-18 w-20"/>
                </div>
                <h2 className="title-font font-medium text-3xl text-indigo-900 fonts1">
                 {getAllOrder.length}
                </h2>
                <p className=" text-indigo-900  font-bold">Total Order</p>
              </div>
            </Tab>

            {/* Total User  */}
            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
              <div className=" border bg-indigo-100 hover:bg-indigo-400 border-indigo-700 px-4 py-3 rounded-xl" style={{boxShadow:"5px 14px 16px rgba(0,0,0,0.16)"}}>
                <div className="text-indigo-500  mb-3 inline-block">
                  
                <img src="user.png" alt="" className="h-18 w-20"/>
                </div>
                <h2 className="title-font font-medium text-3xl text-indigo-900 fonts1">
                {getAllUser.length}
                </h2>
                <p className=" text-indigo-900  font-bold">Total User</p>
              </div>
            </Tab>
          </TabList>
         
          <TabPanel>
         <ProductDetail/>
          </TabPanel>
      

          <TabPanel>
          <OrderDetail/>
          </TabPanel>
         


          <TabPanel>
          <UserDetail/>
          </TabPanel>
           

          </Tabs>
          <br />
           <br />
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default MainPerson;
