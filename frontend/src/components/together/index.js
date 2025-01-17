import React from "react";
import "./style.css"
import Features from "./features";
import Login from "./../auth/login/index"

const Together = () => {

    return (
        <>
                <div className="togetherSections">

            <section>
                <body>
                    <div className="firstBox">
                        <h1 class="firstHeader">
                            <span class="mainText">Together</span>
                            <span class="subText">A world of communication and learning</span>
                        </h1>
                    </div>
                </body>
            </section>

            <section>
                <Features />
            </section>

            <section>
                <Login />
            </section>
            </div>
        </>
    )

}

export default Together;
