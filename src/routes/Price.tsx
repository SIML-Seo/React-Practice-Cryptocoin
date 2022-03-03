import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const ChartLayer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div:first-child{
        animation-delay: 0.4s
    };
`

const Overview = styled.div`
    width: 100%;
    height: 50px;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    margin: 10px 0px;
    padding: 20px;
    transform: translateY(-5px);
    /* opacity: 0; */
    animation: 0.5s linear 0s 1 normal forwards running ;

    h3{
        width: 50%;
        color: white;
        font-size: 12px;
        font-weight: 600;
    }
`
const OverviewItem = styled.div`
    width: 50%;
    font-size: 20px;
    font-weight: 600;
    color: ${props => Math.sign(Number(props.color)) === -1 ? "red" : "green"};
`
interface PriceProps {
    coinId: string,
    tickersData : PriceData,
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        }
    };
}

function Price() {
    const { tickersData } = useOutletContext<PriceProps>();
    return (
        <ChartLayer>
            <Overview>
                <h3>
                    Price:
                </h3>
                <OverviewItem>
                    $ {Math.floor(tickersData.quotes.USD.price * 100) / 100}
                </OverviewItem>
            </Overview>
            <Overview>
                <h3>
                    Max Change rate in last 24h:
                </h3>
                <OverviewItem color={String(tickersData.quotes.USD.market_cap_change_24h)}>
                    {tickersData.quotes.USD.market_cap_change_24h} %
                </OverviewItem>
            </Overview>
            <Overview>
                <h3>
                    Change rate (last 30 Minutes):
                </h3>
                <OverviewItem color={String(tickersData.quotes.USD.percent_change_30m)}>
                    {tickersData.quotes.USD.percent_change_30m} %
                </OverviewItem>
            </Overview>
            <Overview>
                <h3>
                    Change rate (last 1 hours):
                </h3>
                <OverviewItem color={String(tickersData.quotes.USD.percent_change_1h)}>
                    {tickersData.quotes.USD.percent_change_1h} %
                </OverviewItem>
            </Overview>
            <Overview>
                <h3>
                    Change rate (last 12 hours):
                </h3>
                <OverviewItem color={String(tickersData.quotes.USD.percent_change_12h)}>
                    {tickersData.quotes.USD.percent_change_12h} %
                </OverviewItem>
            </Overview>
            <Overview>
                <h3>
                    Change rate (last 24 hours):
                </h3>
                <OverviewItem color={String(tickersData.quotes.USD.percent_change_24h)}>
                    {tickersData.quotes.USD.percent_change_24h} %
                </OverviewItem>
            </Overview>
        </ChartLayer>
    )
}

export default Price;