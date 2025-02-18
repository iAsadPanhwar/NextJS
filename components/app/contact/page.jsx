import React from 'react'
import Script from 'next/script'

const contact = () => {
    return (

        <div>
            <Script>
                {`alert("welcome to contact page")`}
            </Script>
            This is contact page</div>
    )
}

export default contact

export const metadata = {
    title: "Facebook - contact",
    description: "This is facebook and we can connect with the world using facebook",
};
