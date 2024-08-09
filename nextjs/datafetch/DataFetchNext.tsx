const DataFetchNext = async () => {
  const response = await fetch("https://api.example");
  const jsonData = await response.json();

  return (
    <div>
      <h1>Data</h1>
      <pre>jsonData</pre>
    </div>
  );
};

export default DataFetchNext;
