import React from 'react';
import useGet from '../hooks/useGet';
import MessageBox from '../components/MessageBox';

const Products = () => {
  const {
    data: products,
    isPending,
    error,
  }: any = useGet(`${process.env.REACT_APP_SERVER_HOST}/products`);


  return (
    <div>
      <h1>Products</h1>
      <MessageBox type='danger' message={error} />
      {isPending && <div>loading...</div>}
      {products && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Style</th>
              <th scope="col">Brand</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: any) => (
              <tr key={product.id}>
                <td>{product.productName}</td>
                <td>{product.style}</td>
                <td>{product.brand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Products;