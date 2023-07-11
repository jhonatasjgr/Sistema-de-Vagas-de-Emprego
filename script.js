let vagas = []
let op = 1
do{
  op = parseInt(window.prompt("1-Listar Vagas\n2-Criar nova vaga\n3-Vizualizar vaga\n4-Inscrever candidato na vaga\n5-Excluir vaga\n0-Sair"));
  switch(op){
    case 1:
      if(vagas.length>0){
        let dados=""
      for(let i=0;i<vagas.length;i++){
        dados +=
        "indice: "+i+"\nNome: "+vagas[i].nomeVaga+"\nQuantidade de inscritos: "+vagas[i].qtdInscritos+"\n--------------------------------------------------\n"
      }
      dados += "\nQuantidade de inscritos em todas as vagas: "+vagas.reduce(function(valorAcumulado,vaga){
        return valorAcumulado+vaga.qtdInscritos
      },0)
      alert(dados)
      }else{
        alert("Nenhuma vaga cadastrada!")
      }
      break;
    case 2:
      let nomeVaga = window.prompt("Digite o nome da vaga");
      let descricao = window.prompt("Diga uma descrição para a vaga");
      let dia = window.prompt("Data limite da vaga\nDiga o Dia final da vaga");
      if(dia<=0 || dia>31){
        alert("Dia Inexistente!")
        break;
      }
      let mes = window.prompt("Data limite da vaga\nDiga o Mês final da vaga");
      if(dia>29&&mes==2){
        alert("Dia inexistente no mês de fevereiro!");
        break;
      }else if(mes<=0 || mes>12){
        alert("Mês inexistente!")
        break;
      } 
      let ano = window.prompt("Data limite da vaga\nDiga o Ano final da vaga");
      let dataFinal = new Date(ano,mes,dia)
      op = window.confirm("Deseja criar a vaga abaixo?\nNome: "+
      nomeVaga+"\nDescrição: "+descricao+"\nData: "+dia+"/"+mes+"/"+ano);
      if(op==true){
        let vaga = {
          nomeVaga: nomeVaga,
          descricao: descricao,
          dataFinal:dataFinal,
          qtdInscritos:0,
          candidatos:[]
        }
        vagas.push(vaga)
      }else{
        op=1
      }
      break;
    case 3:
      let nomes = ""
      let indice = window.prompt("Digite o indice da vaga que deseja obter informações");
      for(let i=0; i<vagas[indice].candidatos.length;i++){
      nomes += vagas[indice].candidatos[i]
      if(i>=0&&i<vagas[indice].candidatos.length-1){
        nomes+=","
      }
      }
      window.alert("DADOS DA VAGA "+(parseInt(indice)+1)+
      "\nIndice: "+indice+"\nNome: "+vagas[indice].nomeVaga+"\nDescrição: "+vagas[indice].descricao+"\nData limite: "+
      vagas[indice].dataFinal.getDate()+"/"+
      vagas[indice].dataFinal.getMonth()+"/"+
      vagas[indice].dataFinal.getFullYear()
      +"\nQuantidade de inscritos: "+vagas[indice].qtdInscritos+"\nCandidatos: "+nomes);
      break;
    case 4:
      let nome = window.prompt("Diga o nome do candidato à vaga")
      let pos = window.prompt("Diga o indice da vaga")
      if(Date.now()<=vagas[pos].dataFinal){
         let op = window.confirm("Deseja adicionar o candidato "+nome+" à vaga "+vagas[pos].nomeVaga+"?");
      if(op==true){
        vagas[pos].candidatos.push(nome)
        vagas[pos].qtdInscritos = vagas[pos].candidatos.length
      }
      }else{
        alert("Vaga Finalizada!")
      }
      break;
    case 5:
      let posIndex = window.prompt("Digite o indice da vaga que deseja excluir")
      op = window.confirm("Deseja excluir a vaga "+vagas[posIndex].nomeVaga+" - "+vagas[posIndex].descricao+"?")
      if(op==true){
        vagas.splice(posIndex,1)
        alert("Vaga excluida com sucesso")
      }else{
        op=1
      }
      break;
    case 0:
      window.alert("Programa Finalizado!");
      break;
    default:
      window.alert("Opção Inválida!")
      break;
  }
}while(op!=0)