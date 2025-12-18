import pkg from 'pg';
const { Pool } = pkg;

/* ---------- Database Connection ---------- */
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testdb',
  password: 'password',
  port: 5432,
});

/* ---------- UPDATE FUNCTION ---------- */
async function updateData() {
  const client = await pool.connect();

  try {
    const query = `
      UPDATE users
      SET name = $1, email = $2
      WHERE id = $3
      RETURNING *;
    `;

    const values = ['Aryan Jaiswal', 'aryan@gmail.com', 1];

    const result = await client.query(query, values);

    console.log('Updated User:', result.rows[0]);
  } catch (err) {
    console.error('Update Error:', err);
  } finally {
    client.release();
  }
}

/* ---------- MAIN FUNCTION ---------- */
async function main() {
  await updateData();
  await pool.end(); // close DB connection
}

main();
