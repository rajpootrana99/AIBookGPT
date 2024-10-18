export default function Sidebar(){
    return(
        <div className="h-full fixed p-[16px]">
            <div className="bg-white w-[285px] rounded-[0_14px_14px_0] min-h-full overflow-x-hidden shadow-[14px_17px_40px_4px_rgba(112,144,176,0.08)]">
                <div className="flex flex-col h-full pt-[20px] pb-[26px] rounded-[30px]">
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold text-3xl text-center text-indigo-950 mt-[30px] mb-[30px]">AI Book GPT</h3>
                        <div className="h-[1px] mb-[20px] bg-gray-200 w-full"></div>
                    </div>
                    <div className="flex flex-col mb-auto mt-[8px] px-8 gap-4">
                        <a href="">
                            <div className="flex items-center gap-2">
                                <div className="">
                                    <svg stroke="#6b7280 " fill="#6b7280" strokeWidth="0" viewBox="0 0 24 24" focusable="false" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"></path></svg>
                                </div>
                                <p className="text-gray-500 font-medium text-base hover:text-indigo-600">Books</p>
                            </div>
                        </a>
                        <a href="">
                            <div className="flex items-center gap-2">
                                <div className="">
                                <svg stroke="#4f46e5" fill="#4f46e5" strokeWidth="0" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-18176s2" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"></path></svg>
                                </div>
                                <p className="text-gray-500 font-medium text-base hover:text-indigo-600">Chat</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}