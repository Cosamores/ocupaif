import React from "react";

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default Dashboard;
