function Latest() {
    return (
        <div>
            <div className="laptop">
                <div className="latestpost">
                    <div className="latestimg"></div>
                    <div className="latestdetail">
                        <h3 className="l1">UI Design - July 21, 2023</h3>
                        <h1 className="l2" onClick={() => {window.location = "/detail" }}>Understanding color theory: the color wheel and finding complementary colors</h1>
                        <h1 className="l3">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </h1>
                        <div className="profile">
                            <div className="profilepic"></div>
                            <h2 className="profilename">
                                Leslie Alexander
                                <br />
                                <span className="l4">UI Designer</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile">
                <div className="latestimgm"></div>
                <h3 className="l1">UI Design - July 21, 2023</h3>
                <h1 className="l2" onClick={() => {window.location = "/detail" }}>Understanding color theory: the color wheel and finding complementary colors</h1>
                <h1 className="l3">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </h1>
                <div className="profile">
                    <div className="profilepic"></div>
                    <h2 className="profilename">
                        Leslie Alexander
                        <br />
                        <span className="l4">UI Designer</span>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Latest;