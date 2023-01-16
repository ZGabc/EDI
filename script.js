function displayJSON(file)  
  fetch('file')
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
      const labels = data.slice(0, 10).map(item => item.plant_common_name); //slice bo pierwsze 10 
      const values = data.slice(0, 10).map(item => item.size_in_cm); 

      const ctx = document.getElementById('chart1').getContext('2d'); //ctx-context
      const chart = new Chart(ctx, {
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
      const lifespanCounts = data.reduce((counts, plant) => {
          counts[plant.lifespan] = (counts[plant.lifespan] || 0) + 1;
          return counts;
        }, {});

        const lab = Object.keys(lifespanCounts);
        const val = Object.values(lifespanCounts);
    
        const ctx2 = document.getElementById('chart2').getContext('2d');
        const chart2 = new Chart(ctx2, {
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


