
var processar = require('./processar.js')
var json = { MerchantOrderId:'2014111703',
				CustomerName:'Comprador crédito simples',
				type:'CreditCard', //CreditCard, DebitCard
				Amount:15700, 
				CardNumber:1234123412341231, //debito: 4551870000000183 Credito:1234123412341231
				Holder:'Teste Holder',
				ExpirationDate:'12/2030',
				SecurityCode:'123',
				Brand:'Visa'};

	processarCielo = new processar(json);
	processarCielo.execultar();
	 
	processarCielo.visualizar();
	 


	 
//#################################################################################
 //transacao simples credito
//#################################################################################


// var dadosSale = {  
//    "MerchantOrderId":"2014111703",
//    "Customer":{  
//       "Name":"Comprador crédito simples"
//    },
//    "Payment":{  
//      "Type":"CreditCard",
//      "Amount":15700,
//      "Installments":1,
//      "SoftDescriptor":"123456789ABCD",
//      "CreditCard":{  
//          "CardNumber":"0000000000000001",
//          "Holder":"Teste Holder",
//          "ExpirationDate":"12/2030",
//          "SecurityCode":"123",
//          "Brand":"Visa"
//      }
//    }
// }

 //Usando Promise
// cielo.creditCard.simpleTransaction(dadosSale).then((data) => {
//         return console.log("PaymentId Credito: "+data.Payment.PaymentId);
//     })
//     .catch((err) => {
//         return console.error('ERRO', err);
//     });




//Ou usando Async / Await
//const transaction = await cielo.creditCard.simpleTransaction(dadosSale);
//console.log(transaction);
//#################################################################################


//#################################################################################
//transacao completa credito
//usando promise
// cielo.creditCard.completeTransaction(dadosSale)
//     .then((data) => {
//         return console.log(data);
//     })
//     .catch((err) => {
//         return console.error('ERRO', err);
//     })
// })

//Ou usando Async / Await
//const transaction = await cielo.creditCard.completeTransaction(dadosSale);
//console.log(transaction);
//#################################################################################
//#################################################################################






//#################################################################################
//transacao simples DEBITO
//#################################################################################
// var dadosSale = {  
//    "MerchantOrderId":"2014121201",
//    "Customer":{  
//       "Name":"Comprador Cartão de débito"
//    },
//    "Payment":{  
//      "Type":"DebitCard",
//      "Amount":15700,
//      "ReturnUrl":"http://www.cielo.com.br",
//      "DebitCard":{  
//          "CardNumber":"4551870000000183",
//          "Holder":"Teste Holder",
//          "ExpirationDate":"12/2030",
//          "SecurityCode":"123",
//          "Brand":"Visa"
//      }
//    }
// }
 
// cielo.debitCard.simpleTransaction(dadosSale)
//     .then((data) => {
//         return console.log("PaymentId Debito: "+data.Payment.PaymentId);
//     })
//     .catch((err) => {
//         return console.error('ERRO', err);
//     });

//Ou usando Async / Await
// const transaction = await cielo.debitCard.simpleTransaction(dadosSale);
// console.log(transaction);
//#################################################################################
//#################################################################################






 
 
 //Capturando uma venda
 //#################################################################################

// var dadosSale = {
//     paymentId: '01df6e28-6ddd-45db-a095-903c1adb170a',
//     amount: '15700'
// }
 
// cielo.creditCard.captureSaleTransaction(dadosSale)
//     .then((data) => {
//         return console.log(data);
//     })
//     .catch((err) => {
//         return console.error('ERRO', err);
//     })
// })

//Ou usando Async / Await
//const transaction = await cielo.creditCard.captureSaleTransaction(dadosSale);
//console.log(transaction);
 //#################################################################################
 //#################################################################################





//Cancelando uma venda
//#################################################################################
// var dadosSale = {
//     paymentId: '01df6e28-6ddd-45db-a095-903c1adb170a',
//     amount: '15700'
// }
 
// cielo.creditCard.cancelSale(dadosSale)
//     .then((data) => {
//         return console.log(data);
//     })
//     .catch((err) => {
//         return console.error('ERRO', err);
//     })
// })
//Ou usando Async / Await
// const cancel = await cielo.creditCard.cancelSale(dadosSale);
// console.log(cancel);
//#################################################################################
//#################################################################################