import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
       <div className="flex justify-between items-center font-bold bg-slate-700 px-4 py-4">
    <div className="text-white">
      Portfolio
    </div>
    <div className=" gap-4 flex text-white ">
    <a href=""> Home</a>
    <a href=""> About Us</a>
    <a href=""> Contact Us</a>
    <a href=""> Services</a>
    <a href=""> info</a>
    </div>
    
    </div>
 <div className="flex justify-between px-10 py-10 bg-slate-800 gap-4">
 <div className="mt-28  ml-24">
  <p className="text-3xl font-semibold  text-white ">
    Hello it's <span className=" text-cyan-600">Me</span> 
  </p>
  <h1 className="text-white font-serif text-5xl ">
    Aman Ijaz
   
  </h1>
  <p className="text-white">Lorem ipsum dolor sit amet consectetur <br></br> elit. Saepe, omnis.</p>
  <div className="mt-4"><button className="px-8 py-2 rounded-full bg-cyan-600 text-white"  >
  Download CV</button>
  <p>
  <button className=" flex items-center  text-cyan-600 pl-9"  >
  Preview CV <span className="text-xs">  <FaArrowRight /> </span> </button>
  </p></div>
 </div>

 <div>
  <img className="h-[500px] w-[500px]" src="a.png" alt=""/>
  
 </div>







 </div>
 <div className="flex bg-slate-900 justify-center gap-32">
 <div>
  <img className="h-[500px] w-[500px]  " src="a.png" alt=""/>
 </div>
 <div className=" mt-28">
 <h1 className="text-white font-serif text-5xl ">
    Aman Ijaz
  </h1>
  <p className="text-white mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam at <br></br>corporis sint eveniet possimus officia<br></br> magnam deserunt esse, repellendus quibusdam!</p>
  <div className="mt-4">
    <button className="px-8 py-2 rounded-full bg-cyan-600 text-white"  >
  Download CV</button>
  
  </div>
 </div>
 </div>

 <div>
  
 
 <div className=" bg-slate-800 pt-10 ">
{/* frist */}
<h1 className="flex justify-center text-3xl font-bold text-white
">Services</h1>
<div className="flex items-center justify-between px-5">

<div>
  
<div className=" text-cyan-500 font-serif font-bold text-[20px]">
<h1 className="pl-28">Graphic Designing</h1>
</div>
<div className="mt-24 w-[400px] h-[400px]3
">
  <img className="" src="10.png" alt="" />
</div>
</div>
{/* sec */}
<div className="">
<div className=" text-cyan-500 font-serif font-bold text-[20px]">
Web development

</div>
<div className=" w-[300px] h-[300px] 
">
<img className="mt-10 pt-8" src="8.png" alt="" />
</div>
</div>

{/* third */}
<div>
  <div className="flex justify-center text-cyan-500 px-24  font-serif font-bold text-[20px] mt-24">
web designing
</div>
<div className="mt-24 w-[330px] h-[350px]">
  <img className="pt-5" src="9.png" alt="" />
  </div>
  </div>
</div>
 </div>
 </div>


<div className=" bg-slate-900 h-[350px]">
<div className="flex justify-center gap-4">
<div className=" flex justify-center py-10  ">
 <input  className=" rounded-full px-3 py-1" type="text" placeholder=" name"/>
 </div>
 <div className=" flex justify-center py-10 ">
 <input  className=" rounded-full px-3 py-1" type="text" placeholder=" father name"/>
 </div>
 
</div>
<div className="flex justify-center gap-4 -mt-5">
<div className=" flex justify-center   ">
 <input  className=" rounded-full px-3 py-1" type="text" placeholder=" date of birth"/>
 </div>
 <div className=" flex justify-center   ">
 <input  className=" rounded-full px-3 py-1" type="text" placeholder="cnic"/>
 </div>
 
</div>
 <div className="   flex justify-center mt-7 ">
  <button className=" text-white bg-cyan-600 px-8 py-2 rounded-full">Submit</button></div>
</div>
<div>

</div>
<div className=" flex justify-between px-2 py-7 bg-slate-700">
  <div>
  <h1 className=" text-white font-serif font-bold">
  SOCIAL MEDIA
</h1>
<div className="flex justify-center gap-4 text-2 xl text-cyan-600">
<FaInstagramSquare />
<AiOutlineFacebook />
<CiLinkedin />
</div>
  </div>
  <div>
CONTACT  
  </div>
  <div className=" h-10 w-10 ">
<img className=" rounded-full" src="L.jpg" alt="" />
  </div>
</div>

  </div>
  );

}
