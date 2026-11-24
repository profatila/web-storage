//Salvar um dado convertido para string no localStorage
//dados: chave, valor
//nome: "eu", tema: "escuro"
export const salvarNoStorage = (chave, valor) => {
  try {
    //vamos conveter os dados para um texto - string
    const valorString = JSON.stringify(valor);
    localStorage.setItem(chave, valorString);
  } catch (erro){
    console.error("Erro ao salvar no localStorage:", erro);
  }
};

export const buscarDoStorage = (chave) => {
  try {
    const valor = localStorage.getItem(chave);
    return valor ? JSON.parse(valor) : null;
  } catch (erro) {
    console.error("Erro ao ler do localStorage:", erro);
    return null;
  }
};