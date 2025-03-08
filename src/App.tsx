import { useState } from "react"
import { Box, Divider, Stack, Typography } from "@mui/material"
import logoSvg from "assets/svg-logo.svg"
import { Graph } from "components/graphs"
import { TableComponent } from "components/table-component"

export type TDataStructure = {
    id: number | string
    name: string
    area: number
    sustainableArea: number[]
    customersCount?: number
    numberOfBuildings: number
}

const rowsOfCustomers: TDataStructure[] = [
    { id: 1, name: "Nordic Property Group", numberOfBuildings: 33, area: 36300, sustainableArea: [3847.8] },
    { id: 2, name: "Prime Estate Holdings", numberOfBuildings: 39, area: 51558, sustainableArea: [6186.96] },
    { id: 3, name: "ScandiRent A/S", numberOfBuildings: 179, area: 240755, sustainableArea: [24075.5] },
    { id: 4, name: "UrbanNest Properties", numberOfBuildings: 18, area: 20322, sustainableArea: [5486.94] },
    { id: 5, name: "MetroCapital Real Estate", numberOfBuildings: 121, area: 290158, sustainableArea: [63834.76] },
    { id: 6, name: "Horizon Property Management", numberOfBuildings: 52, area: 57200, sustainableArea: [17617.6] },
    { id: 7, name: "Anchor Asset Holdings", numberOfBuildings: 35, area: 85930, sustainableArea: [9194.51] },
    { id: 8, name: "BlueSky Estates", numberOfBuildings: 216, area: 290520, sustainableArea: [70886.88] },
    { id: 9, name: "Legacy Rent & Invest", numberOfBuildings: 152, area: 171608, sustainableArea: [52168.832] },
    { id: 10, name: "Evergreen Properties", numberOfBuildings: 158, area: 378884, sustainableArea: [82217.828] },
    { id: 11, name: "Brick & Mortar Holdings", numberOfBuildings: 31, area: 34100, sustainableArea: [9275.2] },
    { id: 12, name: "NordVest Ejendomme", numberOfBuildings: 200, area: 264400, sustainableArea: [76940.4] },
    { id: 13, name: "CapitalView Rentals", numberOfBuildings: 123, area: 165435, sustainableArea: [52112.025] },
    { id: 14, name: "Apex Property Partners", numberOfBuildings: 81, area: 91449, sustainableArea: [4755.348] },
    { id: 15, name: "HarborStone Properties", numberOfBuildings: 34, area: 81532, sustainableArea: [24785.728] },
    { id: 16, name: "Central Square Realty", numberOfBuildings: 85, area: 93500, sustainableArea: [28891.5] },
    { id: 17, name: "Skyline Asset Management", numberOfBuildings: 92, area: 121624, sustainableArea: [37338.568] },
    { id: 18, name: "NewLeaf Property Holdings", numberOfBuildings: 92, area: 123740, sustainableArea: [15838.72] },
    { id: 19, name: "GoldBrick Invest", numberOfBuildings: 164, area: 185156, sustainableArea: [9628.11] },
    { id: 20, name: "TopFloor Estates", numberOfBuildings: 38, area: 91124, sustainableArea: [27337.2] },
    { id: 21, name: "UrbanEdge Rentals", numberOfBuildings: 194, area: 213400, sustainableArea: [23047.2] },
    { id: 22, name: "Nexus Property Group", numberOfBuildings: 62, area: 81964, sustainableArea: [8442.29] },
    { id: 23, name: "Sterling Real Estate", numberOfBuildings: 102, area: 137190, sustainableArea: [14267.76] },
    { id: 24, name: "Opal Capital Properties", numberOfBuildings: 59, area: 66611, sustainableArea: [19117.357] },
    { id: 25, name: "Solid Foundation Holdings", numberOfBuildings: 75, area: 179850, sustainableArea: [47840.1] },
    { id: 26, name: "Elevate Property Partners", numberOfBuildings: 62, area: 68200, sustainableArea: [19027.8] },
    { id: 27, name: "Zenith Realty Holdings", numberOfBuildings: 165, area: 218130, sustainableArea: [35773.32] },
    { id: 28, name: "Crestpoint Property Investments", numberOfBuildings: 209, area: 281105, sustainableArea: [58469.84] },
    { id: 29, name: "Landmark Leasing & Management", numberOfBuildings: 228, area: 257412, sustainableArea: [47363.81] },
    { id: 30, name: "Majestic Properties A/S", numberOfBuildings: 36, area: 86328, sustainableArea: [20373.408] },
]

function App() {
    const [view, setView] = useState<"Afdelinger" | "Aarhus" | "Aalborg" | "København" | "Esbjerg" | "Odense">("Afdelinger")

    const rowsOfAfdelinger: TDataStructure[] = [
        {
            id: "Aarhus",
            name: "Aarhus",
            area: 10045200,
            sustainableArea: [816011, 1016011, 1336011],
            customersCount: 145,
            numberOfBuildings: 9132,
        },
        {
            id: "Aalborg",
            name: "Aalborg",
            area: 10735962,
            sustainableArea: [480955, 780955, 1180955],
            customersCount: 121,
            numberOfBuildings: 8121,
        },
        {
            id: "København",
            name: "København",
            area: 17181030,
            sustainableArea: [948964, 1748964, 2748964],
            customersCount: 348,
            numberOfBuildings: 12774,
        },
        {
            id: "Esbjerg",
            name: "Esbjerg",
            area: 6172243,
            sustainableArea: [245501, 455501, 555501],
            customersCount: 150,
            numberOfBuildings: 5467,
        },
        {
            id: "Odense",
            name: "Odense",
            area: 15608582,
            sustainableArea: [966944, 1216944, 1716944],
            customersCount: 110,
            numberOfBuildings: 6509,
        },
    ]

    return (
        <Box>
            <Stack direction="row" alignItems="center" justifyContent="space-between" p={2} mb={1} bgcolor={"#3345AE"}>
                <Typography variant="h4" color="white">
                    {view}
                </Typography>
                <Box>
                    <img src={logoSvg} />
                </Box>
            </Stack>
            <Stack direction="column" gap={2} p={2} divider={<Divider />}>
                <Graph afdelinger={rowsOfAfdelinger} />
                <TableComponent afdelinger={rowsOfAfdelinger} />
            </Stack>
        </Box>
    )
}

export default App





