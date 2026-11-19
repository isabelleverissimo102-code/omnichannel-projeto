// ==========================================
// Script 04: PoC NoSQL - MongoDB Atlas
// Ecossistema E-commerce OmniChannel
// ==========================================

// 1. Seleção do banco de dados Não-Relacional
use('omnichannel_nosql');

// 2. Inserção de 3 documentos JSON na coleção 'logs_navegacao'
db.getCollection('logs_navegacao').insertMany([
  {
    cliente_id: 101,
    data_hora: new Date(),
    pagina_visitada: "/produto/smartphone-galaxy-s23",
    dispositivo: "Mobile"
  },
  {
    cliente_id: 102,
    data_hora: new Date(),
    pagina_visitada: "/carrinho",
    dispositivo: "Desktop"
  },
  {
    cliente_id: 103,
    data_hora: new Date(),
    pagina_visitada: "/checkout/pagamento",
    dispositivo: "Mobile"
  }
]);

// 3. Consulta de validação dos registos inseridos
db.getCollection('logs_navegacao').find({});