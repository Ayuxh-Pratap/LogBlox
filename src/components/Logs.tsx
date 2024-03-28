"use client"

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
import { useLogStore } from '@/store'
import { cn } from '@/lib/utils'


export default function Logs() {

    const logs = useLogStore((state) => state.logs)

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
                    {Object.keys(logs).map((key) => {
                        const log = logs[key];

                        return (
                            <TableRow key={key} className={cn(log.hour <= 5 ? "bg-red-100" : "")}>
                                <TableCell className="font-medium">{log.date.toDateString()}</TableCell>
                                <TableCell>{log.hour}</TableCell>
                                <TableCell>{log.note}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>


        </div>
    )
}
