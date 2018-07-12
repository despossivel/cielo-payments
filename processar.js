let id = '';
let key = '';
let paramsCielo = {
    'MerchantId': id,
    'MerchantKey': key,
   // 'RequestId': 'xxxxxxx', // Opcional - Identificação do Servidor na Cielo
    'sandbox': true, // Opcional - Ambiente de Testes
   // 'debug': true // Opcional - Exibe os dados enviados na requisição para a Cielo
};
 
var cielo = require('cielo')(paramsCielo);

module.exports = class processar {
	constructor(json){
		 this.MerchantOrderId = json.MerchantOrderId;
		 this.CustomerName = json.CustomerName; 
		 this.Type = json.type;
		 this.Amount = json.Amount;
		 this.CardNumber = json.CardNumber;
		 this.Holder = json.Holder;
		 this.ExpirationDate = json.ExpirationDate;
		 this.SecurityCode = json.SecurityCode;
		 this.Brand = json.Brand;
		 this.Installments;
		 this.SoftDescriptor;
		  this.dadosSale = { "MerchantOrderId":this.MerchantOrderId,
							 "Customer":{  
							    "Name":this.CustomerName
							   },
							   "Payment":{  
							     "Type":this.Type,
							     "Amount":this.Amount,
							   }
							}	 
 					 
		 	switch(this.Type){
		 		case 'CreditCard':
		 		  this.dadosSale.Payment.CreditCard = {  
											         "CardNumber":this.CardNumber,
											         "Holder":this.Holder,
											         "ExpirationDate":this.ExpirationDate,
											         "SecurityCode":this.SecurityCode,
											         "Brand":this.Brand
											     }
		 		break;

		 		case 'DebitCard':
		 		 this.dadosSale.Payment.DebitCard = {  
											         "CardNumber":this.CardNumber,
											         "Holder":this.Holder,
											         "ExpirationDate":this.ExpirationDate,
											         "SecurityCode":this.SecurityCode,
											         "Brand":this.Brand
											     }
		 		break;
		 	}
	
	}

	execultar(){

		switch(this.Type){
			case 'CreditCard':

				this.dadosSale.Payment.Installments = 1;
				this.dadosSale.Payment.SoftDescriptor = "Pinpper";

				cielo.creditCard.simpleTransaction(this.dadosSale).then((data) => {
					return console.log("PaymentId Credito: "+data.Payment.PaymentId);
				})
				.catch((err) => {
					return console.error('ERRO', err);
				});

			break;
			case 'DebitCard':

				this.dadosSale.Payment.ReturnUrl = "http://www.cielo.com.br";

				cielo.debitCard.simpleTransaction(this.dadosSale)
				.then((data) => {
						return console.log("PaymentId Debito: "+data.Payment.PaymentId);
				})
				.catch((err) => {
					return console.error('ERRO', err);
				});

			break;
		}

	}

	visualizar(){
		
		var dadosSale = {
			paymentId: '01df6e28-6ddd-45db-a095-903c1adb170a',
			amount: '15700'
		}

		cielo.creditCard.captureSaleTransaction(dadosSale)
		    .then((data) => {
		        return console.log(data);
		    })
		    .catch((err) => {
		        return console.error('ERRO', err);
		    });


	}
  
}
