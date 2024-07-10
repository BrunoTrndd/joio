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
    { label: "MPN", key: "mpn" }
  ];

  const data = products.map((product) => ({
    id: product.id,
    tipo: product.category,
    sku: product.code,
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
    tags: '',
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
    mpn: ''
  }));

  return (
    <CSVLink data={data} headers={headers} filename={"products.csv"} className="csv-button">
      Gerar
    </CSVLink>
  );
};

export default CSVGenerator;
