import React from 'react';
import useGet from '../hooks/useGet';
import MessageBox from '../components/MessageBox';

const Inventory = () => {
  const {
    data: inventoryItems,
    isPending,
    error,
  }: any = useGet(`${process.env.REACT_APP_SERVER_HOST}/inventory`);


  return (
    <div>
      <h1>Inventory</h1>
      <MessageBox type='danger' message={error} />
      {isPending && <div>loading...</div>}

      {inventoryItems && (
        <div>
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-4">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Search by SKU" />
                  <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
              </div>
            </div>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">SKU</th>
                <th scope="col">Quantity</th>
                <th scope="col">Color</th>
                <th scope="col">Size</th>
                <th scope="col">Price</th>
                <th scope="col">Cost</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((inventoryItem: any) => (
                <tr key={inventoryItem.id}>
                  <td>{inventoryItem.product.productName}</td>
                  <td>{inventoryItem.sku}</td>
                  <td>{inventoryItem.quantity}</td>
                  <td>{inventoryItem.color}</td>
                  <td>{inventoryItem.size}</td>
                  <td>${(inventoryItem.priceCents / 100).toFixed(2)}</td>
                  <td>${(inventoryItem.costCents / 100).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Inventory;