import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";


const HomePageProductCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        // console.log(item)
        dispatch(addToCart(item));
        toast.success("Add to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }

    // console.log(cartItems)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])


    return (
        <div className="mt-10 shadow-md overflow-hidden " >
            {/* Heading  */}
            <div className="">
                <h1 className="text text-center mb-5 text-2xl font-semibold" >Bestselling Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font  rounded-3xl" >
                <div className="container px-5 py-5 mx-auto ">
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0, 8).map((item, index) => {
                            const { id, title, price, productImageUrl } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="lg:h-90 lg:w-full h-full w-80 border border-gray-300 rounded-xl overflow-hidden shadow-2xl cursor-pointer ">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="lg:h-90 lg:w-full h-80 w-60 " 
                                            src={productImageUrl}
                                            alt="blog"
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-bold text-indigo-500 mb-1">
                                                FabDeal
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;

