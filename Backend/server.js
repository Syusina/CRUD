const http = require("http");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("empresa.db", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connection successfully established");
  }
});

db.run(
  `CREATE TABLE IF NOT EXISTS Products(
    ProductID INTEGER PRIMARY KEY AUTOINCREMENT,
    ProductName TEXT,
    SupplierID INTEGER,
    CategoryID INTEGER,
    Unit TEXT,
    Price FLOAT
  )`,
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Successfully created table");
    }
  }
);

const search = (callback) => {
  db.all("SELECT * FROM products", (err, rows) => {
    if (err) {
      console.error(err);
    } else {
      callback(rows);
    }
  });
};

const insertData = db.prepare(
  `INSERT INTO Products (ProductName, SupplierID, CategoryID, Unit, Price)
  VALUES (?, ?, ?, ?, ?)`,
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Successfully entered data");
    }
  }
);

const deleteData = db.prepare(
  `DELETE FROM Products WHERE PriductId == ?`,
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Successfully deleted data");
    }
  }
);

const modifyData = db.prepare(
  `UPDATE Products
    SET ProductName = ?,
        SupplierID = ?,
        CategoryID = ?,
        Unit = ?,
        Price = ?,
  WHERE PruductID = ?`,
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Successfully modified data");
    }
  }
);

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  search((result) => {
    res.write(JSON.stringify(result));
    res.end();
  });

  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const parsedBody = JSON.parse(body);
      console.log(parsedBody);

      insertData.run(
        parsedBody.ProductName,
        parsedBody.SupplierID,
        parsedBody.CategoryID,
        parsedBody.Unit,
        parsedBody.Price
      );
      console.log("Successfully created data");
    });
  } else if (req.method === "DELETE") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const parsedBody = JSON.parse(body);
      console.log(parsedBody);
      deleteData.run(parsedBody.PruductID);
      console.log("Successfully deleted data");
    });
  } else if (req.method === "PUT") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const parsedBody = JSON.parse(body);
      console.log(parsedBody);

      modifyData.run(
        parsedBody.ProductName,
        parsedBody.SupplierID,
        parsedBody.CategoryID,
        parsedBody.Unit,
        parsedBody.Price
      );
      console.log("Successfully modified data");
    });
  }
});

const port = 3000;
server.listen(port);
console.log(`Server listening on Port ${port}`);
