import { useState } from "react";

function PassGenerator(){
    const [value,setValue]=useState(8);
    const [UpperCase,setUpperCase]=useState(true)
    const [LowerCase,setLowerCase]=useState(true)
    const [Number,setNumber]=useState(true)
    const [SpecialChar,setSpecialChar]=useState(true)
    const [password,setPassword]=useState("");
    
    function getPassword(){
        let charset="";
        if(UpperCase){
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if(LowerCase){
            charset += "abcdefghijklmnopqrstuvwxyz";
        }
        if(Number){
            charset += "0123456789";
        }
        if(SpecialChar){
            charset += "!@#$%^&*()?/";
        }
        else if(!UpperCase && !LowerCase && !Number && !SpecialChar){
            alert("Please select any one of the above items")
            return;
        }
        let generatedPassword="";
        for(let i=0;i<value;i++){
                let randomIndex=Math.floor(Math.random()*charset.length);
                generatedPassword+=charset[randomIndex];
        }
        setPassword(generatedPassword);
    }

    function copyToClipboard(){
        navigator.clipboard.writeText(password);
        alert("Password Copied to Clipboard")
    }
    return(
        <div className="bg-gray-700 h-[100vh] w-[100vw] flex justify-center py-[150px] font-roboto">
            <div className="bg-white rounded-md shadow-md w-[30%] h-[60vh]">
                <div className="flex flex-col">
                    <div className="font-bold text-3xl text-black flex justify-center p-5">Strong Password Generator</div>
                    <div className="border border-dashed h-0 border-gray-400 pt-[30px] border-l-0 border-r-0 border-b-0"></div>
                    <div className="font-bold pl-10 text-xl text-black">Password Length:</div>
                    <input type="number" className="border border-gray-500 rounded pl-2 ml-10 mt-5 w-[90%] h-10 outline-none text-base" value={value} onChange={(e)=>setValue(e.target.value)}/>
                    <div className="flex flex-row pl-10 mt-5 m-3">
                        <input type="checkbox" className="w-5 h-5 border border-gray-500 cursor-pointer" checked={UpperCase} onChange={(e)=>setUpperCase(e.target.checked)}/>
                        <span className="font-normal pl-3 text-base">Include UpperCase</span>
                    </div>
                    <div className="flex flex-row pl-10 mt-5 m-3">
                        <input type="checkbox" className="w-5 h-5 border border-gray-500 cursor-pointer" checked={LowerCase} onChange={(e)=>setLowerCase(e.target.checked)}/>
                        <span className="font-normal pl-3 text-base">Include LowerCase</span>
                    </div>
                    <div className="flex flex-row pl-10 mt-5 m-3">
                        <input type="checkbox" className="w-5 h-5 border border-gray-500 cursor-pointer" checked={Number} onChange={(e)=>setNumber(e.target.checked)}/>
                        <span className="font-normal pl-3 text-base">Include Numbers</span>
                    </div>
                    <div className="flex flex-row pl-10 mt-5 m-3">
                        <input type="checkbox" className="w-5 h-5 border border-gray-500 cursor-pointer" checked={SpecialChar} onChange={(e)=>setSpecialChar(e.target.checked)}/>
                        <span className="font-normal pl-3 text-base">Include Symbols</span>
                    </div>
                    <button className="ml-10 w-[30%] h-[40px] rounded bg-blue-500 my-8 text-white text-base hover:bg-blue-800" onClick={getPassword}>
                        Generate Password
                    </button>
                    <div className="pl-10 flex flex-row ">
                        <input className="border border-gray-500 w-[75%] h-10 pl-2 rounded outline-none text-base" type="text" value={password}/>
                        <button className="ml-4 bg-green-500 w-[15%] h-10 rounded text-white hover:bg-green-800" onClick={copyToClipboard}>
                            COPY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const PasswordGenerator = () => {
  return (
    <PassGenerator/>
  )
}
