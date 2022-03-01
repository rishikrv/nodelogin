const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const controllerOperator = require("../controllers/operator.controller");
const controllerRoute = require("../controllers/route.controller");
const controllerMachine = require("../controllers/machine.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all/test", controller.allAccess);
  app.get("/api/test/all/operator", controllerOperator.allAccess);
  app.get("/api/test/all/route", controllerRoute.allAccess);
  app.get("/api/test/all/machine", controllerMachine.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
