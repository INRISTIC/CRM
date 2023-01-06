import s from "./TableItem.module.css";

const TableItem = () => {
  return (
    <div className={s.tableBlock}>

      <div className={s.number}>IV кв. 2023</div>


      <table className={s.iksweb}>
        <tbody>
          <tr>
            <td>TEXT</td>
            <td>TEXT</td>
            <td>TEXT</td>
            <td>TEXT</td>
          </tr>
          <tr>
            <td>TEXT</td>
            <td>TEXT</td>
            <td>TEXT</td>
            <td>TEXT</td>
          </tr>
          <tr>
            <td>TEXT</td>
            <td>TEXT</td>
            <td>TEXT</td>
            <td>TEXT</td>
          </tr>
          <tr>
            <td>TEXT</td>
            <td>TEXT</td>
            <td>TEXT</td>
            <td>TEXT</td>
          </tr>
          <tr>
            <td className={s.lastTable}>TEXT</td>
            <td className={s.lastTable}>TEXT</td>
            <td className={s.lastTable}>TEXT</td>
            <td className={s.lastTable}>TEXT</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableItem;
