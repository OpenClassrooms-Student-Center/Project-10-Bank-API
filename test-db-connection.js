// test-db-connection.js
require('dotenv').config();
const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB';

console.log('🔄 Tentative de connexion à MongoDB...');
console.log('📍 URL:', DATABASE_URL.replace(/\/\/([^:]+):([^@]+)@/, '//$1:****@')); // Cache le mot de passe

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('✅ SUCCÈS : Connexion à MongoDB établie !');
    console.log('📊 Database:', mongoose.connection.db.databaseName);
    console.log('🔗 Host:', mongoose.connection.host);
    
    // Liste les collections existantes
    mongoose.connection.db.listCollections().toArray((err, collections) => {
      if (err) {
        console.error('❌ Erreur lors de la récupération des collections:', err);
      } else {
        console.log('📚 Collections disponibles:', collections.map(c => c.name));
      }
      
      // Ferme la connexion
      mongoose.connection.close();
      console.log('👋 Connexion fermée');
      process.exit(0);
    });
  })
  .catch((error) => {
    console.error('❌ ERREUR : Impossible de se connecter à MongoDB');
    console.error('📝 Message d\'erreur:', error.message);
    console.error('🔧 Vérifiez :');
    console.error('   - L\'URL de connexion dans .env');
    console.error('   - Les identifiants (username/password)');
    console.error('   - L\'accès réseau dans MongoDB Atlas');
    process.exit(1);
  });