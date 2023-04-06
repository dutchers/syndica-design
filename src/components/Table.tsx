import styles from '@/styles/Table.module.css';

type Row = {
  year: number;
  amount: number;
  group: string;
  description: string;
};

type TableProps = {
  rows: Row[];
  headers: string[];
};

export default function Table({ rows, headers }: TableProps) {
  return (
    <>
      <div className={styles.table}>
        <div className={`${styles.row} ${styles.thead}`}>
          {headers.map((header, j) => {
            return (
              <div className={`${styles.cell} ${styles.header}`} key={j}>
                {header}
              </div>
            );
          })}
        </div>
        {rows.map((row: Row, i: number) => {
          return (
            <div className={styles.row} key={i}>
              {Object.keys(row).map((col: string, i: number) => {
                return (
                  <div className={styles.cell} key={i}>
                    {row[col as keyof Row]}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className={styles.table__mobile}>
        {rows.map((row, idx) => {
          return (
            <div className={styles.row} key={idx}>
              {Object.keys(row).map((col: string, i: number) => {
                return (
                  <div className={styles.cell} key={i}>
                    <span className={styles['table__mobile-header']}>
                      {col}:{' '}
                    </span>
                    {row[col as keyof Row]}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
