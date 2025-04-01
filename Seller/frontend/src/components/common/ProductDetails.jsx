import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/operations/productDetailsAPI';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null); // State to store product details
    const [loading, setLoading] = useState(true); // State to handle loading
    const dispatch = useDispatch()
    const {token} = useSelector((state)=>state.auth)

    const handleAddToCart =  () =>{
        if(token){
            dispatch(addToCart(product))
            console.log(product.productName, "Added to Cart")
            return
        }
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const result = await getProduct(id);
                
                if (result) {
                    setProduct(result); // Update the product state
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false); 
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>; // Show a loading message while fetching data
    }

    if (!product) {
        return <div>Product not found</div>; // Handle case where product is not found
    }
    return (
        <>
            <div className='w-11/12 mx-auto mt-10'>
                <div className='flex w-full'>
                    {/* Image */}
                    <div className='flex w-[50%]'>
                        <div className='w-[15%] mr-2 '>
                            <img
                                className='border-[1px] border-slate-400'
                                src={product.productThumbnail}
                                alt={product.productName}
                            />
                        </div>
                        <div className='w-[85%]'>
                            <img
                                className='border-[2px] border-slate-300'
                                src={product.productThumbnail}
                                alt={product.productName}
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div>
                        <div>
                            <p className='text-2xl tracking-wider font-semibold mb-1'>
                                {product.productName}
                            </p>
                            <p className=''>Ratings</p>
                            <p className='text-3xl tracking-wide font-semibold my-4'>
                                ${product.productPrice}
                            </p>
                            <p className='mb-8'>{product.productDescription}</p>
                        </div>

                        {/* Size */}
                        <h3 className='mb-2'>Select Size</h3>
                        <div className='flex gap-x-3'>
                            {product.sizes?.map((size, index) => (
                                <div
                                    key={index}
                                    className='bg-slate-300 p-1 px-4 border border-slate-500 cursor-pointer hover:border-red-600 transition-all duration-75'
                                >
                                    <p>{size}</p>
                                </div>
                            ))}
                        </div>

                        {/* Add to Cart Button */}
                        <div className='mt-8'>
                            <button 
                                onClick={handleAddToCart}
                                className='bg-black p-3 px-7 tracking-wider text-white'>
                                Add to Cart
                            </button>
                        </div>
                        <div className='border border-slate-400 w-full mt-7'></div>
                        <div className='mt-6 text-xs text-gray-800'>
                            <p>100% Original Product</p>
                            <p>Cash on Delivery available on this Product</p>
                            <p>Easy return and exchange policy within 7 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;