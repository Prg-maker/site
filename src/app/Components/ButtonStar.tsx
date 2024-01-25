"use client"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React , { useState } from 'react';

interface colorProps{
    color: "primary" | "success"
}

export function ButtonStar() {

    const [color, setColor] = useState("inherit") 

    function changeColor(){
      
        if(color == "success") setColor("inherit")
        else setColor("success")

    }
  return (
    <button className="p-2 rounded-lg hover:bg-[#f7f7f7]" onClick={changeColor}>
      <StarBorderIcon  className="w-5 " color={color}/>
    </button>
  );
}
