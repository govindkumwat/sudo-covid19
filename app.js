$(document).ready(function(){
    init() 
function init(){
        var url = "https://api.covid19api.com/summary"
        var data = ''
        $.get(url,function(data){
            console.log(data)
            data = ` 
            <div class="container">
            <div class="totalcases">
            <label for="data">Total Confirmed Cases</label>
            <p id="totalcases">${ data.Global.TotalConfirmed}</p>
          </div>
    
          <div class="NewConfirmed">
            <label for="data">New Confirmed</label>
            <p id="totalcases">${data.Global.NewConfirmed}</p>
          </div>

          <div class="NewDeaths">
          <label for="data">New Deaths</label>
          <p id="totalcases">${data.Global.NewDeaths}</p>
          </div>

          <div class="TotalDeaths">
        <label for="data">Total Deaths</label>
        <p id="totalcases">${data.Global.TotalDeaths}</p>
      </div>

      <div class="NewRecoverd">
        <label for="data">New Recovered</label>
        <p id="totalcases">${data.Global.NewRecovered}</p>
      </div>

      <div class="TotalRecoverd">
        <label for="data">Total Recovered</label>
        <p id="totalcases">${data.Global.TotalRecovered}</p>
      </div>

      </div>


            `

            $("#card").html(data)
        })
}

})






fetch('https://api.covid19api.com/summary')
.then(response => response.json())
.then(data => rendercountries(data.Countries))
    
    
    
    function rendercountries(data) {

    console.log(data)

    if(data.length > 0){
        var temp = "";

        data.forEach((u)=>{
            temp +="<tr>";
            temp +="<td>"+u.Country +"</td>"
            temp +="<td>"+u.NewConfirmed +"</td>"
            temp +="<td>"+u.NewDeaths +"</td>"
            temp +="<td>"+u.NewRecovered +"</td>"
            temp +="<td>"+u.TotalConfirmed +"</td>"
            temp +="<td>"+u.TotalDeaths +"</td>"
            temp +="<td>"+u.TotalRecovered +"</td></tr>"
        })
        document.getElementById("data").innerHTML = temp;

    }

}




























      
      
    