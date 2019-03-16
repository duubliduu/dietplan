import storage from "./Store";

class Database {
  private db;
  constructor() {
    // Let us open version 4 of our database
    const DBOpenRequest = window.indexedDB.open("dietplan", 4);
    storage.setLoading(true);
    // these two event handlers act on the database being opened
    // successfully, or not
    DBOpenRequest.onerror = event => {
      storage.setLoading(false);
      storage.setError(JSON.stringify(event));
    };

    DBOpenRequest.onsuccess = event => {
      storage.setLoading(false);
      this.db = DBOpenRequest.result;
    };
  }
}

export default Database;
