import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default function Logs() {
    return (
        <div className='border border-dashed rounded-md p-7'>

            <Table>
                <TableCaption>list of your recent logs.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-1/3'>Date</TableHead>
                        <TableHead className='w-1/3'>Hours</TableHead>
                        <TableHead className='w-1/3'>Log Note</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">{new Date().toDateString()}</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>This is the note you left for the log</TableCell>
                    </TableRow>
                </TableBody>
            </Table>


        </div>
    )
}
