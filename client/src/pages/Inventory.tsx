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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">sku</th>
              <th scope="col">quantity</th>
              <th scope="col">color</th>
              <th scope="col">size</th>
              <th scope="col">price</th>
              <th scope="col">cost</th>
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
      )}
    </div>
  );
};

export default Inventory;