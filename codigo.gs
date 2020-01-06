function getFundamentus(codigo){
     var url = "https://www.fundamentus.com.br" + "/detalhes.php?papel="+ codigo;
  
  var options =
      {
        "method"  : "GET",   
        "followRedirects" : true,
        "muteHttpExceptions": true,
        "Accept":"application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        "Connection": "keep-alive",
        "Cookie": "_fbp=fb.2.1577453084773.1299742631; __utmz=138951332.1577804233.7.6.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utma=138951332.1744169057.1577453085.1577804233.1577810372.8",
        "Host": "www.fundamentus.com.br",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36"
      
     };
    
  var html = UrlFetchApp.fetch(url, options).getContentText();
  
  html = pegarApenasATabela(html);
  
  html = retirarTags(html);
  
  html = html.split("\n");
  
  var dadosDoPapel = {
    "papel": html[1].substring(5),
    "cotacao": html[2].substring(7),
    "tipoDeAcao": html[3].substring(4),
    "dataUltimaCotacao": html[4].substring(10),
    "menorCotacaoNasUltimas52Semanas": html[6].substring(8),
    "setor": html[7].substring(5),
    "maiorCotacaoNasUltimas52Semanas": html[8].substring(8),
    "subSetor": html[9].substring(8),
    "valorDeMercado": html[11].substring(14),
    "valorDaFirma": html[13].substring(12),
    "pl": html[15].substring(3),
    "lpa": html[16].substring(3, (html[16].indexOf("M"))),
    "pvp": html[17].substring(4),
    "vpa": html[18].substring(3, (html[18].indexOf("d"))),
    "pEbit": html[19].substring(6),
    "margBruta": html[20].substring(10, (html[20].indexOf("%")+1)),
    "margEbit": html[22].substring(9, (html[22].indexOf("%")+1)),
    "pAtivos":  html[23].substring(8),
    "margLiquida":  html[24].substring(12, (html[24].indexOf("%")+1)),
    "roic": html[28].substring(4, (html[28].indexOf("%")+1)),
    "divYield": html[29].substring(9),
    "roe": html[30].substring(3, (html[30].indexOf("%")+1)),
    "crescimentoReceitaLiquida": html[35].substring(12)
    
    
  };
  
  return dadosDoPapel;

}


function pegarApenasATabela(html){
  var inicio = html.indexOf("<table");
  var final = html.lastIndexOf("</table>");
  return html.substring(inicio, final);
}


function retirarTags(html){
  html = html.replace(/<[^>]*>/g, '');
  html = html.replace(/\s/g,'');
  html = html.replace(/\?/g,'\n');
  return html;
}




function papel(codigo){
  return getFundamentus(codigo)['papel'];
}
function cotacao(codigo){
  return getFundamentus(codigo)['cotacao'];
}
function tipoDeAcao(codigo){
  return getFundamentus(codigo)['tipoDeAcao'];
}
function dataUltimaCotacao(codigo){
  return getFundamentus(codigo)['dataUltimaCotacao'];
}
function menorCotacaoNasUltimas52Semanas(codigo){
  return getFundamentus(codigo)['menorCotacaoNasUltimas52Semanas'];
}
function setor(codigo){
  return getFundamentus(codigo)['setor'];
}
function maiorCotacaoNasUltimas52Semanas(codigo){
  return getFundamentus(codigo)['maiorCotacaoNasUltimas52Semanas'];
}
function subSetor(codigo){
  return getFundamentus(codigo)['subSetor'];
}
function valorDeMercado(codigo){
  return getFundamentus(codigo)['valorDeMercado'];
}
function valorDaFirma(codigo){
  return getFundamentus(codigo)['valorDaFirma'];
}
function pl(codigo){
  return getFundamentus(codigo)['pl'];
}

function lpa(codigo){
  return getFundamentus(codigo)['lpa'];
}
function pvp(codigo){
  return getFundamentus(codigo)['pvp'];
}
//deu ruim
function vpa(codigo){
  return getFundamentus(codigo)['vpa'];
}

function pEbit(codigo){  
  return getFundamentus(codigo)['pEbit'];
}

//deu ruim
function margBruta(codigo){
  return getFundamentus(codigo)['margBruta'];
}

//deu ruim
function margEbit(codigo){
  return getFundamentus(codigo)['margEbit'];
}
function pAtivos(codigo){
  return getFundamentus(codigo)['pAtivos'];
}
//deu ruim
function margLiquida(codigo){  
  return getFundamentus(codigo)['margLiquida'];
}
//deu ruim
function roic(codigo){
  return getFundamentus(codigo)['roic'];
}
function divYield(codigo){
  return getFundamentus(codigo)['divYield'];
}
//deu ruim
function roe(codigo){
  return getFundamentus(codigo)['roe'];
}
function crescimentoReceitaLiquida(codigo){
  return getFundamentus(codigo)['crescimentoReceitaLiquida'];
}
