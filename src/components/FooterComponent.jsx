import React from 'react'

function FooterComponent() {
    return (
        <>
            <footer style={{backgroundColor: '#CDF0EA'}} className="fixed-bottom page-footer font-small blue pt-2 text-dark ">
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-md-12 mt-md-0 mt-3">
                                <h5 className="text-uppercase">Happy cake </h5>
                                <p>El lugar de los pasteles felices!!</p>
                            </div>

                            <hr className="clearfix w-100 d-md-none pb-0" />
                        </div>
                    </div>

                    <div className="footer-copyright text-center py-3">© Happy Cake 2022 Copyright:
                        <a href="https://Happycake.com/" style={{ textDecoration: 'none', color: '#54BAB9' }}> www.Happycake.com</a>
                    </div>
            </footer>
        </>
    )
}

export default FooterComponent
