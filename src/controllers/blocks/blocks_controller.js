const { request, response } = require("express");
const MainContainerBlock = require("../../models/main_container_block");
const ResponseModel = require("../../models/response_model");
const StatusBar = require("../../models/status_bar");
const AppBar = require("../../models/app_bar");
const ColumnBlock = require("../../models/column_block");
const TextfieldBlock = require("../../models/textfield_block");
const Padding = require("../../models/padding");
const PhiColumnParamsBlock = require("../../models/column_params_block");

exports.GET_PHI_LOGIN_BLOCKS = async function (req = request, res = response) {
  const statusBar = new StatusBar("default_style");
  const appBar = new AppBar("Login");
  const inputEmailField = new TextfieldBlock("pbtxt123", null,"Ingresar correo", null);
  const inputPasswordField = new TextfieldBlock("pbtxt123", null,"Ingresar password", null);
  const listPadding = [new Padding("all", 10)];
  const columnParams = new PhiColumnParamsBlock("fill_proportionally", listPadding);
  const children = [inputEmailField, inputPasswordField];
  const mainColumn = new ColumnBlock("pb222", columnParams, children, null);
  const data = {
    status_bar: statusBar,
    app_bar: appBar,
    body: [
      mainColumn,
    ],
  };
  const block = new MainContainerBlock("pb123", data, null);
  const resModel = new ResponseModel(200, "OK", "OK", block);
  res.json(resModel);
};
