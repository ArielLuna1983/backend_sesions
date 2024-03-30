import productsRouterFileSystem from "./fileSystem/products.routes.js";
import cartsRouterFileSystem from "./fileSystem/carts.routes.js";

import productRouterMongo from "./mongoDB/products.routes.js"
import cartRouterMongo from "./mongoDB/carts.routes.js"

import productsView from "./views/products.view.js";
import cartView from "./views/cart.view.js";
import chatView from "./views/chat.view.js";

import sessionsRouter from "./sessions.router.js";
import viewsRouter from "./views.router.js";

const router = (app) => {
    //Postman
    app.use("/api", productsRouterFileSystem);
    pp.use("/api", cartsRouterFileSystem);
    app.use("/api", productRouterMongo);
    app.use("/api", cartRouterMongo)
    //Navegador
    app.use("/products", productsView);
    app.use("/cart", cartView);
    app.use("/chat", chatView);
    app.use("api/sessions", sessionsRouter);
    app.use("/", viewsRouter)


};

export default router;
