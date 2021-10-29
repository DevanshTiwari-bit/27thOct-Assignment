const divContainer = document.getElementById("div_container");
fetch('https://restcountries.com/v3.1/all').then((data)=>{
    return data.json();
}).then((data)=>{
    let data1="";
    data.map((values)=>{
        var n = values.name.common;
        data1+=`<table>
        <tr class="row col-lg-4"> 
          <td class="col-sm-12">
      <div class="card">
        <h5 class="card-header">${values.name.common}</h5>
          <img src=${values.flags.png} class="card-img-top" alt="flag1">
          <p class="cardbs">Capital:${values.capital}</p>
          <p class="cardbs">Region:${values.region}</p>
          <p class="cardbs">Area:${values.area}</p><br>
          <p class="cardbs"><button id="btn" onclick="getpopupdata('${n}')" class="btn">Weather</button></p>
        </div>
      </td>
     </tr>
      </table>`;
      
    });
    document.getElementById("container").innerHTML=data1;

    function getdata(data1) {
        showData(data1);
    }

}).catch((err)=>{
    console.log(err);
});


function getpopupdata(values){
    document.getElementById('popout').style.display='block';
    document.getElementById('container').style.opacity='0.7';
   const api="https://api.openweathermap.org/data/2.5/weather?q="+values+"&appid=25c9eb1e23d51a618a9863c7771bcbf0";
   fetch(api).then(response=>response.json()).then((data)=>{
                let n=data.name;
                let h=data.main['temp'];
                let w=data.wind['speed'];
                let m=data.main['humidity'];
                document.getElementById("span_county_name").innerHTML=n;
                document.getElementById("span_humidity").innerHTML=m;
                document.getElementById("span_Wind_Speed").innerHTML=w;
                document.getElementById("span_country_temp").innerHTML=h;
   }).catch(err=>{
       alert(err);
   })
}
document.getElementById('closeBtn').addEventListener('click',()=>{
    document.getElementById('popout').style.display='none';
})