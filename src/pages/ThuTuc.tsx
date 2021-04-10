import * as React from 'react'
import Header from './../components/Header'
import ThuTucLeft from './../components/ThutucLeft'
import ThuTucRight from './../components/ThutucRight'
import Title from './../components/Title'
const Thutuc = (props : any) =>{
    return(
        <div>
            <Header />
            <main className="home">
                <Title />
                <section className="content">
                    <div className="content__wrap container-fluid">
                    <div className="row">
                        <ThuTucLeft />
                        <ThuTucRight />
                    </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default Thutuc;