import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("PropsApp.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, images TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL, status TEXT NOT NULL, price FLOAT NOT NULL, area INTEGER NOT NULL)",
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

export const insertPlace = (
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
        "INSERT INTO places (title, images, address, coords, status, price, area) VALUES (?,?,?,?,?,?,?)",
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

export const selectPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places",
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
export const deletePlace = (placeId) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM places WHERE id = ?",
        [placeId],
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

export const updatePlace = (
  placeId,
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
        "UPDATE places SET title = ?, images = ?, address = ?, coords = ?, status = ?, price = ?, area = ? WHERE id = ?",
        [
          title,
          JSON.stringify(images),
          address,
          JSON.stringify(coords),
          status,
          price,
          area,
          placeId,
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

export const deleteAllPlacesFromDatabase = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM places",
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
