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

type CustomerType = TDataStructure & { department: string }

const rowsOfCustomers: CustomerType[] = [
    {
        id: 1,
        department: "Aarhus",
        name: "Nordic Property Group",
        numberOfBuildings: 33,
        area: 36300,
        sustainableArea: [1847, 2847, 3847.8],
    },
    {
        id: 2,
        department: "Aarhus",
        name: "Prime Estate Holdings",
        numberOfBuildings: 39,
        area: 51558,
        sustainableArea: [986.96, 3186.96, 6186.96],
    },
    {
        id: 3,
        department: "Aarhus",
        name: "ScandiRent A/S",
        numberOfBuildings: 179,
        area: 240755,
        sustainableArea: [6075, 12075, 24075.5],
    },
    {
        id: 4,
        department: "Aarhus",
        name: "UrbanNest Properties",
        numberOfBuildings: 18,
        area: 20322,
        sustainableArea: [486, 3486, 5486.94],
    },
    {
        id: 5,
        department: "Aarhus",
        name: "MetroCapital Real Estate",
        numberOfBuildings: 121,
        area: 290158,
        sustainableArea: [23834.76, 33834.76, 63834.76],
    },
    {
        id: 6,
        department: "Aarhus",
        name: "Horizon Property Management",
        numberOfBuildings: 52,
        area: 57200,
        sustainableArea: [117.6, 1617.6, 17617.6],
    },
    {
        id: 7,
        department: "Aarhus",
        name: "Anchor Asset Holdings",
        numberOfBuildings: 35,
        area: 85930,
        sustainableArea: [1194.51, 8194.51, 9194.51],
    },
    {
        id: 8,
        department: "Aarhus",
        name: "BlueSky Estates",
        numberOfBuildings: 216,
        area: 290520,
        sustainableArea: [20886, 40886, 70886.88],
    },
    {
        id: 9,
        department: "Aarhus",
        name: "Legacy Rent & Invest",
        numberOfBuildings: 152,
        area: 171608,
        sustainableArea: [100, 6034, 52168.832],
    },
    {
        id: 10,
        department: "Aalborg",
        name: "Evergreen Properties",
        numberOfBuildings: 158,
        area: 378884,
        sustainableArea: [2045, 20652, 82217.828],
    },
    {
        id: 11,
        department: "Aalborg",
        name: "Brick & Mortar Holdings",
        numberOfBuildings: 31,
        area: 34100,
        sustainableArea: [4275, 4275, 9275.2],
    },
    {
        id: 12,
        department: "Aalborg",
        name: "NordVest Ejendomme",
        numberOfBuildings: 200,
        area: 264400,
        sustainableArea: [56940.4, 66940.4, 76940.4],
    },
    {
        id: 13,
        department: "Aalborg",
        name: "CapitalView Rentals",
        numberOfBuildings: 123,
        area: 165435,
        sustainableArea: [12112.03, 22112.03, 52112.03],
    },
    {
        id: 14,
        department: "København",
        name: "Apex Property Partners",
        numberOfBuildings: 81,
        area: 91449,
        sustainableArea: [1755.35, 2755.35, 4755.35],
    },
    {
        id: 15,
        department: "København",
        name: "HarborStone Properties",
        numberOfBuildings: 34,
        area: 81532,
        sustainableArea: [6785, 12785, 24785.728],
    },
    {
        id: 16,
        department: "København",
        name: "Central Square Realty",
        numberOfBuildings: 85,
        area: 93500,
        sustainableArea: [10000, 14891, 28891.5],
    },
    {
        id: 17,
        department: "København",
        name: "Skyline Asset Management",
        numberOfBuildings: 92,
        area: 121624,
        sustainableArea: [37338.568],
    },
    {
        id: 18,
        department: "København",
        name: "NewLeaf Property Holdings",
        numberOfBuildings: 92,
        area: 123740,
        sustainableArea: [5838, 10838, 15838.72],
    },
    {
        id: 19,
        department: "København",
        name: "GoldBrick Invest",
        numberOfBuildings: 164,
        area: 185156,
        sustainableArea: [628, 2628, 9628.11],
    },
    { id: 20, department: "København", name: "TopFloor Estates", numberOfBuildings: 38, area: 91124, sustainableArea: [27337.2] },
    {
        id: 21,
        department: "Esbjerg",
        name: "UrbanEdge Rentals",
        numberOfBuildings: 194,
        area: 213400,
        sustainableArea: [6047, 12047, 23047.2],
    },
    {
        id: 22,
        department: "Esbjerg",
        name: "Nexus Property Group",
        numberOfBuildings: 62,
        area: 81964,
        sustainableArea: [2442, 4442, 8442.29],
    },
    {
        id: 23,
        department: "Esbjerg",
        name: "Sterling Real Estate",
        numberOfBuildings: 102,
        area: 137190,
        sustainableArea: [14267.76],
    },
    {
        id: 24,
        department: "Esbjerg",
        name: "Opal Capital Properties",
        numberOfBuildings: 59,
        area: 66611,
        sustainableArea: [16117, 17117, 19117.36],
    },
    {
        id: 25,
        department: "Odense",
        name: "Solid Foundation Holdings",
        numberOfBuildings: 75,
        area: 179850,
        sustainableArea: [42840, 44840, 47840.1],
    },
    {
        id: 26,
        department: "Odense",
        name: "Elevate Property Partners",
        numberOfBuildings: 62,
        area: 68200,
        sustainableArea: [7027, 14027, 19027.8],
    },
    {
        id: 27,
        department: "Odense",
        name: "Zenith Realty Holdings",
        numberOfBuildings: 165,
        area: 218130,
        sustainableArea: [21773, 28773, 35773.32],
    },
    {
        id: 28,
        department: "Odense",
        name: "Crestpoint Property Investments",
        numberOfBuildings: 209,
        area: 281105,
        sustainableArea: [28469, 48469, 58469.84],
    },
    {
        id: 29,
        department: "Odense",
        name: "Landmark Leasing & Management",
        numberOfBuildings: 228,
        area: 257412,
        sustainableArea: [28363, 42363, 47363.81],
    },
    {
        id: 30,
        department: "Odense",
        name: "Majestic Properties A/S",
        numberOfBuildings: 36,
        area: 86328,
        sustainableArea: [3373, 15373, 20373.408],
    },
]

