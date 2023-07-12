import React from 'react'

import "../styles/NewUser.css";

export default function NewUser() {
  return (
    <div className="user-container">
        <div className="user-container__card">
            <div className="user-container__card__title">
                <h1>
                    Welcome!
                </h1>
            </div>
            <div className="user-container__card__body">
                <form>
                    <div className="user-container__card__body__input">
                        <input type="text" name="name" id="name" placeholder='Name' />
                    </div>
                    <div className="user-container__card__body__input">
                        <input type="text" name="username" id="username" placeholder='Username'/>
                    </div>
                    <div className="user-container__card__body__input">
                        <input type="text" name="email" id="email" placeholder='Email'/>
                    </div>
                    <div className="user-container__card__body__input">
                        <input type="text" name="phone" id="phone" placeholder='Phone'/>
                    </div>
                </form>
            </div>
            <div className="user-container__card__footer">
                <div className="user-container__card__footer__left__button">
                    <button>
                        Skip
                    </button>
                </div>
                <div className="user-container__card__footer__right__button">
                    <button>
                        Submit
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
