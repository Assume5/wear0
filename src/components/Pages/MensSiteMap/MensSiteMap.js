import '../PagesBackground.scss'
export default function MensSiteMap(){
    return(
        <div class="pages">
            <h5 className="f4">Mens Site Map</h5>            
            <div className="link">
                <a href="/men/footWear">
                    <p className="f5">FootWear</p>
                </a>
                <a href="/men/apparel">
                    <p className="f5">Apparel</p>
                </a>
                <a href="/men/accessories">
                    <p className="f5">Accessories</p>
                </a>
            </div>
        </div>
    )
}