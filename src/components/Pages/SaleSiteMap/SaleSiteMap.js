import '../PagesBackground.scss'
export default function SaleSiteMap(){
    return(
        <div class="pages" >
            <h5 className="f4">Sales Site Map</h5>            
            <div className="link">
                <a href="/sale/men">
                    <p className="f5">Mens</p>
                </a>
                <a href="/sale/women">
                    <p className="f5">Women</p>
                </a>
                <a href="/sale/kids">
                    <p className="f5">Kids</p>
                </a>
            </div>
        </div>
    )
}