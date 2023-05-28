
export const CurrencyRate= ({rates}) =>  {
   
  return (
    <div  className="mx-auto">
      <h2 className="text-center mb-5">The official exchange rate of the dollar against foreign currencies</h2>
      <table className="table table-bordered table-hover w-50 mx-auto">
        <thead className="table-primary">
          <tr>
            <th>Currency/ Name</th>
            <th>Amount</th>
          </tr>
        </thead>         
        <tbody>
          {Object.entries(rates).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
