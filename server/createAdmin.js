require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function createAdmin() {
  try {
    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Conectado a MongoDB');

    // Verificar si ya existe un admin
    const existingAdmin = await User.findOne({ username: 'admin' });
    if (existingAdmin) {
      console.log('⚠️  El usuario admin ya existe');
      process.exit(0);
    }

    // Crear el usuario admin
    const admin = new User({
      username: 'admin',
      email: 'impoescobedodelagos05@gmail.com',
      password: 'Licesco2024!'
    });

    await admin.save();
    console.log('✅ Usuario admin creado exitosamente');
    console.log('   Username: admin');
    console.log('   Email: impoescobedodelagos05@gmail.com');
    console.log('   Password: Licesco2024!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al crear usuario admin:', error.message);
    process.exit(1);
  }
}

createAdmin();
