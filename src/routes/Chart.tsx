import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";

interface ChartProps{
    coinId: string;
}

interface IHistorical{
    time_open: string; 
    time_close: string; 
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

function Chart() {
    const isDark = useRecoilValue(isDarkAtom);
    const {coinId} = useOutletContext<ChartProps>();
    const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId), {refetchInterval: 10000,});
    return (
        <div>
            {isLoading ? 
                "Loading Chart..." :
                <ApexChart 
                    type="candlestick"
                    series={[
                        {
                            data: data?.map(price => ({x: new Date(price.time_open), y: [price.open, price.high, price.low, price.close]}))
                        }
                        // {
                        //     name: "Price",
                        //     data: data?.map(price => price.close)
                        // }
                    ]}
                    options={{ 
                        // chart: {height: 500, width: 500, toolbar: {show: false}, background: "transparent"},
                        // grid: {show: false},
                        theme: {mode: isDark ? "dark" : "light"},
                        // stroke: {curve: "smooth", width: 3 ,},
                        // xaxis: {labels: {show:false}, axisTicks: {show: false}, axisBorder: {show: false}, categories: data?.map((price) => price.time_close), type: "datetime"},
                        // yaxis: {show: false},
                        // fill: {type: "gradient", gradient:{gradientToColors: ["#0be881"], stops: [0, 100]}},
                        // colors: ["#0fbcf9"],
                        // tooltip: {y: {formatter: (value) => `$ ${value.toFixed(3)}`}},
                        chart: {height: 500, type:"candlestick", background:"transparent"},
                        title: {text: "CandleStick Chart", align: "left"},
                        xaxis: {type: "datetime"},
                        yaxis: {show: false, tooltip: {enabled: true}},
                    }}
                />
            }
        </div>    
    )
}

export default Chart;