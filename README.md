# About this page
These materials are used in "Practical Use of a Knowledge Graph with Case Studies using Semantic Web Publishing Tools" hands-on session.
Information about this hands-on is refered a following page: http://jist2018.knowledge-graph.jp/pages/program/tutorials.html

Feel free to use/share this material.
If you have any questions, you may contact us using the LOD4ALL contact page.
The LOD4ALL contact page as following: http://lod4all.net/contact.html

# Introduction
The Federal Deposit Insurance Corporation (FDIC) is an independent agency created by the U.S. Congress to maintain stability and public confidence in the nation's financial system by insuring deposits, examining and supervising financial institutions for safety and soundness and consumer protection, and managing receiverships.

FUJITSU Laboratories have converted the FDIC data to RDF data, and have linked to DBpedia, and have published this dataset on LOD4ALL.
If you see a examples of FDIC RDF data, please check a data example section.The FDIC RDF data and DBpedia are loaded on LOD4ALL.LOD4ALL is LOD search engine that FUJITSU Laboratories developed.This engine Crawl Linked Open Data from the Web and provide a high-speed search service.

![LOD4ALL](https://user-images.githubusercontent.com/43978371/48887466-acf1a480-ee72-11e8-8034-ac9c73140822.jpg "LOD4ALL")



# Environment Setup
1.Fork hands-on materials to your account from “https://github.com/lod4all/jist2018-hands-on”

# Data example

```
<http://lod4all.net/resource/financial/fdicCert-3511> a <http://lod4all.net/ontology/financial/FdicOffice> ; 
	a <http://www.w3.org/ns/org#Organization> ; 
	<http://lod4all.net/ontology/financial/cbsaMetroFlg> "1"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/bkClass> "N"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/simsProjection> ""^^xsd:string ; 
	<http://lod4all.net/ontology/financial/csaFlg> "0"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/cbsaNo> "43620"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/cbsaMetro> "43620"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/cbsaDiv> ""^^xsd:string ; 
	<http://lod4all.net/ontology/financial/county> "Minnehaha"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/fiUninum> "2239"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/city> "Sioux Falls"^^xsd:string ; 
	…
	<http://lod4all.net/ontology/financial/fdicCert> "3511"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/simsLatitude> ""^^xsd:string ; 
	<http://lod4all.net/ontology/financial/stCnty> "46099"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/stname> "South Dakota"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/simsLongitude> ""^^xsd:string ; 
	<http://lod4all.net/ontology/financial/stAlp> "SD"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/cbsa> "Sioux Falls, SD"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/address> "101 N. Phillips Avenue"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/cbsaMicroFlg> "0"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/cbsaDivFlg> "0"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/name> "Wells Fargo Bank, National Association"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/offNum> ""^^xsd:string ; 
	<http://lod4all.net/ontology/financial/estYmd> "1870-01-01"^^xsd:string ; 
	<http://lod4all.net/ontology/financial/uninum> "2239"^^xsd:string ; 
	skos:prefLabel "Wells Fargo Bank, National Association"@en ;
  <http://xmlns.com/foaf/0.1/primaryTopic> <http://dbpedia.org/resource/Wells_Fargo> .
```

```
<http://lod4all.net/resource/financial/fdicCert-35112> <http://lod4all.net/ontology/financial/data> <http://lod4all.net/resource/financial/fdicCert-35112/2014-06-30> . 
<http://lod4all.net/resource/financial/fdicCert-35112> <http://lod4all.net/ontology/financial/data> <http://lod4all.net/resource/financial/fdicCert-35112/2007-12-31> . 
<http://lod4all.net/resource/financial/fdicCert-35112> <http://lod4all.net/ontology/financial/data> <http://lod4all.net/resource/financial/fdicCert-35112/2006-06-30> . 
<http://lod4all.net/resource/financial/fdicCert-35112> <http://lod4all.net/ontology/financial/data> <http://lod4all.net/resource/financial/fdicCert-35112/2001-12-31> . 
<http://lod4all.net/resource/financial/fdicCert-35112> <http://lod4all.net/ontology/financial/data> <http://lod4all.net/resource/financial/fdicCert-35112/2011-03-31> . 
<http://lod4all.net/resource/financial/fdicCert-35112> <http://lod4all.net/ontology/financial/data> <http://lod4all.net/resource/financial/fdicCert-35112/2011-09-30> . 
<http://lod4all.net/resource/financial/fdicCert-35112> <http://lod4all.net/ontology/financial/data> <http://lod4all.net/resource/financial/fdicCert-35112/2007-09-30> . 
<http://lod4all.net/resource/financial/fdicCert-35112> <http://lod4all.net/ontology/financial/data> <http://lod4all.net/resource/financial/fdicCert-35112/2015-03-31> . 
```

```
<http://lod4all.net/resource/financial/fdicCert-35112/2014-06-30> a <http://lod4all.net/ontology/financial/FinancialData> ; 
	<http://lod4all.net/ontology/financial/numemp> "40"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/idtrngov> "0"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/intinc> "4889"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/liab> "183372"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/eq> "34146"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/assetfor> "0"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/eqtot> "34146"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/chbal> "9004"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/asset> "217518"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/ilnfor> "0"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/intan> "2612"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/nonix> "2382"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/nonii> "533"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/date> "2014-06-30T09:00:00.000Z"^^xsd:datetime ; 
	<http://lod4all.net/ontology/financial/idtrnmu> "12598"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/dep> "175173"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/ilndom> "3056"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/depi> "150894"^^xsd:integer ; 
	<http://lod4all.net/ontology/financial/eintexp> "831"^^xsd:integer ; 
	 l4af:office <http://lod4all.net/resource/financial/fdicCert-35112> .
```

```
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix l4a-r: <http://lod4all.net/resource/> .
@prefix l4a-o: <http://lod4all.net/ontology/> .

<http://lod4all.net/graph/financial> a  <http://www.w3.org/ns/dcat#Dataset>;
	rdfs:label "金融データセット"@ja;
        rdfs:label "Financial Dataset"@en;
        <http://www.w3.org/ns/sparql-service-description#graph> <http://lod4all.net/graph/financial>;
        <http://purl.org/dc/terms/license> <https://creativecommons.org/licenses/by/4.0> .

<http://lod4all.net/ontology/financial/FidicOffices> a <http://www.w3.org/2000/01/rdf-schema#Class>;
	a <http://www.w3.org/2002/07/owl#Class>;
	rdfs:label "会社"@ja;
        rdfs:label "Office"@en .

<http://lod4all.net/ontology/financial/FidicBranchOffice> a <http://www.w3.org/2000/01/rdf-schema#Class>;
	a <http://www.w3.org/2002/07/owl#Class>;
	rdfs:label "支店"@ja;
        rdfs:label "Branch"@en .

<http://lod4all.net/ontology/financial/FinancialDataSet> a <http://www.w3.org/2000/01/rdf-schema#Class>;
	a <http://www.w3.org/2002/07/owl#Class>;
	rdfs:label "金融データ"@ja;
        rdfs:label "Financial Data"@en .

<http://lod4all.net/ontology/financial/estYmd> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        rdfs:label "設立日"@ja;
        rdfs:label "Establishment date"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/asset> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "総資産"@ja;
        rdfs:label "Total assets"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/assetfor> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "外国の総資産"@ja;
        rdfs:label "Total assets in foreign offices"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/chbal> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "現金と、預貯金取扱金融機関の残高"@ja;
        rdfs:label "Cash & Balances due from depository institutions"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/dep> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "総預金"@ja;
        rdfs:label "Total deposits"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/depi> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "利息付き預金"@ja;
        rdfs:label "Interest-bearing deposits"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/eintexp> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "総利息費用"@ja;
        rdfs:label "Total interest expense"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/eq> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "銀行自己資本"@ja;
        rdfs:label "Bank equity capital"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/eqtot> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "総自己資本"@ja;
        rdfs:label "Total equity capital"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/idtrngov> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "米国政府とのトランザクション総額"@ja;
        rdfs:label "U.S. Government"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/idtrnmu> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "州および行政的小区域との総トランザクション総額"@ja;
        rdfs:label "States and political subdivisions in the U.S."@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/ilndom> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "国内法人ローンの利息収入"@ja;
        rdfs:label "Interest income: Domestic office loans"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/ilnfor> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "国外法人ローンの利息収入"@ja;
        rdfs:label "Interest income: Foreign office loans"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/intan> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "営業権と他の無形財産"@ja;
        rdfs:label "Goodwill and other intangibles"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/intinc> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "総利息収入"@ja;
        rdfs:label "Total interest income"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/liab> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "負債総額"@ja;
        rdfs:label "Total Liabilities"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/lnexamt> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "インサイダーローン"@ja;
        rdfs:label "Insider loans"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/nonii> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "総非金利収入"@ja;
        rdfs:label "Total noninterest income"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/nonix> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "総非金利経費"@ja;
        rdfs:label "Total noninterest expense"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .

<http://lod4all.net/ontology/financial/numemp> a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>;
        a <http://lod4all.net/ontology/financial/KPI>;
        rdfs:label "総従業員(常勤職換算)"@ja;
        rdfs:label "Total employees (full-time equivalent)"@en;
        <http://www.w3.org/2000/01/rdf-schema#range> <http://www.w3.org/2000/01/rdf-schema#Literal> .
```
