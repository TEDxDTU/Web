import React, { useContext } from "react";
import { FormContext } from "../../contextFiles/formContext";
import { OptionsButton } from "./SharedComp";

export default function Profile({ setOption, option }) {

    const [form, setForm] = useContext(FormContext);

    return (
        <div className="">
            <div className="flex justify-around">
                <img src={form?.imageURL} className="h-24 w-24 rounded-full text-center" />
            </div>
            <div className="bg-[rgba(100,100,100,0.3)] rounded-md -mt-12 pt-14 pb-2">
                <div className="text-center font-semibold text-xl capitalize">{form?.name}</div>
                <div className="text-center text-sm">Student</div>
                <div className="h-0.5 bg-black my-8"></div>
                <div className="flex justify-around">
                    <div>
                        <div className="flex justify-start" >
                            <OptionsButton src='/Dashboard/profile.svg' name='Profile' setOption={setOption} option={option} /></div>
                        <div className="flex justify-start" >
                            <OptionsButton src='/Dashboard/ticket.svg' name='Tickets' setOption={setOption} option={option} /></div>
                        <div className="flex justify-start" >
                            <OptionsButton src='/Dashboard/settings.svg' name='Settings' setOption={setOption} option={option} /></div>
                    </div>
                </div>
            </div>
        </div>)
}