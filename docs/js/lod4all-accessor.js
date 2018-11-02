function searchURIByKeyword()
{
    $('#entities-search-result').empty();
    $('#status').text("Searching...");

    var keyword_val = document.getElementById("keyword").value.trim();
    var graph_val = "http://lod4all.net/graph/financial-data"	
    var lfasparql = new LFASparql();
    lfasparql.executeLiteral({
        async: true,
        graph: graph_val,
        query: keyword_val,
        offset: 0,
        size: 50,
        success: successKeywordRequest,
        error: errorRequest
    });
}

function successKeywordRequest(data)
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

    var tr = $('<tr>');
    var td = $('<td>');
    var a_tag = $('<a>');
    a_tag.attr('href','javascript:void(0);');
    a_tag.attr('onclick','updateGadgets("http://lod4all.net/resource/financial/fdicCert-3511");');
    a_tag.text("http://lod4all.net/resource/financial/fdicCert-3511");
    td.append(a_tag);
    tr.append(td);
    var td = $('<td>');
    td.text(object_val);
    tr.append(td);
    tbody.append(tr);

    /**
    triples = data["triples"];
    for (var i = 0; i < triples.length; i++) {
        var graph_val = triples[i]["graph"];
        if("http://lod4all.net/graph/financial-data" == graph_val){
            var subject_val = triples[i]["subject"];
            var object_val = triples[i]["object"];

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
    }
    **/

    table_elem.append(tbody);
    $('#entities-search-result').append(table_elem);
}

function errorRequest(jqXHR, textStatus, errorThrown) {
    console.log( 'ERROR', jqXHR, textStatus, errorThrown );
    $('#status').text("Error.");
}

