import fs from "fs";

const handler = (request, response) => {
    const url = request.url
    const method = request.method

    if(method === "POST" && url === "/message"){
        const body = []
        request.on("data", (data) => {
            body.push(data)
        })
        request.on("end", () => {
            let message = Buffer.concat(body).toString().split("=")[1]
            console.log(message)
            fs.writeFileSync("./message.txt", message)
        })


        response.statusCode = 302
        response.setHeader("Location", "/")
        response.end()

    }
    if(url === '/') {
        response.write('<html>')


        response.write('<body>')
        response.write('<form action="/message" method="POST">')

        response.write('<input name="text" type="text" required>')
        response.write('<button>submit</button>')

        response.write('</form>')
        response.write('</body>')


        response.write('</html>')
        response.end()
    }
}



export const routes = {
    handler : handler
}

export default routes
