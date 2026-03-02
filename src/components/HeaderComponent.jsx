export default function HeaderComponent() {
    return (
        <header className="">

            <nav className="navbar mx-auto navbar-expand-lg" style={{maxWidth: '1200px'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className="text-success">B</span>ool-viaggi</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Viaggi</a>
                            </li>
                            <li className="nav-item dropdown">
                             
                            </li>
                        </ul>
                            <div className="nav-item  ">
                                <a href="#" className="nav-link  " aria-disabled="true">Login</a>
                            </div>
                        
                    </div>
                </div>
            </nav>
        </header>
    )
}