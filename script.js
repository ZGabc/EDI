// uzyte beda promises

fetch('https://my.api.mockaroo.com/plants.json?key=13c557a0').then((data)=>{    //data to wszystkie dane z api
    return data.json();    //konwertowanie do formatu json, i do obiektu
}).then((objectData)=>{    //objectData ma dane z api skonwertowane do json
    let tableData='';
    objectData.map((values)=>{    //dostajemy sie do kazdego elementu z api
        tableData+= `<tr>
        <td>${values.plant_common_name}</td>
        <td>${values.plant_scientific_name}</td>
        <td>${values.plant_family}</td>
        <td>${values.explorers_name}</td>
        <td>${values.country}</td>
        <td>${values.color_of_flowers}</td>
        <td>${values.lifespan}</td>
        <td>${values.size_in_cm}</td>
        <td>${values.price}</td>
        </tr>`;
    });
    document.getElementById("table-body").innerHTML=tableData;
}) 

