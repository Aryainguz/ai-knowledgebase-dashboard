"use client"

import * as React from "react"
import {
    CaretSortIcon,
    ChevronDownIcon,
    DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Trash, Pencil, FileText } from "lucide-react"
import { withDataTable } from "../HOC/withTable"
import { BsFiletypeDocx, BsFiletypeCsv, BsFiletypeTxt, BsFiletypePdf } from "react-icons/bs"
import { Badge } from "../ui/badge"

const data: Documents[] = [
    {
        id: "m5gr84i9",
        size: "31 Kb",
        name: "Dashboard Requirement ",
        type: "docx",
        description: "Description for Dashboard Requirement",
        tags: ["Urgent", "Dashboard"]
    },
    {
        id: "3u1reuv4",
        size: "63 Kb",
        name: "Project Spreadsheet",
        type: "csv",
        description: "Description for Project Spreadsheet",
        tags: ["Urgent", "Dashboard"]
    },
    {
        id: "derv1ws0",
        size: "71 Kb",
        name: "Projext Status",
        type: "pdf",
        description: "Description for Projext Status",
        tags: ["Urgent", "Dashboard"]
    },
    {
        id: "5kma53ae",
        size: "12 Kb",
        name: "Requirement Latest",
        type: "txt",
        description: "Description for Requirement Latest",
        tags: ["Urgent", "Dashboard"]
    },
    {
        id: "bhqecj4p",
        size: "1 Mb",
        name: "Transaction Pdf",
        type: "pdf",
        description: "Description for Transaction Pdf",
        tags: ["Urgent", "Dashboard"]
    },
    {
        id: "bhqecj23p",
        size: "2 Mb",
        name: "Blogging Pdf",
        type: "pdf",
        description: "Description for Blogging Pdf",
        tags: ["Urgent", "Dashboard"]
    },
    {
        id: "bhqevds4p",
        size: "120 Kb",
        name: "Transaction Pdf",
        type: "pdf",
        description: "Description for Transaction Pdf",
        tags: ["Urgent", "Dashboard"]
    },
]

export type Documents = {
    id: string
    size: string
    name: string
    type: string
    description: string
    tags: string[]
}

const tagColorMap: Record<string, string> = {
    Urgent: "bg-red-100 text-black hover:shadow-xl",
    Dashboard: "bg-sky-100 text-black hover:shadow-xl",
};

export const columns: ColumnDef<Documents>[] = [
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
        cell: ({ row }) => {
            const type = row.original.type;
            let IconComponent;

            switch (type) {
                case 'docx':
                    IconComponent = BsFiletypeDocx;
                    break;
                case 'csv':
                    IconComponent = BsFiletypeCsv;
                    break;
                case 'txt':
                    IconComponent = BsFiletypeTxt;
                    break;
                case 'pdf':
                    IconComponent = BsFiletypePdf;
                    break;
                default:
                    IconComponent = FileText; // Default icon if type is not matched
            }

            return (
                <div className="flex items-center space-x-2">
                    <IconComponent className="h-5 w-5 text-gray-500" />
                    <div>
                        <div className="font-bold">{row.getValue("name")}</div>
                        <div className="text-xs text-gray-500">{row.original.description}</div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "tags",
        header: "Tags",
        cell: ({ row }) => {
            const tags = row.getValue<string[]>("tags"); // Adjust according to the actual type of tags

            return (
                <div className="flex space-x-2">
                    {tags.map((tag: string, index: number) => (
                        <Badge
                            key={index}
                            className={`px-2 py-1 rounded-md hover:text-white ${tagColorMap[tag] || "bg-gray-300 text-black"}`}
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            );
        },
    },

    {
        accessorKey: "type",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Type
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div style={{ width: "70px" }} className="lowercase text-center">{row.getValue("type")}</div>,
    },
    {
        accessorKey: "size",
        header: () => <div className="text-right">Size</div>,
        cell: ({ row }) => {
            return <div className="text-right items-center font-medium">{row.getValue("size")}</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original

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
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Pencil size={12} className="mr-2" />{" "}Edit</DropdownMenuItem>
                        <DropdownMenuItem className="bg-red-100 hover:bg-red-200 dark:hover:bg-red-100 dark:text-black hover:cursor-pointer"><Trash size={12} className="mr-2 " />{" "}Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

function DataTableComponent({ table }: { table: ReturnType<typeof useReactTable> }) {
    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter types..."
                    value={(table.getColumn("type")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("type")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) =>
                                        column.toggleVisibility(!!value)
                                    }
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                    <span className="text-xs font-light bg-gray-200 text-black p-2 rounded-xl">
                        Page {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()}
                    </span>
                </div>
            </div>
        </div>
    )
}

export const DataTable = withDataTable(DataTableComponent, columns, data)