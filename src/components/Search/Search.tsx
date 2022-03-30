import React from 'react'
import './Search.scss'

export default function Search() {
    return (
        <div className="search">
            <div className="search__field">
                <div className="v-field--text">
                    <div className="v-field__wrapper">
                        <div className="v-field__icon">
                            <svg height="20" width="20" className="icon"></svg>
                        </div>
                        <label htmlFor="v-text-input__input">
                            <input type="text" className='v-text-input__input' placeholder='Поиск' />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
