import { useNavigate } from "react-router";

const category = [
    {
        image: 't_shirt.png',
        name: 't-shirt'
    },
    {
        image: 'jacket.png',
        name: 'jacket'
    },
    {
        image: 'mobile.png',
        name: 'mobile'
    },
    {
        image: 'laptop.png',
        name: 'laptop'
    },
    {
        image: 'https://p7.hiclipart.com/preview/624/596/891/nike-free-nike-air-max-sneakers-shoe-red-shoes.jpg',
        name: 'shoes'
    },
    {
        image: 'sofa-2.png',
        name: 'home'
    }
    

]

const Category = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5 " >
                <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                    <div className="flex ">
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs border-2 border-gray-500 rounded-3xl 12px bg-gradient-to-r from-[#e5dce0] to-[#ce9a09]  transition-all  hover:bg-white cursor-pointer mb-1 "  >
                                        <div className="flex justify-center mb-12 ">
                                            <img src={item.image} alt="img" className="w-24 h-24" style={{ width: '100%', height: '100%' }} />
                                        </div>
                                      
                                    </div>

                                    <h1 className='first-letter:uppercase  text-sm text-black lg:text-lg text-center font-medium title-font'>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar {-ms-overflow-style: none; scrollbar-width: none; } .hide-scroll-bar::-webkit-scrollbar { display: none; }" }} />
        </div>
    );
}

export default Category;





