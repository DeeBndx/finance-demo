import * as React from "react"
import { Box, Paper, Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import { LineChart, LineChartProps } from "@mui/x-charts"
import { BarChart, BarChartProps } from "@mui/x-charts/BarChart"
import { HighlightItemData } from "@mui/x-charts/context"
import { TDataStructure } from "App"
import * as _ from "lodash"
import { formatValue, getPercentage, ViewType } from "model"

type GraphProps = {
    afdelinger: TDataStructure[]
    view: ViewType
    setView: (view: ViewType) => void
}

export const Graph = (props: GraphProps) => {
    const [highlightedItem, setHighLightedItem] = React.useState<HighlightItemData | null>(null)

    const itemObjectForBarChart = props.afdelinger.map(value => [value.area, [...value.sustainableArea].pop()])

    const orderdArraysForBarChart = _.zip(...itemObjectForBarChart)
    console.log("🚀 ~ Graph ~ orderdArraysForBarChart:", orderdArraysForBarChart)

    const colors = ["#3A67AB", "#FFA400", "#DB2955", "#EA7AF4", "#3caf66", "#52489c", "#f6c62c", "#f529c7", "#18052e"]

    const barChartsProps: BarChartProps = {
        series: (orderdArraysForBarChart as number[][]).map((x, index) => {
            if (index == 0) {
                return {
                    yAxisId: "areaId",
                    data: x,
                    label: "Total m²",
                    id: x.toString().replace(",", ""),
                    highlightScope: { highlight: "item", fade: "global" },
                }
            }
            if (index == 1) {
                return {
                    yAxisId: "percentageId",
                    data: x.map((d, dIndex) => getPercentage(d, orderdArraysForBarChart[0][dIndex] as number)),
                    label: "Bæredygtige %",
                    id: x.toString().replace(",", ""),
                    highlightScope: { highlight: "item", fade: "global" },
                }
            }
            return {}
        }),
        xAxis: [
            {
                scaleType: "band",
                data: props.afdelinger.map(value => value.name),
                colorMap: {
                    type: "ordinal",
                    colors: colors,
                },
            },
        ],
        yAxis: [
            { id: "areaId", scaleType: "linear", valueFormatter: (value: number) => formatValue(value) },
            { id: "percentageId", valueFormatter: (value: number) => `${value} %` },
        ],
        leftAxis: "areaId",
        rightAxis: "percentageId",
        height: 400,
        margin: { left: 80 },
        slotProps: {
            legend: {
                hidden: true,
            },
        },
    }

    const itemObjectForLineChart = props.afdelinger.map(value => value.sustainableArea)

    const lineChartProps: LineChartProps = {
        series: itemObjectForLineChart.map((x, xIndex) => ({
            data: x.map(d => getPercentage(d as number, props.afdelinger[xIndex].area)),
            id: x.toString().replace(",", ""),
            highlightScope: { highlight: "series", fade: "global" },
            valueFormatter: value => `${formatValue(value as number)} %`,
        })),
        colors: colors,
        height: 400,
        slotProps: {
            legend: {
                hidden: true,
            },
        },
        xAxis: [
            {
                scaleType: "point",
                data: [2015, 2020, 2025],
                valueFormatter: value => value.toString().replace(",", ""),
            },
        ],
        yAxis: [{ valueFormatter: value => `${value} %` }],
    }

    return (
        <Stack
            py={2}
            width={"100%"}
            justifyContent="space-between"
            direction={{ xs: "column", md: "row" }}
            spacing={1}
            sx={{ width: "100%" }}
        >
            <Box flexGrow={1}>
                <Paper>
                    <Box>
                        <Typography variant="h6" textAlign="center">
                            {props.view == "Afdelinger"
                                ? "Afdelingers areal samt andel bæredygtigt aktiv"
                                : "Top 10 areal samt andel bæredygtigt aktiv"}
                        </Typography>

                        <BarChart
                            {...barChartsProps}
                            highlightedItem={highlightedItem}
                            onHighlightChange={setHighLightedItem}
                            grid={{
                                horizontal: true,
                            }}
                            onAxisClick={(_, data) => props.setView(data?.axisValue as ViewType)}
                        />
                    </Box>
                </Paper>
            </Box>
            <Box flexGrow={1}>
                <Paper>
                    <Box>
                        <Typography variant="h6" textAlign="center">
                            {props.view == "Afdelinger"
                                ? "Afdelingers andel bæredygtigt aktiv historik"
                                : "Top 10 areal andel bæredygtigt aktiv historik"}
                        </Typography>

                        <LineChart {...lineChartProps} highlightedItem={highlightedItem} onHighlightChange={setHighLightedItem} />
                    </Box>
                </Paper>
            </Box>
        </Stack>
    )
}
