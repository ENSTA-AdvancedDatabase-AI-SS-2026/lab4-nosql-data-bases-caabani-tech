use("medical_db");

// Indexes created");


// 4.4 : TTL INDEX 

print("=== Creating TTL index ===");

// 5 years = 5 * 365 * 24 * 60 * 60 seconds
db.analyses.createIndex(
 { date: 1 },
 { expireAfterSeconds: 157680000 }
);

print(" TTL index created (5 years expiration)");
