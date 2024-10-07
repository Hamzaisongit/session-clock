import App from "./App"
import {createRoot} from "react-dom/client"
import Provider from "./Context/Provider"
import './main.css'

createRoot(document.getElementById('root')).render(
<>
<Provider>
<App />
</Provider>
</>

)
