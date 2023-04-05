import http from "http";
import routes from './routes.js'

const webServer = http.createServer(routes.handler)
webServer.listen(3000)