"use client"
import React, {useEffect, useState} from 'react'

export default function Page() {

    const [count, setCount] = useState(0);
    const [title, setTitle] = useState("My title...");

    useEffect(()=>{
        console.log("เปิดแอปแล้ว");
        setCount(100);
    },[])

    useEffect(()=> {
        console.log("Count เปลี่ยนหน้าแล้ว");
        if (count === 120){
            setTitle("Count ถึง 120 แล้ว");
        }
        if (count === 130){
            setTitle("Count ถึง 130 แล้ว");
        }
        if (count === 140){
            setTitle("Count ถึง 140 แล้ว");
        }
        if (count === 150){
            setTitle("Count หยุดดดดดดดดดดดดดดดดดดดดดดดดดดดดด");
        }
    }, [count]); // Ensure this effect runs only when `count` changes

    function handleClick(){
        setCount(count + 1);
    }

    return (

    <div>
        <h1>Count : {count}</h1>
        <h1>{title}</h1>
        <button onClick={handleClick}> +Add </button>
    </div>

    );
}
