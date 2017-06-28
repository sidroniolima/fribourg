class ContatoService
{
	enviaJQuery(contato, callbackFunction)
	{
		$('#spinner').show();
		console.log(contato);

		$.ajax({
			url:"http://jrodontologia.com/jrodon-rest/contato/mensagem/envia/",
			contentType: 'application/json',
			dataType: 'json',
			type: 'post',
			data: JSON.stringify(contato)
		})
		.done(function(resposta)
		{	
			callbackFunction(resposta);	
		})
		.fail(function(resposta) 
		{
			console.log('Falha: ' + resposta);
			callbackFunction(null);
		})
		.always(function(resposta) {
			$('#spinner').hide();			
		})
	}
}