const viewProducts = (req, res, next) =>
{
  const dbInstance = req.app.get('db');
  dbInstance.read_inventory()
    .then(response => res.status(200).send(response))
    .catch( err => 
      {
        res.status(500).send(`Error in viewProducts(): ${err}`);
        console.log(err);
      }
    );//catch
};

// const viewOneProduct = (req, res, next) =>
// {

// };

addProducts = (req, res, next) =>
{
};

editProduct = (req, res, next) =>
{
};

deleteProduct = (req, res, next) =>
{
};

module.exports =
{
  viewProducts,
  // viewOneProduct, //add if needed
  addProducts,
  editProduct,
  deleteProduct
};