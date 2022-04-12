import React, {useState} from 'react';

import "./Preview.scss"

const Preview = () => {
    return <div>
    <div className="preview">
        <div className="preview__heading">
            Preview
        </div>
        <div className="preview__subheading">
            You will be able to customize the fields in later stage
        </div>
    </div>
    <div className="form">
        <div className="form__heading">
            Name of the Enquiry Form
        </div>
        <div className="form__subheading">
            You will be able to customize the fields in a later stage
        </div>
        <div className="form__description">
            Provide the following information to process your application
        </div>
    </div>
    <div className="form-fields">
        <form>
            <div className="form-fields__field">
                <label>
                    1. Name*
                    <div className="form-fields__input">
                        <input type="text" placeholder="enter your name"/>
                    </div>
                </label>
            </div>

            <div className="form-fields__field">
                <label>
                    2. Email*
                    <div className="">
                        <input type="text" placeholder="email"/>
                    </div>
                </label>
            </div>

            <div className="form-fields__field">
                <label>
                    3. DOB*
                    <div className="">
                        <input type="text" placeholder="date of birth"/>
                    </div>
                </label>
            </div>

            <div className="form-fields__field">
                <label>
                    4. Contact No*
                    <div className="">
                        <input type="text" placeholder="contact no"/>
                    </div>
                </label>
            </div>
        </form>
    </div>
    </div>;
};

export default Preview;
