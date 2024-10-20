export default function Header(){
    return(
        <div className="max-w-screen px-8 bg-indigo-600 h-[74px] mx-[20px] shadow-[14px_17px_40px_4px_rgba(112,144,176,0.08) rounded-[0_0_30px_30px] flex items-center justify-between">
            <h1 className="text-white font-bold text-2xl">AI Book GPT</h1>
            <a href="" className="text-white font-medium text-base">Upload Books</a>
            <a href="" className="flex gap-2 items-center text-white font-base font-medium"><img src="vite.svg" alt="" />Profile</a>

        </div>
    )
}