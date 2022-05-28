function laugugeus() {
    document.getElementById("home").innerHTML = "Homepage";
    document.getElementById("store").innerHTML = "Store";
    document.getElementById("about").innerHTML = "About us";
    document.getElementById("servies").innerHTML = "Service";
    document.getElementById("title").innerHTML = "Featured products";
    document.getElementById("addres").innerHTML = "55 To Giang, District 1, Ho Chi Minh City";
    document.getElementById("titlee").innerHTML = "Sales";

}
function laugugevn() {
    document.getElementById("home").innerHTML = "Trang chủ";
    document.getElementById("store").innerHTML = "Cửa hàng";
    document.getElementById("about").innerHTML = "Về chúng tôi";
    document.getElementById("servies").innerHTML = "Dịch vụ";
    document.getElementById("title").innerHTML = "Sản phẩm nổi bật";
    document.getElementById("addres").innerHTML = "55 Tô Giang, Quận 1, Thành phố hồ Chí Minh";
    document.getElementById("titlee").innerHTML = "Doanh số bán hàng";

}
function descript1() {
    document.getElementById("description").innerHTML = `MIKENCO (2018) được ra đời với phong cách hướng đến sự khác biệt và chỉ những người quan tâm mới nhận
    ra. Vì vậy độ hoàn thiện sản phẩm từ thiết kế, package sản phẩm, chất liệu cho đến từng đường kim
    mũi chỉ được thương hiệu đặt lên hàng đầu`;
}
function descript2() {
    document.getElementById("description").innerHTML = `Năm 2019, MIKENCO gây ấn tượng với thị trường thời trang với dòng sản phẩm Limited cùng công nghệ thực tế ảo tăng cường AR đầu tiên tại Việt Nam, Năm đó, thương hiệu đã được rất nhiều người nổi tiếng tin dùng bởi sự khác biệt và độc quyền.`;
}
function descript3() {
    document.getElementById("description").innerHTML = `Cho đến nay, MIKENCO vẫn giới hạn sản xuất và phân phối ản phẩm với mục đích rõ ràng – chỉ làm tăng nhu cầu chứ không đáp ứng. Điều đó làm MIKENCO luôn giữ được vị trí trong lòng khách hàng và giá trị thương hiệu tại Việt Nam`;
}
function themeBlack() {
    document.getElementById('container').style.backgroundColor = 'black';
}
function themeGray() {
    document.getElementById('container').style.backgroundColor = 'white';

}


const data = {
    labels: [
        'Quần',
        'Áo',
        'Giày',
        'Balo',
        'Kính'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
        ]
    }]
};
const config = {
    type: 'polarArea',
    data: data,
    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 20
                    },

                }
            }
        }
    }
};