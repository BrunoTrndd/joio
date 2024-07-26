import React from 'react';
import { CSVLink } from 'react-csv';
import '../style/App.css';

const CSVGenerator = ({ products }) => {
  const headers = [
    { label: "ID", key: "id" },
    { label: "Tipo", key: "tipo" },
    { label: "SKU", key: "sku" },
    { label: "Nome", key: "name" },
    { label: "Publicado", key: "publicado" },
    { label: "Em Destaque", key: "emDestaque" },
    { label: "Visibilidade no catálogo", key: "visibilidade" },
    { label: "Descrição curta", key: "descricaoCurta" },
    { label: "Descrição", key: "descricao" },
    { label: "Data de preço promocional começa em", key: "dataInicioPromocao" },
    { label: "Data de preço promocional termina em", key: "dataFimPromocao" },
    { label: "Status do pedido", key: "statusPedido" },
    { label: "Classe de imposto", key: "classeImposto" },
    { label: "Em Estoque", key: "emEstoque" },
    { label: "Estoque", key: "estoque" },
    { label: "Quantidade baixa de estoque", key: "quantidadeBaixaEstoque" },
    { label: "São permitidas encomendas", key: "permiteEncomendas" },
    { label: "Vendido individualmente", key: "vendidoIndividualmente" },
    { label: "Peso (kg)", key: "peso" },
    { label: "Comprimento (cm)", key: "comprimento" },
    { label: "Largura (cm)", key: "largura" },
    { label: "Altura (cm)", key: "altura" },
    { label: "Permitir avaliações de clientes", key: "permiteAvaliacoes" },
    { label: "Nota da compra", key: "notaCompra" },
    { label: "Preço promocional", key: "precoPromocional" },
    { label: "Preço", key: "preco" },
    { label: "Categorias", key: "categorias" },
    { label: "Tags", key: "tags" },
    { label: "Classe de entrega", key: "classeEntrega" },
    { label: "Imagens", key: "imagens" },
    { label: "Limite de downloads", key: "limiteDownloads" },
    { label: "Dias para expirar o download", key: "diasExpiracaoDownload" },
    { label: "Ascendente", key: "ascendente" },
    { label: "Grupo de produtos", key: "grupoProdutos" },
    { label: "Upsells", key: "upsells" },
    { label: "Venda cruzada", key: "vendaCruzada" },
    { label: "URL externa", key: "urlExterna" },
    { label: "Texto do botão", key: "textoBotao" },
    { label: "Posição", key: "posicao" },
    { label: "GTIN8", key: "gtin8" },
    { label: "GTIN12 / UPC", key: "gtin12" },
    { label: "GTIN13 / EAN", key: "gtin13" },
    { label: "GTIN14 / ITF-14", key: "gtin14" },
    { label: "ISBN", key: "isbn" },
    { label: "MPN", key: "mpn" },
    { label: "Nome do atributo 1", key: "att1Name" },
    { label: "Valores do atributo 1", key: "att1Values" },
    { label: "Nome do atributo 2", key: "att2Name" },
    { label: "Valores do atributo 2", key: "att2Values" },
    { label: "Nome do atributo 3", key: "att3Name" },
    { label: "Valores do atributo 3", key: "att3Values" },
  ];

  const substituirSiglasMalha = (malha) => {
    const siglas = {
      "Economica": "QC",
      "Padrão": "MQ",
      "Prime": "PM"
    };
    return siglas[malha] || malha;
  };

  const substituirSiglasCor = (cor) => {
    const siglasCor = {
      "Branco": "BR",
      "Amarelo canário": "AC",
      "Amarelo outro": "AO",
      "Laranja": "LA",
      "Vermelho": "VM",
      "Vinho": "VH",
      "Rosa pink": "RP",
      "Rosa bebê": "RB",
      "Roxo": "RX",
      "Azul royal": "AR",
      "Azul marinho": "AM",
      "Azul turquesa": "AT",
      "Verde bandeira": "VB",
      "Verde musgo": "VMU",
      "Cinza mescla": "CM"
    };
    return siglasCor[cor] || cor;
  };

  const gerarVariacoes = (produto) => {
    const { malha, cor, tamanho } = produto;
    const variacoes = [];

    malha.forEach(m => {
      cor.forEach(c => {
        tamanho.forEach(t => {
          variacoes.push({
            ...produto,
            malha: substituirSiglasMalha(m),
            cor: substituirSiglasCor(c),
            tamanho: t
          });
        });
      });
    });

    return variacoes;
  };

  const gerarVariacoesParaProdutos = (produtos) => {
    let todasVariacoes = [];

    produtos.forEach(produto => {
      todasVariacoes = todasVariacoes.concat(gerarVariacoes(produto));
    });

    return todasVariacoes;
  };

  const todasVariacoes = gerarVariacoesParaProdutos(products);

  const data = [...products, ...todasVariacoes].map((product) => ({
    id: product.id,
    tipo: product.category,
    sku: product.malha.length > 2
      ? ''
      : `${product.code}-${product.malha}-${product.cor}-${product.tamanho}`,
    name: product.name,
    publicado: '',
    emDestaque: '',
    visibilidade: '',
    descricaoCurta: '',
    descricao: '',
    dataInicioPromocao: '',
    dataFimPromocao: '',
    statusPedido: '',
    classeImposto: '',
    emEstoque: '',
    estoque: '',
    quantidadeBaixaEstoque: '',
    permiteEncomendas: '',
    vendidoIndividualmente: '',
    peso: '',
    comprimento: '',
    largura: '',
    altura: '',
    permiteAvaliacoes: '',
    notaCompra: '',
    precoPromocional: '',
    preco: '',
    categorias: '',
    tags: product.tags,
    classeEntrega: '',
    imagens: '',
    limiteDownloads: '',
    diasExpiracaoDownload: '',
    ascendente: '',
    grupoProdutos: '',
    upsells: '',
    vendaCruzada: '',
    urlExterna: '',
    textoBotao: '',
    posicao: '',
    gtin8: '',
    gtin12: '',
    gtin13: '',
    gtin14: '',
    isbn: '',
    mpn: '',
    att1Name: "Malha",
    att1Values: product.malha,
    att2Name: "Cor",
    att2Values: product.cor,
    att3Name: "Tamanho",
    att3Values: product.tamanho,
  }));

  return (
    <CSVLink data={data} headers={headers} filename={"products.csv"} className="csv-button">
      Gerar
    </CSVLink>
  );
};

export default CSVGenerator;
