import React from 'react';

const Error = (props) => {
    return (
        <div className="error404">
            <div className="site-content-wrapper site-content error-find">
                <div className="row small-collapse">
                    <div className="small-12 columns">
                        <div className="site-content">
                            <section className="error-404 not-found">
                                <header className="page-header">
                                    <h1 className="page-title" dangerouslySetInnerHTML={props.Html} />
                                </header>
                                <div className="page-content">
                                    <div className="error-404-description">It looks like nothing was found at this time. Maybe try again?</div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error
