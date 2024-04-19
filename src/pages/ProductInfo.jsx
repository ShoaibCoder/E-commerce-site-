import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../components/layout/Layout";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import myContext from "../context/myContext";
import { fireDB } from "../firebase/FirebaseConfig";
import Loader from "../components/loader/Loader";
import { addToCart, deleteFromCart } from "../redux/cartSlice";


const ProductInfo = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState('');
    const { id } = useParams();

    // getProductData
    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id));
            setProduct({ ...productTemp.data(), id: productTemp.id });
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Deleted from cart");
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        getProductData();
    }, []);

    return (
         <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
                {loading ? (
                    <div className="flex justify-center items-center h-screen ">
                        <Loader />
                    </div>
                ) : (
                    <div className="max-w-6xl px-4 mx-auto ">
                        <div className="flex flex-wrap mb-24 -mx-4  ">
                            <div className="w-full h-full px-7 mb-8 md:w-1/2 md:mb-0 ">
                                <div className="">
                                    <div className="">
                                        <img
                                            className=" w-full  lg:h-[39em] rounded-lg"
                                            src={product?.productImageUrl}
                                            alt="" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2">
                                <div className="lg:pl-20">
                                    <div className="mb-6">
                                        <h2 className="max-w-xl mb-6 text-xl font-bold leading-loose tracking-wide text-gray-800 md:text-2xl dark:text-gray-300">
                                            {product?.title}
                                        </h2>
                                      
                                        <p className="inline-block text-2xl font-semibold text-gray-900 dark:text-gray-400">
                                            <span>₹ {product?.price}</span>
                                        </p>
                                    </div>
                                    <div className="mb-6">
                                        <h2 className="mb-2 text-lg font-bold text-gray-800 dark:text-gray-400">
                                            Description :
                                        </h2>
                                        <p>{product?.description}</p>
                                    </div>
                               
                                    <div className="flex justify-between mb-6">
                                        {cartItems.some((p) => p.id === product.id) ? (
                                            <button
                                                onClick={() => deleteCart(product)}
                                                className="w-full px-2 py-3 text-center text-white bg-red-900 border border--600 hover:bg-red-800 hover:text-gray-100 rounded-xl"
                                            >
                                                Delete from Cart
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => addCart(product)}
                                                className="w-full px-2 py-3 text-center text-indigo-600 bg-indigo-100 border border-indigo-600 hover:bg-indigo-600 hover:text-gray-100 rounded-xl"
                                            >
                                                Add to Cart
                                            </button>
                                        )}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            </Layout>
    );
};

export default ProductInfo;






