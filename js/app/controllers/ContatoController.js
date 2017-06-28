class ContatoController
{

	constructor()
	{
		let _self = this;

		this._contato = 
			{	to: '', 
				from: '', 
				nome: '', 
				assunto: '', 
				telefone: '', 
				email: '', 
				mensagem: ''};

		this._inputNome = $('#form-fname');
		this._inputAssunto = $('#form-subject');
		this._inputEmail = $('#form-email');
		this._inputMensagem = $('#form-message');	

		this._alertDanger = $('.alert-danger');
		this._alertSuccess = $('.alert-success');

		this._service = new ContatoService();

		$("form").submit(function(event) {
			event.preventDefault();
			_self.enviaContato();
		});	
	}

	enviaContato()
	{		
		console.log('Enviando...');
		this._contato.to = 'contato@escolafribourg.com.br';
		this._contato.from = 'mail@tetrati.com.br';
		this._contato.nome = $('#form-fname').val();
		this._contato.assunto = $('#form-subject').val();
		this._contato.email = $('#form-email').val();
		this._contato.mensagem = $('#form-message').val();
		this._contato.telefone = '';

		console.log(this._contato);

		this._service.enviaJQuery(this._contato, this._exibeMensagem.bind(this));		
	}

	_exibeMensagem(resposta)
	{
		if (!resposta)
		{
			$('.texto-alerta').text('Não foi possível enviar o contato.').toggleClass('alert-danger').toggle();

			this._limpaForm();

		} else{
			$('.texto-alerta').text('Contato enviado com sucesso. Em breve o respoderemos.').toggleClass('alert-success').toggle();
		}
	}

	_limpaForm()
	{
		$('#form-fname').val('');
		$('#form-subject').val('');
		$('#form-email').val('');
		$('#form-message').val('');
	}
}