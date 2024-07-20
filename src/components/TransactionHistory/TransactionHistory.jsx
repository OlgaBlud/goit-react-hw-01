import css from "./TransactionHistory.module.css";
function TransactionHistory({ transactions }) {
  return (
    <>
      <h2 className="taskTitle">Transaction History</h2>

      <table className={css.table}>
        <thead className={css.tableHead}>
          <tr className={css.tableHeadRow}>
            <th className={css.tableHeadTitle}>Type</th>
            <th className={css.tableHeadTitle}>Amount</th>
            <th className={css.tableHeadTitle}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => {
            return (
              <tr className={css.tableRow} key={id}>
                <td className={(css.tableColumn, css.transName)}>{type}</td>
                <td className={css.tableColumn}>{amount}</td>
                <td className={css.tableColumn}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default TransactionHistory;
