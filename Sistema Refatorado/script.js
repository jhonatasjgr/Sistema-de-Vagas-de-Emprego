let vagas = []
function listarVagas(){
  const listaVagas = vagas.reduce(function(texto,vaga,indice){
   texto += "Indice: "+ indice+". "+
    "\nNome: "+vaga.nome+"  "+vaga.descricao+
    "\nQuantidade de candidatos inscritos: "+vaga.candidatos.length+"\n";
  return texto
  },"")
  console.log("oxe")
  window.alert(listaVagas)
}
function criarVagas(){
  const nome = prompt("Informe o nome da vaga")
  const descricao = prompt("Informe a descrição da vaga")
  const data = prompt("Informe a data final da vaga\n dd/mm/aaaa");

  const confirmar = confirm("Deseja criar a vaga com os seguintes dados?\n"+
  "Nome: "+nome+"\nDescrição: "+descricao+"\nData final: "+data)

  if(confirmar){
    const vaga = {nome, descricao, data, candidatos:[]}
    vagas.push(vaga)
  }
}
function exibirVaga(){
  const indice = prompt("Informe o indice da vaga")
  const vaga = vagas[indice]

  const candidatos = vaga.candidatos.reduce(function(texto,candidato){
    texto+= candidato + " - "
    return texto;
  },"");
  alert("Indice: "+indice+
    "\nNome: "+vaga.nome+
    "\nDescrição: "+vaga.descricao+
    "\nData limite: "+vaga.data+
    "\nQuantidade de inscritos: "+vaga.candidatos.length+
    "\nCandidatos: "+candidatos)
}

function inscreverCandidato(){
  const nome = prompt("Informe o nome do candidato");
  const indice = prompt("Informe o indice da vaga que deseja inscrever o candidato "+nome);

  const vaga = vagas[indice];
  const confirmar = confirm("Deseja adicionar o candidato "+nome+
    " a vaga "+vaga.nome+"?")
  if(confirmar){
    vagas[indice].candidatos.push(nome)
  }
}

function excluirVaga(){
  const indice = prompt("Informe o indice da vaga que deseja excluir");
  const confirmar = confirm("Deseja excluir a vaga "+
  vagas[indice].nome+"  "+vaga.descricao+"?")
    
  if(confirmar){
    vagas.splice(indice,1);
    alert("Vaga excluida com sucesso!")
  }
}
function exibirMenu(){
  const menu = parseInt(prompt("CADASTRO DE EMPREGO"+
  "\n1 - Listar vagas disponíveis"+
  "\n2 - Criar um nova vaga"+
  "\n3 - Visualizar uma vaga"+
  "\n4 - Inscrever um candidato em uma vaga"+
  "\n5 - Excluir uma vaga"+
  "\n6 - Sair"));
  return menu;
}
function executar(){
  let op=1
  do{
  op = exibirMenu();
  switch(op){
    case 1:
      listarVagas()
      break;
    case 2:
      criarVagas()
      break;
    case 3:
      exibirVaga()
      break;
    case 4:
      inscreverCandidato()
      break;
    case 5:
      excluirVaga()
      break;
    case 6:
      alert("Finalizando...")
      break;
    default:
      alert("Opção Invalida!");
      break;
    }
  }while(op !== 6)
}
executar()