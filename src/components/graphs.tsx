import * as React from "react"
import { Box, Paper, Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import { LineChart, LineChartProps } from "@mui/x-charts"
import { BarChart, BarChartProps } from "@mui/x-charts/BarChart"
import { HighlightItemData } from "@mui/x-charts/context"
import { TDataStructure } from "App"
import * as _ from "lodash"
import { formatValue } from "model"

export const Graph = (props: { afdelinger: TDataStructure[] }) => {
    const [highlightedItem, setHighLightedItem] = React.useState<HighlightItemData | null>(null)

    const itemObjectForBarChart = props.afdelinger.map(value => [value.area, [...value.sustainableArea].pop()])

    const orderdArraysForBarChart = _.zip(...itemObjectForBarChart)

    const colors = ["#3A67AB", "#FFA400", "#DB2955", "#EA7AF4", "#3caf66"]

    const barChartsProps: BarChartProps = {
        series: (orderdArraysForBarChart as number[][]).map((x, index) => {
            return {
                data: x,
                label: index == 0 ? "Total m²" : "Bæredygtige m²",
                id: x.toString().replace(",", ""),
                highlightScope: { highlight: "item", fade: "global" },
            }
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
            {
                valueFormatter: (value: number) => formatValue(value),
            },
        ],
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
        margin: { left: 80 },
        series: itemObjectForLineChart.map(x => ({
            data: x,
            id: x.toString().replace(",", ""),
            highlightScope: { highlight: "series", fade: "global" },
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
    }

    return (
            <Stack py={2} width={"100%"} justifyContent="space-between" direction={{ xs: "column", md: "row" }} spacing={1} sx={{ width: "100%" }}>
                <Box flexGrow={1}>
                    <Paper>
                    <Box>
                        <Typography variant="h6" ml={"80px"}>
                            Top 10 areal samt andel bæredygtigt aktiv
                        </Typography>

                        <BarChart {...barChartsProps} highlightedItem={highlightedItem} onHighlightChange={setHighLightedItem} />
                    </Box>
                </Paper>
                </Box>
                <Box flexGrow={1}>
                    <Paper>
                    <Box>
                        <Typography variant="h6" ml={"80px"}>
                            Top 10 areal andel bære dygtigt aktiv historik
                        </Typography>

                        <LineChart {...lineChartProps} highlightedItem={highlightedItem} onHighlightChange={setHighLightedItem} />
                    </Box>
                </Paper>
                </Box>
            </Stack>
    )
}
