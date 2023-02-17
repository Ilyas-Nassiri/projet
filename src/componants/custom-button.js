
const CustomButton=({icon,text})=>{
    return (
     <div className="h-14 bg-white flex justify-around">
        <span>{icon}</span>
        <span>{text}</span>
     </div>
    )
}

export default CustomButton;