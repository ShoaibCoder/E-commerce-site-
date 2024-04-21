import { useNavigate } from "react-router";

const category = [
    {
        image: 'https://image.uniqlo.com/UQ/ST3/eu/imagesother/2024/appeal/m-tshirts-mb.jpg',
        name: 't-shirt'
    },
    {
        image: 'https://getketchadmin.getketch.com/product/8905980505632/660/HLSS000869_1.JPG',
        name: 'jacket'
    },
    {
        image: 'https://images.unsplash.com/photo-1604409273943-ed5b1a083a51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
        name: 'mobile'
    },
    {
        image: 'https://images.unsplash.com/photo-1595087873528-1fe582a3b302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
        name: 'laptop'
    },
    {
        image: 'https://images.unsplash.com/photo-1636718282214-0b4162a154f0?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'shoes'
    },
    {
        image: 'https://wakefitdev.gumlet.io/img/npl_modified_images/Magnus/WSFAMGNN3FNTN/1.jpg?w=732',
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
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs border-2 border-gray-500 rounded-3xl 12px transition-all hover:bg-white cursor-pointer mb-1 overflow-hidden cursor-pointer"  >
                                        <div className="flex justify-center mb-12 ">
                                            <img src={item.image} alt="img" className="w-24 h-24 rounded-md 12px hover:scale-110 transition-transform duration-300 ease-in-out" style={{ width: '100%', height: '100%' }} />
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





