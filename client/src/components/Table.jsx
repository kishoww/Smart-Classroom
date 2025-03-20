import React, { useState } from 'react'

const Table = () => {

    const [People, setPeople] = useState({
        ashwin : false,
        siva : false,
        solasa : false,
        sujith : false
    });

    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Student name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Roll No
                            </th>
                            <th>
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Ashwin Krishna
                            </th>
                            <td class="px-6 py-4">
                                CB.EN.U4ELC21009
                            </td>
                            <td>
                                { People.ashwin ? "Present" : "Absent"}
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                G Siva Prasad
                            </th>
                            <td class="px-6 py-4">
                                CB.EN.U4ELC21020
                            </td>
                            <td>
                                { People.siva ? "Present" : "Absent"}
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                SVN Mohan Krishna
                            </th>
                            <td class="px-6 py-4">
                                CB.EN.U4ELC21057
                            </td>
                            <td>
                                { People.solasa ? "Present" : "Absent"}
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Yakkala Sujith
                            </th>
                            <td class="px-6 py-4">
                                CB.EN.U4ELC21069
                            </td>
                            <td>
                                { People.sujith ? "Present" : "Absent"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