const rowsOfDepartments: TDataStructure[] = [
    {
        id: "Aarhus",
        name: "Aarhus",
        area: 10045200,
        sustainableArea: [816011, 936011, 1336011],
        customersCount: 145,
        numberOfBuildings: 9132,
    },
    {
        id: "Aalborg",
        name: "Aalborg",
        area: 10721962,
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

export const App = () => {
    const [view, setView] = useState<"Afdelinger" | "Aarhus" | "Aalborg" | "København" | "Esbjerg" | "Odense">("Afdelinger")
    const [data, setData] = useState<TDataStructure[] | CustomerType[]>(rowsOfDepartments)

    const handleViewChange = (newView: "Afdelinger" | "Aarhus" | "Aalborg" | "København" | "Esbjerg" | "Odense") => {
        if (newView == view) return null

        setView(prev => (prev != newView ? newView : prev))
        setData(() => {
            if (newView == "Afdelinger") return rowsOfDepartments

            return rowsOfCustomers.filter(x => x.department == newView)
        })
    }

    return (
        <Box>
            <Stack direction="row" alignItems="center" justifyContent="space-between" p={2} mb={1} bgcolor={"#3345AE"}>
                <Typography variant="h4" color="white" onClick={() => handleViewChange("Aarhus")}>
                    {view}
                </Typography>
                <Box>
                    <img src={logoSvg} />
                </Box>
            </Stack>
            <Stack direction="column" gap={2} p={2} divider={<Divider />}>
                <Graph afdelinger={data} view={view} setView={setView} />
                <TableComponent afdelinger={data} view={view} setView={setView} />
            </Stack>
        </Box>
    )
}



































