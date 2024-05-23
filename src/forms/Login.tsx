import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
    const [data, setData] = useState({
        mobile: "",
        password: "",
    });

    const changeHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
        console.log(data);
    };

    const [buttonDisable, setButtonDisable] = useState(false);
    // const Navigate = useNavigate();
    const [welcomeMassage, setWelcomeMassage] = useState(false);

    const jwtToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblVzZXJuYW1lIjoic2luYWtoIiwiaWF0IjoxNjcwMzUxNTE4LCJleHAiOjE2NzEyMTU1MTh9.zUx8Imt-8g7RecOZ39Jez3esTRJ-huQP99uGmArPVqA";
    const axiosConficPost = {
        headers: {
            Authorization: "Bearer " + jwtToken,
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    };

    const [isError_1, setIsError_1] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        const LOGIN_DATA = data;
        setButtonDisable(true);
        axios
            .post("url", LOGIN_DATA, axiosConficPost)
            .then((response) => {
                localStorage.setItem(
                    "mosavarshopuser",
                    JSON.stringify(response.data)
                );
                setWelcomeMassage(true);
                // setTimeout(() => Navigate("/home"), 2000);
            })

            .catch((errors) => {
                setIsError_1(errors.response.data.message);
                console.log(errors);
                setButtonDisable(false);
            });
    };

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl mb-6">ورود به حساب کاربری</h1>
            <div className="w-full flex flex-col justify-center items-center">
                <input
                    className="search-manufacturer__input mb-4"
                    type="text"
                    name="mobile"
                    placeholder="تلفن همراه"
                    value={data.mobile}
                    onChange={changeHandler}
                />
                <input
                    className="search-manufacturer__input mb-4"
                    type="password"
                    name="password"
                    placeholder="رمز عبور"
                    value={data.password}
                    onChange={changeHandler}
                />
                <button
                    className="w-full mb-4 transition-all ease-in-out transition-color delay-150 bg-orange-600 font-bold py-4 rounded-md hover:bg-orange-700"
                    onClick={submitHandler}
                >
                    ورود
                </button>
            </div>
        </div>
    );
};

export default Login;
