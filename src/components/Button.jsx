export const Button = (props) => {
    const { type, value } = props
    return(
        <input className="w-full rounded-[45px] bg-indigo-600 font-semibold h-[54px] text-base text-white mb-[24px]" type={type} value={value} />
    )
}