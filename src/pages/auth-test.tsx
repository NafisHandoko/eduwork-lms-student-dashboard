import { useGetAllClassesQuery } from "../api/classApi";

export default function AuthTest() {
    const handleRequest = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "kH9uzGrt0cOqmZEutZCbjpssKfsXohH9QRd44yUFJr9iiKQjvAETPbkbev6AKkvr");

        fetch("https://lmsapistudent.edudev.xyz/class/additional_material?curriculum_id=11166", {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const { isLoading, isError, error, data: classData } = useGetAllClassesQuery()
    const handleRequest2 = () => {
        if (isError) {
            console.log(error)
        } else {
            console.log(classData)
        }

    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <button onClick={handleRequest} className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white">Request Data</button>
        </div>
    )
}
