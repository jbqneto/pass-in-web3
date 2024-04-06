import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import './attendee.scss';

export function AttendeeList() {

    return (
        <div className="content">
            <div className="header flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Attendees</h1>
                <div className="input-wrapper px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center">
                    <Search className="size-4" />
                    <input className="px-2 bg-transparent flex-1 outline-none border-0 text-sm" placeholder="Search attendee" type="text" />
                </div>
            </div>

            <div className="table border w-full border-white/10 rounded-lg mt-3">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th style={{ width: 32 }}>
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th>ID</th>
                            <th>Attendee</th>
                            <th>Inscription Date</th>
                            <th>Check-in Date</th>
                            <th style={{ width: 64 }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1239, 4562, 7894, 2023, 4342].map((index: number) => (
                            <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                                <td>
                                    <input type="checkbox" name="" id="" />
                                </td>
                                <td>{index}</td>
                                <td>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white">Jose Neto</span>
                                        <span>jose@gmail.com</span>
                                    </div>
                                </td>
                                <td>7 days ago</td>
                                <td>2024-04-06 10:27</td>
                                <td>
                                    <button className="bg-black/20 border-white/10 rounded-md p-1.5">
                                        <MoreHorizontal className="size-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Showing 1 of 220</td>
                            <td className="text-right" colSpan={3}>
                                <div className="flex inline-flex gap-8">
                                    <span>Page 1 of 23</span>
                                    <div className="nav-actions flex gap-1.5">
                                        <button className="bg-white/10 border-white/10 rounded-md p-1.5">
                                            <ChevronsLeft className="size-4" />
                                        </button>
                                        <button className="bg-white/10 border-white/10 rounded-md p-1.5">
                                            <ChevronLeft className="size-4" />
                                        </button>
                                        <button className="bg-white/10 border-white/10 rounded-md p-1.5">
                                            <ChevronRight className="size-4" />
                                        </button>
                                        <button className="bg-white/10 border-white/10 rounded-md p-1.5">
                                            <ChevronsRight className="size-4" />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
