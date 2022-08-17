import connection from "../models/employeeDB.js";
connection.connect();

export const getEmpDetails = (req, res) => {
  connection.query(
    `SELECT * FROM employee WHERE Email="${req.params.email}";`,
    (err, results, fields) => {
      if (err) {
        res.send(err);
        throw err;
      }

      res.status(200).send(results);
    }
  );
};
