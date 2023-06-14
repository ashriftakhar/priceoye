export const data = [
    {
        image :"/images/redmibuds.webp",
        price: " 6,049",
        title : "Redmi Buds 4 Lite",
        discount: "Rs 65.49",
        id :1, 
        rating:3
},
{
    image :"/images/m10buds.webp",
    price: " 1,249",
    title : "M 10 TWS Wireless Bluetooth Earbuds",
    discount: "Rs 65.49",
    id :2
},
{
    image :"/images/qcyt20buds.webp",
    price: " 6,049",
    title : "QCT T20 AilyPods",
    discount: "Rs 65.49",
    id :3
},
{
    image :"/images/m20twsbuds.webp",
    price: " 6,049",
    title : "M 20 TWS Wireless Bluetooth Earbuds",
    discount: "Rs 65.49",
    id :4
},{
    image :"/images/redmibuds.webp",
    price: " 6,049",
    title : "Redmi Buds 4 Lite",
    discount: "Rs 65.49",
    id :5
},
{
    image :"/images/qcyt20buds.webp",
    price: " 6,049",
    title : "Redmi Buds 4 Lite",
    discount: "Rs 65.49",
    id: 6
},
{
    image :"/images/redmibuds.webp",
    price: " 6,049",
    title : "Redmi Buds 4 Lite",
    discount: "Rs 65.49",
    id : 7
},
{
    image :"/images/m20twsbuds.webp",
    price: " 6,049",
    title : "Redmi Buds 4 Lite",
    discount: "Rs 65.49",
    id : 8
},
{
    image :"/images/redmibuds.webp",
    price: " 6,049",
    title : "M 20 TWS Wireless Bluetooth Earbuds",
    discount: "Rs 65.49",
    id : 9
},
{
    image :"/images/m10buds.webp",
    price: " 6,049",
    title : "Redmi Buds 4 Lite",
    discount: "Rs 65.49",
    id :10
}

];




export const Bestseller = [
 
    {
        image :"/images/a13.webp",
        price: " 51,900 ",
        title : "Samsung Galaxy A 13",
        discount: " 51,900 ",
        id:12
    },
    {
        image :"/images/a13.webp",
        price: " 51,900 ",
        title : "Samsung Galaxy A 13",
        discount: " 51,900 ",
        id:13
    },
    {
        image :"/images/a13.webp",
        price: " 51,900 ",
        title : "Samsung Galaxy A 13",
        discount: " 51,900 ",
        id:13
    },
    {
        image :"/images/a13.webp",
        price: " 51,900 ",
        title : "Samsung Galaxy A 13",
        discount: " 51,900 ",
        id:14
    }
]


export const getProduct= (id) => {
    let product =  data.find(p=>{
        return p.id ==id 
     })
     return product
}

export const getBestSeller = (id) =>{
    let item = Bestseller.find(p=>{
        return p.id === id
    })
    return item
}

export const cart = []


// export const addToCart = (item)=>{
//     cart.push(item)
   
// }