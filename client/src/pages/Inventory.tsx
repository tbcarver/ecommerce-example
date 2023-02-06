import React, { useEffect, useState } from 'react';
import MessageBox from '../components/MessageBox';
import axios from 'axios';

function Inventory() {
  const [skuParameter, setSkuParameter] = useState('');
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [searchClicked, setSearchCliked] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        console.log('getting...');
        let getInventoryUrl = `${process.env.REACT_APP_SERVER_HOST}/inventory`;
        getInventoryUrl += skuParameter ? `?sku=${skuParameter}` : '';
        const token = localStorage.getItem('token');
        const response = await axios.get(getInventoryUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
        setIsPending(false);
        setError(null);
      } catch (error: any) {
        setError(error.message);
        setIsPending(false);
        console.error(error.message);
      }
    })();
  }, [searchClicked]);

  return (
    <div>
      <h1>Inventory</h1>
      <MessageBox type='danger' message={error} />
      {isPending && <div>loading...</div>}

      {data && (
        <div>
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-4">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Search by SKU"
                    value={skuParameter} onChange={(event) => setSkuParameter(event.target.value)} />
                  <button className="btn btn-outline-secondary" type="button"
                    onClick={() => setSearchCliked(!searchClicked)}>Search</button>
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
              {data.map((inventoryItem: any) => (
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