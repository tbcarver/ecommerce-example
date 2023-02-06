import React from 'react';

const OneColumnLayout = ({ children }: any) => {
  return (
    <div>
      <main>
        <div className="container mt-3">
          <div className="row">
            <div className="col">

              {children}

            </div>
          </div>
        </div>
      </main>

      <footer className="mt-5 p-2">
        <div className="container">
          <div className="text-center text-muted">
            &copy; eCommerce 2023
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OneColumnLayout;
