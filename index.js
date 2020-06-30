async function getapi() {
    const resp = await fetch("http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sp" +
        "ort_code=%27mlb%27&active_sw=%27Y%27&name_part=%27cespedes%25%27");
    const info = await resp.json();
    console.log(info.search_player_all.queryResults.row.league);
}

getapi();