import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const TableComponnents = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:9000/users');
            setData(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (

       <section>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="flex items-center justify-between p-6 bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <h2 class="text-lg font-semibold text-gray-900 capitalize dark:text-white">Data Mahasiswa</h2>
                <a href="/add" class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md dark:bg-green-700 hover:bg-green-500 dark:hover:bg-green-600 focus:outline-none focus:bg-green-500 dark:focus:bg-green-600">Tambah Mahasiswa Mahasiswa</a>
            </div>


            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            No
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nama
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nim
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Created
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {index + 1}
                            </th>
                            <td class="px-6 py-4">
                                {item.name}
                            </td>
                            <td class="px-6 py-4">
                                {item.email}
                            </td>
                            <td class="px-6 py-4">
                                {item.nim}
                            </td>
                            <td class="px-6 py-4">
                                {item.createdAt}
                            </td>
                            <td class="px-6 py-4">
                                <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-md dark:bg-gray-500 hover:bg-gray-600 dark:hover:bg-gray-400 focus:outline-none focus:bg-gray-600 dark:focus:bg-gray-400" onClick={() => {
                                    window.location.href = `http://localhost:3000/edit/${item.id}`
                                }}>

                                    Edit
                                </button> &nbsp;
                                <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-700 rounded-md dark:bg-red-500 hover:bg-red-600 dark:hover:bg-red-400 focus:outline-none focus:bg-red-600 dark:focus:bg-red-400" onClick={() => {
                                    axios.delete(`http://localhost:9000/users/${item.id}`)
                                        .then(res => {
                                            console.log(res);
                                            console.log(res.data);
                                            window.location.reload();
                                        })
                                }}>

                                    Delete
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </section>

    )
}

export default TableComponnents;