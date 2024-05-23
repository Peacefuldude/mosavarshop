import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
    const [data, setData] = useState({
        mobile: "",
        password: "",
        address: "",
        postal_code: "",
        user_name: "",
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
        const SIGN_UP_DATA = data;
        setButtonDisable(true);
        axios
            .post("url", SIGN_UP_DATA, axiosConficPost)
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
            <h1 className="font-bold text-xl mb-6">ساخت حساب کاربری</h1>
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
                <input
                    className="search-manufacturer__input mb-4"
                    type="address"
                    name="address"
                    placeholder="آدرس محل سکونت"
                    value={data.address}
                    onChange={changeHandler}
                />
                <input
                    className="search-manufacturer__input mb-4"
                    type="postal_code"
                    name="postal_code"
                    placeholder="کد پستی"
                    value={data.postal_code}
                    onChange={changeHandler}
                />
                <input
                    className="search-manufacturer__input mb-4"
                    type="user_name"
                    name="user_name"
                    placeholder="نام"
                    value={data.user_name}
                    onChange={changeHandler}
                />
                <button
                    className="w-full mb-4 transition-all ease-in-out transition-color delay-150 bg-orange-600 font-bold py-4 rounded-md hover:bg-orange-700"
                    onClick={submitHandler}
                >
                    ساخت حساب
                </button>
            </div>
        </div>
    );
};

export default Signup;
