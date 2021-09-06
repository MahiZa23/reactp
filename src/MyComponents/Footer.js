import React from 'react'
// import './footer.css'    //i will be importing this when i am using a footer.css style sheet 

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "70vh",
        width: "100%",
        backgroundColor: "red",
        border: "2px solid red"
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
