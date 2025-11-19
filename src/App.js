import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🚀 Welcome to My React App</h1>
        <p style={styles.subtitle}>
          This is a sample React project. Start editing <code>App.js</code> to build your app!
        </p>
      </header>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    color: "#2563eb",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#4b5563",
  },
};

export default App;
