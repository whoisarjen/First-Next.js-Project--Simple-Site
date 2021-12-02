import { useEffect } from "react"
import { useRouter } from "next/router"

const Error404 = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 1000)
    }, [])
    
    return (
        <div class="error404">
            <h1>404 Not found!</h1>
        </div>
    );
}
 
export default Error404;