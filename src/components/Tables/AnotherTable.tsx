// components/AnotherDataTable.tsx

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../ui/checkbox"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu"
import { TextCursorInput, Trash, WifiOff } from "lucide-react"
import { Button } from "../ui/button"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"



const newData = [
    { id: "a1", name: "Item 1", description: "Description 1", price: "$10" },
    { id: "a2", name: "Item 2", description: "Description 2", price: "$20" },
    // Add more rows as needed
]

const newColumns: ColumnDef<typeof newData[0]>[] = [
    {
        id: "select",
        header: ({ table }: any) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => <div className="capitalize">{row.getValue("description")}</div>,
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => <div className="text-right">{row.getValue("price")}</div>,
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const item = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(item.id)}>
                            <TextCursorInput size={14} className="mr-2" /> Rename
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><WifiOff size={12} className="mr-2" /> Available Offline</DropdownMenuItem>
                        <DropdownMenuItem className="bg-red-50 dark:text-black hover:bg-red-100 hover:cursor-pointer">
                            <Trash size={12} className="mr-2" /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

export { newColumns, newData }