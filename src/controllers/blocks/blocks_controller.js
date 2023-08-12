const { request, response } = require("express");
const MainContainerBlock = require("../../models/main_container/main_container_block");
const ResponseModel = require("../../models/response_model");
const StatusBar = require("../../models/main_container/status_bar");
const AppBar = require("../../models/main_container/app_bar");
const ColumnBlock = require("../../models/column/column_block");
const TextfieldBlock = require("../../models/textfield_block");
const Padding = require("../../models/padding");
const PhiColumnParamsBlock = require("../../models/column_params_block");
const InternalButton = require("../../models/button/internal_button");
const SpacerBlock = require("../../models/spacer/spacer");

exports.GET_PHI_LOGIN_BLOCKS = async function (req = request, res = response) {
  const app_bar = new AppBar("Bienvenido Seba", (large_title = true));
  const status_bar = new StatusBar("default_style");
  const columnPadding = [new Padding("all", 10)];
  const columnParams = new PhiColumnParamsBlock(
    (distribution = "fill"),
    (aligmen = "fill"),
    (padding = columnPadding)
  );
  const inputEmail = new TextfieldBlock("pb-tf-01", "Ingrese Email");
  const inputPassword = new TextfieldBlock("pb-tf-02", "Ingresar Password");
  const loginButton = new InternalButton("pb-bttn-01", "Iniciar Sesion", {
    event: "request_login",
  },
  {
    "style": "galaxy",
    "padding": [
      {
        "anchor": "height",
        "constant": 44
      }
    ]
  });
  const firstSpacer = new SpacerBlock((id = "pb-spacer-01"), (size = 44.0));
  const spacer = new SpacerBlock((id = "pb-spacer-02"));
  const column = new ColumnBlock("pb-01", columnParams, [
    firstSpacer,
    inputEmail,
    inputPassword,
    firstSpacer,
    spacer,
    loginButton,
    firstSpacer,
  ]);
  const mainBlock = new MainContainerBlock(
    "pb-mc-01",
    status_bar,
    app_bar,
    column
  );
  const responseModel = new ResponseModel(200, "OK", "OK", mainBlock);
  res.json(responseModel);
};

exports.GET_PHI_EXPLORATION_BLOCKS = async function (req = request, res = response) {
  const app_bar = new AppBar("Bienvenido Seba", (large_title = true));
  const status_bar = new StatusBar("default_style");
  const columnPadding = [new Padding("all", 10)];
  const columnParams = new PhiColumnParamsBlock(
    (distribution = "fill"),
    (aligmen = "fill"),
    (padding = columnPadding)
  );
  const inputEmail = new TextfieldBlock("pb-tf-01", "Ingrese Email");
  const inputPassword = new TextfieldBlock("pb-tf-02", "Ingresar Password");
  const loginButton = new InternalButton("pb-bttn-01", "Iniciar Sesion", {
    event: "request_login",
  },
  {
    "style": "galaxy",
    "padding": [
      {
        "anchor": "height",
        "constant": 44
      }
    ]
  });
  const firstSpacer = new SpacerBlock((id = "pb-spacer-01"), (size = 44.0));
  const spacer = new SpacerBlock((id = "pb-spacer-02"));
  const column = new ColumnBlock("pb-01", columnParams, [
    firstSpacer,
    inputEmail,
    inputPassword,
    firstSpacer,
    spacer,
    loginButton,
    firstSpacer,
  ]);
  const mainBlock = new MainContainerBlock(
    "pb-mc-01",
    status_bar,
    app_bar,
    column
  );
  const responseModel = new ResponseModel(200, "OK", "OK", mainBlock);
  res.json(responseModel);
};