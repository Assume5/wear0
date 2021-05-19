import Background from '../Background/Background'
import ContentList from '../Content/HomeContentList'
const test={
    productnameNewCollection:'KAWS HOLIDAY BROWN',
    productpriceNewCollection:"$225",
    productimageNewCollection:'././TestingImage/brown.jpg',
    productimageNewCollectionHover:'./TestingImage/brownturn.png',
    productaltNewCollection:'KAWS'
}
const test2={
    productnameTrending:'KAWS HOLIDAY BLACK',
    productpriceTrending:"$225",
    productimageTrending:'././TestingImage/black.png',
    productimageTrendingHover:'./TestingImage/blackturn.png',
    productaltTrending:'KAWS'
}
function Home(){
    return(
        <div>
            <Background backGroundImgLink={'https://miro.medium.com/max/848/1*NPTw5uIT4COChKKS4_Bopg.png'} h5Txt={'Exclusive Sales'} h1Txt={'UP TO 50% OFF'} route={'home'} />
            <ContentList productdetailsNewCollection={test} productdetailsTrending={test2}/>
        </div>
    )
}
export default Home