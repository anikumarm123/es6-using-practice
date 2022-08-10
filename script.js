//import{n} from "./export.js"

// var n = [{
//     name: 'Muthukumar',
//     id: 1,
//     age: 22
// },
// {
//     name: 'Rahul',
//     id: 2,
//     age: 22
// },
// {
//     name: 'Mani',
//     id: 3,
//     age: 22
// },
// {
//     name: 'Chithiraivel',
//     id: 4,
//     age: 22
// }];

// var clickBtn = document.querySelector('.cl');

// var shoWBtn = document.querySelector('.show');

// var removeBtn = document.querySelector('.remove');


// clickBtn.addEventListener('click'.)

// var arr = [];

// var remove = [];

// clickBtn.addEventListener('click', () => {

//     var inputValue = document.querySelector('.ip').value;

//     arr.push(inputValue);
// })

// // console.log(arr);
// shoWBtn.addEventListener('click', showfun);

// function showfun() {

//     for (i = 0; i < arr.length; i++) {

//         //console.log(arr.indexOf(arr[i]));

//         if (arr.indexOf(arr[i]) == i) {

//             remove.push(arr[i]);

//             n.forEach(fun);

//             function fun(num) {

//                 if (arr[i] == num.id) {

//                     console.log(num);
//                 }
//             }

//         }
//         else {
//             console.log('Already Existed');
//         }
//     }
// }


// removeBtn.addEventListener('click',removefun);

// function removefun(){


// }

var product = [
    {
        id: 1,
        name: 'Tomato',
        Quandity: {
            unit: 1,
            name: "Kg"
        },
        price: 20
    },
    {
        id: 2,
        name: 'Potato',
        Quandity: {
            unit: 1,
            name: "Kg"
        },
        price: 30
    },
    {
        id: 3,
        name: 'Onian',
        Quandity: {
            unit: 1,
            name: "Kg"
        },
        price: 40
    },
    {
        id: 4,
        name: 'Chilli',
        Quandity: {
            unit: 1,
            name: "Kg"
        },
        price: 10
    }
];

var cartIterm = document.querySelector('.cl');

cartIterm.addEventListener('click', cart);

var item = [];

function cart() {

    var inputValue = document.querySelector('.ip').value;

    product.filter(function (n) {

        if (inputValue == n.id) {

            var duplicat = item.includes(n);

            if (duplicat == true) {

                n.Quandity.unit += 1;

                n.price = n.price * n.Quandity.unit;

            }

            else if (duplicat == false) {

                item.push(n);

            }

        }

    });
    // console.log(item);   
}

var removeBtn = document.querySelector('.remove');

removeBtn.addEventListener('click', removeitem);

function removeitem() {

    var inputValue = document.querySelector('.ip').value;

    var remove = item.filter( (data)=>{

        return parseInt(inputValue) !== data.id;
    })

    item = remove ; 
}


var showItemBtn = document.querySelector('.showitem');

showItemBtn.addEventListener('click', showcartItem);

function showcartItem() {

    console.log(item);
}

