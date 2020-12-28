var districtObject = {
    taipei: [
        { id: "taipei01", district: "中正區" },
        { id: "taipei02", district: "萬華區" },
        { id: "taipei03", district: "信義區" }

    ],
    taoyuan: [
        { id: "taoyuan01", district: "桃園區" },
        { id: "taoyuan02", district: "八德區" },
        { id: "taoyuan03", district: "中壢區" }

    ],
    taichung: [
        { id: "taichung01", district: "台中區" },
        { id: "taichung02", district: "大里區" },
        { id: "taichung03", district: "清水區" }

    ]
};

// districtObject.taipei.forEach((item)=>{
//     console.log(`${item.id},${item.district}`)
// })
// districtObject.taipei.forEach((item,index)=>{
//     console.log(`${index},${item.id},${item.district}`);
// })

//------------
let arrayNames = Object.keys(districtObject);
let arrayValues = Object.values(districtObject);

console.log(arrayNames);
console.log(arrayValues);
//-----------
let cityArray = [];
let newArray = [];
districtObject.taipei.forEach((item) => {
    cityArray.push(item);
})
console.log(cityArray);

let citiesArray = [];
arrayNames.forEach(cityName => {
    //console.log("cityName" + item);
    let cityValue = districtObject[cityName];

    console.log(typeof cityValue);
    cityValue.forEach(x => {
        let city = { city: cityName, id: x.id, district: x.district }
        citiesArray.push(city);
    });
});
console.log(citiesArray);

// let newArray = [
//     { city:"taipei",id: "taipei01", district: "中正區" },
//     { city:"taipei",id: "taipei02", district: "萬華區" },
//     { city:"taipei",id: "taipei03", district: "信義區" },
//     { city:"taoyuan",id: "taoyuan01", district: "桃園區" },
//     { city:"taoyuan",id: "taoyuan02", district: "八德區" },
//     { city:"taoyuan",id: "taoyuan03", district: "中壢區" },
//     { city:"taichung",id: "taichung01", district: "台中區" },
//     { city:"taichung",id: "taichung02", district: "大里區" },
//     { city:"taichung",id: "taichung03", district: "清水區" }
// ];