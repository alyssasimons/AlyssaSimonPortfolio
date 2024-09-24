import React from "react"

export default function Footer() {
    return (
        <footer id="contact">
            <p> Built and designed with ♡ by <a href="https://www.linkedin.com/in/alyssasimon" target="_blank">Alyssa Simon</a></p>
            <div className="footerlinks">
                <a href="https://www.linkedin.com/in/alyssasimon" target="_blank"><i className="fa-brands fa-linkedin footericon"></i></a>
                <a href="https://github.com/alyssasimons" target="_blank"><i className="fa-brands fa-github footericon"></i></a>
                <a href="mailto:alyssasimons519@gmail.com"><i className="fa-solid fa-envelope footericon"></i></a>
            </div>
        </footer>
    )
}