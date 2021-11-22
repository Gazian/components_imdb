import React from "react"

const Film = ({name,children}) => {
    return(
        <>
        <ul>
        <p>
        <a href={children}>{name}</a>
        </p>
        </ul>
        </>
    )
}

export default Film;