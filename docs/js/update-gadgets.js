function setSgvizler()
{
    sgvizler
      .defaultEndpointURL("https://lod4all.net/api/sparql")
      .defaultChartWidth(600)
      .defaultChartHeight(400);
}

function updateGadgets(click_uri)
{
    setSgvizler();

    updateGadget001(click_uri);
    updateGadget002(click_uri);
    updateGadget003(click_uri);
}

function updateGadget001(click_uri)
{
    $('#gadget-001').empty();
    var sparql_val = document.getElementById("sparql-001").value.trim();
    sparql_val = sparql_val.replace(/<%URI%>/g, '<'+click_uri+'>');
    d3sparql.query("https://lod4all.net/api/sparql", sparql_val, render001);
}

function render001(json) {
      var config = {
        "selector": "#gadget-001"
      };
      d3sparql.htmlhash(json, config);
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
    d3sparql.query("https://lod4all.net/api/sparql", sparql_val, render003);
}

function render003(json) {
      var config = {
        "selector": "#gadget-003"
      };
      d3sparql.htmlhash(json, config);
}
