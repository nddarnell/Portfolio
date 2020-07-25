import React from "react"

function Navbar(){
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <a class="navbar-brand" href="./index.html">Nathaniel Darnell</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="./portfolio.html">Portfolio</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="./contact.html">Contact</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="./Assets/Nathaniel_Darnell_Resume.pdf" target="_blank">Resume</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="./index.html">About <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;