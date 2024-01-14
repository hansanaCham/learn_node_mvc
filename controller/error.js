exports.get404 = (req, res, next) => {
  console.log("hitting function");
  res.status(404).render("404", { docTitle: "Not Found", path: "" });
};
