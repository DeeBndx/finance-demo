import { Divider } from "@mui/material"
import Paper from "@mui/material/Paper"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { TDataStructure } from "App"
import { formatValue, getPercentage, ViewType } from "model"

const paginationModel = { page: 0, pageSize: 15 }

type TableComponentProps = {
    afdelinger: TDataStructure[]
    view: ViewType
    setView: (view: ViewType) => void
}

export const TableComponent = (props: TableComponentProps) => {
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Navn", width: 240 },
        { field: "numberOfBuildings", headerName: "Antal bygninger", headerAlign: "right", width: 130, align: "right" },
        {
            field: "area",
            headerName: "m²",
            headerAlign: "right",
            type: "number",
            width: 104,
            valueFormatter: value => formatValue(value),
        },
        {
            field: "sustainablePercentage",
            headerName: "Procentdel bæredygtig",
            width: 168,
            align: "right",
            valueFormatter: value =>
                Intl.NumberFormat("da-dk", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                }).format(value) + " %",
        },
    ]

    const rows = props.afdelinger.map((x, index) => {
        const currentSustainableArea = [...x.sustainableArea].pop()

        return {
            id: index,
            name: x.name,
            numberOfBuildings: x.numberOfBuildings,
            area: x.area,
            sustainablePercentage: getPercentage(+currentSustainableArea!, x.area),
        }
    })

    if (!rows) return null

    return (
        <Paper sx={{ width: "100%" }}>
            <Divider />
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[15, 30]}
                onRowClick={params => props.setView((params.row as TDataStructure).name as ViewType)}
                checkboxSelection
                disableRowSelectionOnClick
                sx={{ border: 0 }}
            />
        </Paper>
    )
}
