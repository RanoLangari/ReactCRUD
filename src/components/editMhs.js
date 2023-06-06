import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

const EditMhs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nim, setNim] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        getUserById(id);
    }, [id]);

    

    const saveUser = async (e) => {
        e.preventDefault();
        try {
           
            await axios.post("http://localhost:9000/users", {
                name,
                email,
                nim,
            });
            navigate("/");
            
        } catch (error) {
            console.error("Error:", error);

        }
    };

    const getUserById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:9000/users/${id}`);
            setName(response.data.name);
            setEmail(response.data.email);
            setNim(response.data.nim);
        } catch (error) {
            console.error("Error:", error);
        }
    };




    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Edit Mahasiswa</h2>
                <form onSubmit={saveUser}>
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                            <input type="text" name="name" id="name" value={name} onChange={(e)=> {
                                setName(e.target.value)
                            }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Masukan Nama Dari Mahasiswa" required="">
                            </input>
                        </div>
                        <div class="w-full">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="text" name="email" id="email" value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Masukan Email yang Valid" required="">
                            </input>
                        </div>
                        <div class="w-full">
                            <label for="nim" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NIM</label>
                            <input type="text" name="nim" id="nim" value={nim} onChange={(e) => {
                                setNim(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Masukan NIM dari Mahasiswa" required="">
                            </input>
                        </div>

                    </div>
                    <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">  
                        <svg class="w-4 h-4 mr-2" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                        <span>Submit</span>
                    </button>

                    <button type="button" onClick={() => navigate("/")} class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        <svg class="w-4 h-4 mr-2" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                        </svg>
                        <span>Cancel</span>
                    </button>
                    

                </form>
            </div>
        </section>

        
        
    )
}


export default EditMhs;