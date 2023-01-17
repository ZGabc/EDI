function displayJSON(file){
  fetch(file)
    .then(response => response.json())
    .then(data => { //data to wszystkie dane z api w formacie json
      let tableData = '';

      data.map(values => { //dostajemy sie do kazdego elementu z api
        tableData += `<tr>
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

      document.getElementById('table-body').innerHTML = tableData;

      //chart1
      
      
      let labels = data.slice(0, 10).map(item => item.plant_common_name); //slice bo pierwsze 10 
      let values = data.slice(0, 10).map(item => item.size_in_cm); 

      let ctx = document.getElementById('chart1').getContext('2d'); //ctx-context
      if (chart1!=null) {
        chart1.destroy();
      }
      chart1 = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Size in cm',
            data: values
          }]
        }
      });

      // chart2
      let chart2;
     
      
      let lifespanCounts = data.reduce((counts, plant) => {
          counts[plant.lifespan] = (counts[plant.lifespan] || 0) + 1;
          return counts;
        }, {});

        let lab = Object.keys(lifespanCounts);
        let val = Object.values(lifespanCounts);
    
        let ctx2 = document.getElementById('chart2').getContext('2d');
        if (chart2!=null) {
        chart2.destroy();
        }
        chart2 = new Chart(ctx2, {
          type: 'doughnut',
          data: {
            labels: lab,
            datasets: [{
              label: 'Plant Count',
              data: val,
            }]
          }
        });
    });
};
  


