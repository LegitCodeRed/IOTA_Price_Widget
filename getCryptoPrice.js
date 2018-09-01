function getCrypto(currency) {
    let url = "https://min-api.cryptocompare.com/data/price?fsym=IOT&tsyms=" + currency;
    let data = getData(url);
    data = data.replace( /^\D+/g, '',);
    data = data.substring(0, data.length - 1);
    data = "Price: " + data + " " + currency;
    $("#pricing").text(data);
    function getData(cUrl)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", cUrl, false );
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }
}