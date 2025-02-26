import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import {RouterProvider} from "react-router-dom"
import {Provider} from "react-redux"
import {Bounce, ToastContainer} from "react-toastify"

import {store} from "./redux/store"
import {router} from "./routes"

import "./index.css"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                limit={1}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="colored"
                transition={Bounce}
            />
        </Provider>
    </StrictMode>
)
