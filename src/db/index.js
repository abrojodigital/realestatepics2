import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("PropsApp.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS properties (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, images TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL, status TEXT NOT NULL, price FLOAT NOT NULL, area INTEGER NOT NULL)",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertProperty = (
  title,
  images,
  address,
  coords,
  status,
  price,
  area
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO properties (title, images, address, coords, status, price, area) VALUES (?,?,?,?,?,?,?)",
        [
          title,
          JSON.stringify(images),
          address,
          JSON.stringify(coords),
          status,
          price,
          area,
        ],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const selectProperties = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM properties",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};
export const deleteProperty = (propertyId) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM properties WHERE id = ?",
        [propertyId],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const updateProperty = (
  propertyId,
  title,
  images,
  address,
  coords,
  status,
  price,
  area
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE properties SET title = ?, images = ?, address = ?, coords = ?, status = ?, price = ?, area = ? WHERE id = ?",
        [title, images, address, coords, status, price, area, propertyId],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const deleteAllPropertiesFromDatabase = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM properties",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};
