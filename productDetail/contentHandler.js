// CONTENTS FROM DATABASE

const productDetail = [
  {
    productImage: "../img/products/product.png",
    productName: "Product Name Goes Here",
    price: 2300,
    shopName: "Shop Name Goes Here",
    shopLink: "#",
    shopAddress: "Shop Address Goes Here",
    mapLink: "#"
  }
];

var container = document.getElementById("product");
var content = "";

productDetail.forEach(result => {
  // Construct card content
  content += `
        <div class="row justify-content-center">
        <div class="col-md-3 imgColumn">
            <img src="${result.productImage}" alt="${
    result.productName
  }" class="img-fluid">
        </div>
        <div class="col-md-6 detailColumn">
            <h3>${result.productName}</h3>
            <h6>NRs. ${result.price}</h6>
            <p>Sold by:</p>
            <a href="${result.shopLink}">
                <h4>${result.shopName}</h4>
            </a>
            <h5><i class="fa fa-map-marker"></i> ${result.shopAddress}</h5>
            <a href="${
              result.mapLink
            }"><button type="button" class="btn btn-outline-danger">See Map</button></a>
        </div>
        </div>`;
});
container.innerHTML += content;
