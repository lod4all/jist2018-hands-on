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
    sparql_val = sparql_val.replace(/%URI%/g, click_uri);
    var Q = new sgvizler.Query();
    Q.query(sparql_val)
       .endpointURL("https://lod4all.net/api/sparql?token=jist2018-data")
       .endpointOutputFormat("json")
       .chartFunction("sgvizler.visualization.Table")
       .draw("gadget-001");
}

function updateGadget002(click_uri)
{
    $('#gadget-002').empty();
    var sparql_val = document.getElementById("sparql-002").value.trim();
    sparql_val = sparql_val.replace(/%URI%/g, click_uri);
    var Q = new sgvizler.Query();
    Q.query(sparql_val)
       .endpointURL("https://lod4all.net/api/sparql?token=jist2018-data")
       .endpointOutputFormat("json")
       .chartFunction("google.visualization.PieChart")
       .draw("gadget-002");
}

function updateGadget003(click_uri)
{
    $('#gadget-003').empty();
    var sparql_val = document.getElementById("sparql-003").value.trim();
    sparql_val = sparql_val..replace(/%URI%/g, click_uri);
    d3sparql.query("https://lod4all.net/api/sparql?token=jist2018-data", sparql_val, render003);
}

function render003(json) {
      var config = {
        "label_x": "P",
        "label_y": "Count",
        "var_x": "p",
        "var_y": "cnt",
        "width":  700,  // canvas width
        "height": 300,  // canvas height
        "margin":  80,  // canvas margin
        "selector": "#gadget-003"
      }
      d3sparql.barchart(json, config)
}
