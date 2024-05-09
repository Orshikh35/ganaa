"use client"
import React from "react";
import Bg from "@/assets/BG.png";
import Logo from "@/assets/Screenshot_2024-04-23_at_21.38.44-removebg.png";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  return (
    <div>
        <img src={Bg.src} alt="" className="w-screen h-screen absolute opacity-100"/>
        <div className="relative flex flex-col justify-center items-center gap-10 pt-[100px]">
            <div className="flex flex-col justify-center items-center">
                <img src={Logo.src} alt="" className=" w-[100px]" />
                <h1 className="text-white font-bold text-2xl text-center">Харилцаа холбооны <br />зохицуулах хороо</h1>
            </div>
            <div className="flex flex-col gap-6">
                <input type="text" placeholder="Нэвтрэх" className="py-2 px-8 rounded-xl w-[450px]"/>
                <input type="password" placeholder="Нууц үг"  className="py-2 px-8 rounded-xl w-[450px]"/>
                <button className="py-2 px-8 rounded-xl w-[450px] bg-[#004DEB] text-white" onClick={()=> router.push("/Dashboard")}>Нэвтрэх</button>
                <div className="flex justify-between items-center">
                    <button className="text-white font-light">Бүртгүүлэх</button>
                    <button className="text-white font-light">Нууц үг мартсан</button>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Login;
