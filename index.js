const processar = require('./processar.js')
	, json = {
		MerchantOrderId: '2014111703',
		CustomerName: 'Comprador crédito simples',
		type: 'CreditCard', //CreditCard, DebitCard
		Amount: 15700,
		CardNumber: 1234123412341231, //debito: 4551870000000183 Credito:1234123412341231
		Holder: 'Teste Holder',
		ExpirationDate: '12/2030',
		SecurityCode: '123',
		Brand: 'Visa'
	};

processarCielo = new processar(json);
await processarCielo.execultar();

await processarCielo.visualizar();