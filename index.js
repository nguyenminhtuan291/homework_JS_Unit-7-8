let numbers = [];

// Hàm thêm số trong mảng
function addnumber(id, arr) {
  let number = +document.getElementById(id).value;
  arr.push(number);
  return number;
}

document.getElementById("btnNhapSo").onclick = function () {
  addnumber("nhapSoN", numbers);

  document.getElementById("ShowThemSo").innerHTML =
    "Mảng hiện tại : " + numbers;
};

//Bài tập 1 : Tổng số dương
document.getElementById("btnTinhTong").onclick = function () {
  let tongSoDuong = numbers.reduce((total, value) => {
    return value > 0 ? total + value : total;
  }, 0);

  document.getElementById("showTongSoDuong").innerHTML =
    "Tổng số dương là : " + tongSoDuong;
};

//Bài tập 2 : Đếm số dương
document.getElementById("btnDemSoDuong").onclick = function () {
  let demSo = numbers.reduce((SoThu, value) => {
    return value > 0 ? (SoThu += 1) : SoThu;
  }, 0);

  document.getElementById("showDemSoDuong").innerHTML =
    "Số dương là : " + demSo;
};

//Bài tập 3 : Tìm số nhỏ nhất
document.getElementById("btnTimSoNho").onclick = function () {
  let numberSmallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numberSmallest) {
      numberSmallest = numbers[i];
    }
  }

  document.getElementById("showTimSoNho").innerHTML =
    "Số nhỏ nhất là : " + numberSmallest;
};

//Bài tập 4
document.getElementById("btnTimDuongNho").onclick = function () {
  let SoDuongSmallests = [];

  let SoDuongs = checkSoDUong(numbers);
  console.log(SoDuongs);

  if (SoDuongs.length === 0) {
    SoDuongSmallests = "không có số dương nào";
  } else {
    SoDuongSmallests = SoDuongs[0];
    for (let i = 0; i < SoDuongs.length; i++) {
      if (SoDuongs[i] < SoDuongSmallests) {
        SoDuongSmallests = SoDuongs[i];
      }
    }
  }

  // hàm kiểm tra số dương
  function checkSoDUong(arr) {
    let soDuong = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        soDuong.push(arr[i]);
      }
    }
    return soDuong;
  }

  document.getElementById("showTimDuongNho").innerHTML =
    "Số dương nhỏ nhất là : " + SoDuongSmallests;
};

//Bài tập 5
document.getElementById("btnTimSoChan").onclick = function () {
  let soChans = numbers.filter((value) => {
    return value % 2 === 0;
  });
  console.log(soChans);
  let SearchSoChanLast = [];
  if (soChans.length === 0) {
    SearchSoChanLast = -1;
  } else {
    SearchSoChanLast = soChans[soChans.length - 1];
  }

  document.getElementById("showTimSochan").innerHTML =
    "Số chẵn cuối cùng là : " + SearchSoChanLast;
};

//Bài tập 6
document.getElementById("btnDoiCho").onclick = function () {
  let location1 = +document.getElementById("nhapSoLocation1").value;
  let location2 = +document.getElementById("nhapSoLocation2").value;

  let newnumbers = [...numbers];
    
  let tem = newnumbers[location1];
  newnumbers[location1] = newnumbers[location2];
  newnumbers[location2] = tem;

  document.getElementById("showDoiCho").innerHTML = newnumbers;
};

//Bài tập 7
document.getElementById("btnSortTang").onclick = function () {
  let sapSepArrs = numbers.sort((a, b) => a - b);

  document.getElementById("showSortTang").innerHTML =
    "Kết quả là : " + sapSepArrs;
};

//Bài tập 8
document.getElementById("btnSNTfirst").onclick = function () {
  let soNguyenTo = "";

  for (let i = 0; i < numbers.length; i++) {
    let kiemTraSNT = checkSNT(numbers[i]);
    if (kiemTraSNT && numbers[i] > 1) {
      soNguyenTo = numbers[i];
      break;
    } else {
      soNguyenTo = "-1";
    }
  }

  function checkSNT(number) {
    let soNguyenTo = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        soNguyenTo = false;
        break;
      }
    }
    return soNguyenTo;
  }

  document.getElementById("showSNTfirst").innerHTML =
    "Số nguyên tố đầu tiên là : " + soNguyenTo;
};

//Bài tập 9
let numBai9s = [];
document.getElementById("btnInput9").onclick = function () {
  addnumber("nhapSoB9", numBai9s);
  document.getElementById("showArrB9").innerHTML = numBai9s;
};
document.getElementById("btnDemSoNguyen").onclick = function () {
  let dem = 0;
  for (let i = 0; i < numBai9s.length; i++) {
    let checkSoNguyen = Number.isInteger(numBai9s[i]);
    if (checkSoNguyen) {
      dem++;
    }
  }

  document.getElementById("showDemSoNguyen").innerHTML =
    "Số nguyên trong mảng là : " + dem;
};

//Bài tập 10
document.getElementById("btnSoSanh").onclick = function () {
  let soDuong = 0;
  let soAm = 0;
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      soDuong++;
    }
    if (numbers[i] < 0) {
      soAm++;
    }
  }
  if (soDuong > soAm) {
    result = "Số dương > Số âm";
  } else if (soDuong < soAm) {
    result = "Số dương < Số âm";
  } else {
    result = "Số âm = Số dương";
  }

  document.getElementById("showSoSanh").innerHTML = result;
};