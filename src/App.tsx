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
    { id: 1, name: "Nordic Property Group", numberOfBuildings: 33, area: 36300, sustainablePercentage: 10.6 },
    { id: 2, name: "Prime Estate Holdings", numberOfBuildings: 39, area: 51558, sustainablePercentage: 12 },
    { id: 3, name: "ScandiRent A/S", numberOfBuildings: 179, area: 240755, sustainablePercentage: 10 },
    { id: 4, name: "UrbanNest Properties", numberOfBuildings: 18, area: 20322, sustainablePercentage: 27 },
    { id: 5, name: "MetroCapital Real Estate", numberOfBuildings: 121, area: 290158, sustainablePercentage: 22 },
    { id: 6, name: "Horizon Property Management", numberOfBuildings: 52, area: 57200, sustainablePercentage: 30.8 },
    { id: 7, name: "Anchor Asset Holdings", numberOfBuildings: 35, area: 85930, sustainablePercentage: 10.7 },
    { id: 8, name: "BlueSky Estates", numberOfBuildings: 216, area: 290520, sustainablePercentage: 24.4 },
    { id: 9, name: "Legacy Rent & Invest", numberOfBuildings: 152, area: 171608, sustainablePercentage: 30.4 },
    { id: 10, name: "Evergreen Properties", numberOfBuildings: 158, area: 378884, sustainablePercentage: 21.7 },
    { id: 11, name: "Brick & Mortar Holdings", numberOfBuildings: 31, area: 34100, sustainablePercentage: 27.2 },
    { id: 12, name: "NordVest Ejendomme", numberOfBuildings: 200, area: 264400, sustainablePercentage: 29.1 },
    { id: 13, name: "CapitalView Rentals", numberOfBuildings: 123, area: 165435, sustainablePercentage: 31.5 },
    { id: 14, name: "Apex Property Partners", numberOfBuildings: 81, area: 91449, sustainablePercentage: 5.2 },
    { id: 15, name: "HarborStone Properties", numberOfBuildings: 34, area: 81532, sustainablePercentage: 30.4 },
    { id: 16, name: "Central Square Realty", numberOfBuildings: 85, area: 93500, sustainablePercentage: 30.9 },
    { id: 17, name: "Skyline Asset Management", numberOfBuildings: 92, area: 121624, sustainablePercentage: 30.7 },
    { id: 18, name: "NewLeaf Property Holdings", numberOfBuildings: 92, area: 123740, sustainablePercentage: 12.8 },
    { id: 19, name: "GoldBrick Invest", numberOfBuildings: 164, area: 185156, sustainablePercentage: 5.2 },
    { id: 20, name: "TopFloor Estates", numberOfBuildings: 38, area: 91124, sustainablePercentage: 30 },
    { id: 21, name: "UrbanEdge Rentals", numberOfBuildings: 194, area: 213400, sustainablePercentage: 10.8 },
    { id: 22, name: "Nexus Property Group", numberOfBuildings: 62, area: 81964, sustainablePercentage: 10.3 },
    { id: 23, name: "Sterling Real Estate", numberOfBuildings: 102, area: 137190, sustainablePercentage: 10.4 },
    { id: 24, name: "Opal Capital Properties", numberOfBuildings: 59, area: 66611, sustainablePercentage: 28.7 },
    { id: 25, name: "Solid Foundation Holdings", numberOfBuildings: 75, area: 179850, sustainablePercentage: 26.6 },
    { id: 26, name: "Elevate Property Partners", numberOfBuildings: 62, area: 68200, sustainablePercentage: 27.9 },
    { id: 27, name: "Zenith Realty Holdings", numberOfBuildings: 165, area: 218130, sustainablePercentage: 16.4 },
    { id: 28, name: "Crestpoint Property Investments", numberOfBuildings: 209, area: 281105, sustainablePercentage: 20.8 },
    { id: 29, name: "Landmark Leasing & Management", numberOfBuildings: 228, area: 257412, sustainablePercentage: 18.4 },
    { id: 30, name: "Majestic Properties A/S", numberOfBuildings: 36, area: 86328, sustainablePercentage: 23.6 },
]

function App() {
    const [view, setView] = useState<"Afdelinger" | "Aarhus">("Afdelinger")

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





