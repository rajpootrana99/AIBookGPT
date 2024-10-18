export const Input = (props) => {
    const {type, placeholder, name} = props;
    return (
        <input className="
            w-full font-medium text-base bg-transparent placeholder-gray-400 text-gray-500 border border-1 border-grey-200 rounded-[12px] h-[54px] px-[20px] mb-[24px]"
            type={type} placeholder={placeholder} name={name} />
    )
}