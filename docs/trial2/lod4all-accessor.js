function getSearchBankByKeyword()
{
   var sparql_query = `
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX l4a-fin: <http://lod4all.net/ontology/financial/>

SELECT distinct ?uri ?name WHERE{
    ?uri a l4a-fin:FidicOffice .
    ?uri skos:prefLabel ?name .
    FILTER regex(str(?name), "%KEYWORD%")
}
   `
   return sparql_query;
}

function searchURIByKeyword()
{
    $('#entities-search-result').empty();
    $('#status').text("Searching...");

    var keyword_val = document.getElementById("keyword").value.trim();
    var sparql_val = getSearchBankByKeyword().trim();
    sparql_val = sparql_val.replace(/%KEYWORD%/g, keyword_val);

    var lfasparql = new LFASparql();
    lfasparql.executeSparql({
        sparql: sparql_val,
        success: successRequest,
        error: errorRequest
    });
}

function successRequest(data)
{
    $('#status').text("Done.");

    var table_elem = $('<table>');
    table_elem.attr('class', 'table table-striped table-bordered');

    var thead = $('<thead>');
    var tr = $('<tr>');
    var th = $('<th>');
    th.text('URI');
    tr.append(th);
    var th = $('<th>');
    th.text('Label');
    tr.append(th);
    thead.append(tr);
    table_elem.append(thead);

    var tbody = $('<tbody>');
 
    for(var i = 0; i < data.length; i++) {
        var items = data[i];
	var subject_val = items["uri"]["value"];
        var object_val = items["name"]["value"];

        var tr = $('<tr>');
        var td = $('<td>');
	var a_tag = $('<a>');
	    a_tag.attr('href','javascript:void(0);');
	    a_tag.attr('onclick','updateGadgets("'+subject_val+'");');
	    a_tag.text(subject_val);
            td.append(a_tag);
            tr.append(td);
        var td = $('<td>');
            td.text(object_val);
            tr.append(td);
            tbody.append(tr);
    }

    table_elem.append(tbody);
    $('#entities-search-result').append(table_elem);
}

function errorRequest(jqXHR, textStatus, errorThrown) {
    console.log( 'ERROR', jqXHR, textStatus, errorThrown );
    $('#status').text("Error.");
}
