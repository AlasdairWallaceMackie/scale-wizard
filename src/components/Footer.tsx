import React from "react"

export default function Footer(){
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-light p-2 text-center">
            <span>©{currentYear} Alasdair Wallace Mackie</span>
        </footer>
    )
}