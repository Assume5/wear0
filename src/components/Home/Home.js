import { Component } from "react";
import { serverUrl } from "../../constants/Global";
import Background from "../Background/Background";
import HomeContentList from "./HomeContent/HomeContentList";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            products: {},
            trendingFootwear: {},
            trendingApparel: {},
            trendingAccessories: {},
            data: false,
        };
    }
    async componentDidMount() {
        const response = await fetch(`${serverUrl}/productHome`);
        const data = await response.json();
        console.log(data)
        this.setState({ products: data });

        const apparel = Object.fromEntries(
            Object.entries(
                Object.assign(
                    {},
                    ...data.KidApparel.map((x) => ({ [x.productId]: x })),
                    ...data.MenApparel.map((x) => ({ [x.productId]: x })),
                    ...data.WomenApparel.map((x) => ({ [x.productId]: x }))
                )
            )
                .sort(([, a], [, b]) => b.productCheckout - a.productCheckout)
                .slice(0, 7)
        );

        const footwear = Object.fromEntries(
            Object.entries(
                Object.assign(
                    {},
                    ...data.KidFootwear.map((x) => ({ [x.productId]: x })),
                    ...data.MenFootwear.map((x) => ({ [x.productId]: x })),
                    ...data.WomenFootwear.map((x) => ({ [x.productId]: x }))
                )
            )
                .sort(([, a], [, b]) => b.productCheckout - a.productCheckout)
                .slice(0, 7)
        );

        const accessories = Object.fromEntries(
            Object.entries(
                Object.assign(
                    {},
                    ...data.WomenAccessories.map((x) => ({ [x.productId]: x })),
                    ...data.MenAccessories.map((x) => ({ [x.productId]: x }))
                )
            )
                .sort(([, a], [, b]) => b.productCheckout - a.productCheckout)
                .slice(0, 7)
        );
        this.setState({ trendingFootwear: footwear });
        this.setState({ trendingApparel: apparel });
        this.setState({ trendingAccessories: accessories });
        this.setState({ data: true });
    }
    render() {
        const { New } = this.state.products;
        return (
            <div>
                <Background
                    backGroundImgLink={
                        "https://miro.medium.com/max/848/1*NPTw5uIT4COChKKS4_Bopg.png"
                    }
                    h5Txt={"Exclusive Sales"}
                    h1Txt={"UP TO 50% OFF"}
                    route={"home"}
                />
                {this.state.data && (
                    <HomeContentList
                        productdetailsNewCollection={New}
                        productdetailsTrendingApparel={
                            this.state.trendingApparel
                        }
                        productdetailsTrendingFootwear={this.state.trendingFootwear}
                        productdetailsTrendingAccessories={this.state.trendingAccessories}
                    />
                )}
            </div>
        );
    }
}
export default Home;
