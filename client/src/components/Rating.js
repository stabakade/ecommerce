import React from 'react'
import propTypes from 'prop-types' // shortcut: impt

const Rating = ({ value, text, color }) => {
    return (
        <div className='rating'> 
            <span>
                {/* we can pass color from Product.js like color='red' but we will use default value */}
                <i style={{color}}
                    className={value >= 1 
                    ? 'fas fa-star' 
                    : value >= 0.5 
                    ? 'fas fa-star-half-alt' 
                    : 'far fa-star'}>
                </i>
                <i style={{color}}
                    className={value >= 2 
                    ? 'fas fa-star' 
                    : value >= 1.5 
                    ? 'fas fa-star-half-alt' 
                    : 'far fa-star'}>
                </i>
                <i style={{color}}
                    className={value >= 3 
                    ? 'fas fa-star' 
                    : value >= 2.5 
                    ? 'fas fa-star-half-alt' 
                    : 'far fa-star'}>
                </i>
                <i style={{color}}
                    className={value >= 4 
                    ? 'fas fa-star'
                    : value >= 3.5 
                    ? 'fas fa-star-half-alt' 
                    : 'far fa-star'}>
                </i>
                <i style={{color}}
                    className={value >= 5 
                    ? 'fas fa-star' 
                    : value >= 4.5 
                    ? 'fas fa-star-half-alt' 
                    : 'far fa-star'}>
                </i>
            </span>
            {/* it means if there's text then show it */}
            <span>{text && text}</span>
        </div>
    )
}
 
Rating.defaultProps = {
    color: 'yellow',
}

Rating.propTypes = {
    value: propTypes.number.isRequired,
    text: propTypes.string.isRequired,
    color: propTypes.string,
}

export default Rating
