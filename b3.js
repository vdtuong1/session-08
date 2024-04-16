function calculateArea(hinhHoc) {
    if (hinhHoc.hasOwnProperty('sideLength')) {

        return hinhHoc.sideLength * hinhHoc.sideLength;
    }

    if (hinhHoc.hasOwnProperty('radius')) {

        return Math.PI * hinhHoc.radius * hinhHoc.radius;
    }

    return null;
}

const hinhVuong = { loai: 'vuong', sideLength: 5 };
console.log(calculateArea(hinhVuong));

const hinhTron = { loai: 'tron', radius: 3 };
console.log(calculateArea(hinhTron));
