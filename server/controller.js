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

addProduct = (req, res, next) =>
{
  const dbInstance = req.app.get('db');

  //destructuring variables from req.body
  const {name, price, image} = req.body;

  //make SQL query and send it the product parameters
  dbInstance.create_product([name, price, image])
    .then(response => res.sendStatus(200)) //why shouldn't this be "status(200).send(response)"?
    .catch( err => 
      {
        res.status(500).send(`Error in addProduct(): ${err}`);
        console.log(err);
      }
    );//catch
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
  addProduct,
  editProduct,
  deleteProduct
};