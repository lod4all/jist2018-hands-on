# About this page
These materials are used in "Practical Use of a Knowledge Graph with Case Studies using Semantic Web Publishing Tools" hands-on session.
Information about this hands-on is refered a following page: http://jist2018.knowledge-graph.jp/pages/program/tutorials.html

Feel free to use/share this material.
If you have any questions, you may contact us using the LOD4ALL contact page.
The LOD4ALL contact page as following: http://lod4all.net/contact.html

# Introduction
The Federal Deposit Insurance Corporation (FDIC) is an independent agency created by the U.S. Congress to maintain stability and public confidence in the nation's financial system by insuring deposits, examining and supervising financial institutions for safety and soundness and consumer protection, and managing receiverships.

FUJITSU Laboratories have converted the FDIC data to RDF data, and have linked to DBpedia, and have published this dataset on LOD4ALL.
The data exmaple is a following:

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

The FDIC RDF data and DBpedia are loaded on LOD4ALL.LOD4ALL is LOD search engine that FUJITSU Laboratories developed.This engine Crawl Linked Open Data from the Web and provide a high-speed search service.

![LOD4ALL](https://user-images.githubusercontent.com/43978371/48887466-acf1a480-ee72-11e8-8034-ac9c73140822.jpg "LOD4ALL")



# Environment Setup
