
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";



const MyCart = () => {
   const{user} = useContext(AuthContext )  
   const email = user.email;

    const[ MyCartData,setMyCartData] = useState([])
    
console.log(MyCartData)
    useEffect(()=>{
        fetch(`https://technology-and-electronics-server-cpm8qpz8p-mahizaman490.vercel.app/cartData/${email}`)
        .then(res => res.json())
        .then(data =>{console.log(data), 
        setMyCartData(data)
        
        })
    },[email])

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://technology-and-electronics-server-cpm8qpz8p-mahizaman490.vercel.app/cartData/${_id}`,
                {method: "DELETE"}
                )
                .then(res => res.json())
                .then(data => {console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                     
                    }
                   
                })
              
            }
          })
            const remaining = MyCartData.filter(cart => cart._id !== _id)
            setMyCartData(remaining)
      
    } 
 
    
    
    return (
        <>
        <div className="w-10/12 mx-auto md:py-20 py-8">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[300px] md:mb-[600px] lg:mb-[1000px]">

                {
                   MyCartData.map(cart => <div key={cart._id} className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                   <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                       <img
                        src={cart.product_img}
                           className="object-cover w-full h-full"
                       />
                   </div>
                   <div className="p-6">
                       <div className="flex items-center justify-between mb-2">
                           <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                               {cart.name}
                           </p>
                           <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                             {cart.brand}
                           </p>
                           <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        
                              {cart.type}
                           </p>
                           <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            
                             {cart.price}
                           </p>
           
                       </div>
                       <div className="rating">
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                       </div>
                       <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                   
                        {cart.description}
                       </p>
                   </div>
                   <div className="p-6 pt-0">
                     
                           <button onClick={() => handleDelete(cart._id)}
                               className="block w-full select-none rounded-lg bg-orange-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                               type="button"
                           >
                               Delete item
                           </button>
                
                   </div>
               </div>) 
                }
     
        </div>
        </div>
       
        </>
    );
    
};

export default MyCart;