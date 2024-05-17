import React from "react";

const Home =()=>{
    return(
            <div className="flex justify-center">
                <div className="h-96 w-60 border-black border-2">
                    <div className="w-full border-gray-200 border-2 mt-2">
                        <div class="flex items-center p-1 mb-2">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">To Do</label>
                        </div>
                        <div class="flex items-center p-1">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">New To Do</label>
                        </div>
                    </div>
                    <div>
                        <div>input section</div>
                        <div>plus icon</div>
                    </div>
                </div>
            </div>
    )
}

export default Home;