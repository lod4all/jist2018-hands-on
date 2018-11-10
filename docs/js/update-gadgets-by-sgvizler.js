function updateGadgets(click_uri)
{
    updateGadget001(click_uri);
    updateGadget002(click_uri);
    updateGadget003(click_uri);
}

function updateGadget001(click_uri)
{
    $('#gadget-001').empty();
    var sparql_val = document.getElementById("sparql-001").value.trim();
    sparql_val = sparql_val.replace(/<%URI%>/g, '<'+click_uri+'>');
    var Q = new sgvizler.Query();
    Q.query(sparql_val)
       .endpointURL("https://lod4all.net/api/sparql")
       .endpointOutputFormat("json")
       .chartFunction("sgvizler.visualization.Table")
       .draw("gadget-001");
}

function updateGadget002(click_uri)
{
    $('#gadget-002').empty();
    var sparql_val = document.getElementById("sparql-002").value.trim();
    sparql_val = sparql_val.replace(/<%URI%>/g, '<'+click_uri+'>');
    var Q = new sgvizler.Query();
    Q.query(sparql_val)
       .endpointURL("https://lod4all.net/api/sparql")
       .endpointOutputFormat("json")
       .chartFunction("google.visualization.LineChart")
       .draw("gadget-002");
}

function updateGadget003(click_uri)
{
    $('#gadget-003').empty();
    var sparql_val = document.getElementById("sparql-003").value.trim();
    sparql_val = sparql_val.replace(/<%URI%>/g, '<'+click_uri+'>');
    var Q = new sgvizler.Query();
    Q.query(sparql_val)
       .endpointURL("https://lod4all.net/api/sparql")
       .endpointOutputFormat("json")
       .chartFunction("sgvizler.visualization.Table")
       .draw("gadget-003");
}
