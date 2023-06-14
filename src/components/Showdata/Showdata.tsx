import { useContext } from "react"
import mainContext from "../../Store/mainContext/maincontext"

const Showdata = () => {

    const healthContext :any = useContext (mainContext);

    console.log("healthcontext " , healthContext);

return (

<div>

    show health data
</div>

)


}

export default Showdata 