import React from "react";

const CustomInput = (props) => {
  const { type, label, i_id, i_class, name, val, onChng, onBlr } = props;
  return (
    <div className=" w-full   flex flex-col"><label htmlFor={label} className=" text-2xl  text-slate-600">{label}</label>

      <input
        type={type}
        className={`   ${i_class}`}
        id={i_id}
        placeholder={label}  
        name={name}
        value={val}
        onChange={onChng}
        onBlur={onBlr}
      />
      
    </div>
  );
};

export default CustomInput;