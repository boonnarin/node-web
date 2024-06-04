document.getElementById("callab").addEventListener("click", function () {
    nonlab();
});
function nonlab() {
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var cvsex = document.querySelector('input[name="cvsex"]:checked').value;
    var cvsmk = document.querySelector('input[name="cvsmk"]:checked').value;
    var age = document.getElementById('age').value;
    //คำนวนbmi
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height_cm').value / 100;
    //sbp
    var sbp1 = parseFloat(document.getElementById('sbp1').value);
    var sbp2 = parseFloat(document.getElementById('sbp2').value);
    var sbp = ((sbp1 + sbp2) / 2);

    //age
    var age = document.getElementById('age').value;

    // คำนวณค่า BMI
    var bmi = (weight / (height * height)).toFixed(2);
    var bmi2 = bmi;

    //หยุดการทำงานหากข้อมูลไม่ครบ
    if (!cvsex || !cvsmk || !weight || !height || !sbp1 || !sbp2 || !age) {
        alert("โปรดกรอกข้อมูลให้ครบทุกช่อง");
        return; // หยุดการทำงานที่นี่
        window.location.reload(); // รีโหลดหน้าเว็บ

    }
    //กำหนดอายุ
    if (age < 18) {
        alert("โปรดกรอกอายุให้อยู่ใครช่วงที่กำหนด");
        return;
    } else if (age > 100) {
        alert("โปรดกรอกอายุให้อยู่ใครช่วงที่กำหนด");
        return;
    }


    var cvbmi;
    if (bmi < 20) {
        cvbmi = 1;
    } else if (bmi >= 20 && bmi < 25) {
        cvbmi = 2;
    } else if (bmi >= 25 && bmi < 30) {
        cvbmi = 3;
    } else if (bmi >= 30 && bmi < 35) {
        cvbmi = 4;
    } else if (bmi >= 35) {
        cvbmi = 5;
    } else {
        cvbmi = "ไม่ตรงเงื่อนไข";
    }
    //หาค่า cvsbp
    var cvsbp;
    if (sbp < 120) {
        cvsbp = 1;
    } else if (sbp >= 120 && sbp < 140) {
        cvsbp = 2;
    } else if (sbp >= 140 && sbp < 160) {
        cvsbp = 3;
    } else if (sbp >= 160 && sbp < 180) {
        cvsbp = 4;
    } else if (sbp >= 180) {
        cvsbp = 5;
    } else {
        cvsbp = "ไม่ตรงเงื่อนไข";
    }
    //หาค่า cvage
    var cvage;
    if (age >= 40 && age < 45) {
        cvage = 1;
    } else if (age >= 45 && age < 50) {
        cvage = 2;
    } else if (age >= 50 && age < 55) {
        cvage = 3;
    } else if (age >= 55 && age < 60) {
        cvage = 4;
    } else if (age >= 60 && age < 65) {
        cvage = 5;
    } else if (age >= 65 && age < 70) {
        cvage = 6;
    } else if (age >= 70 && age < 75) {
        cvage = 7;
    } else {
        cvage = "ไม่ตรงเงื่อนไข";
    }

    var stataCodea;
    // เปรียบเทียบค่า Age1-7
    if (cvsex == 0 && cvsmk == 0 && cvsbp == 1 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 1;
        } else if (cvage == 2 || cvage == 3) {
            stataCodea = 2;
        } else if (cvage == 4) {
            stataCodea = 3;
        } else if (cvage == 5) {
            stataCodea = 5;
        } else if (cvage == 6) {
            stataCodea = 7;
        } else if (cvage == 7) {
            stataCodea = 10;
        }
    }//เปรียบเทียบค่า bmi2-5
    else if (cvsex == 0 && cvsmk == 0 && cvsbp == 1 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 1;
        } else if (cvage == 2 || cvage == 3) {
            stataCode = 2;
        } else if (cvage == 4) {
            stataCodea = 3;
        } else if (cvage == 5) {
            stataCodea = 5;
        } else if (cvage == 6) {
            stataCodea = 7;
        } else if (cvage == 7) {
            stataCodea = 10;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvsbp == 1 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 1;
        } else if (cvage == 2) {
            stataCodea = 2;
        } else if (cvage == 3) {
            stataCodea = 3;
        } else if (cvage == 4) {
            stataCodea = 4;
        } else if (cvage == 5) {
            stataCodea = 5;
        } else if (cvage == 6) {
            stataCodea = 7;
        } else if (cvage == 7) {
            stataCodea = 11;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvsbp == 1 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 1;
        } else if (cvage == 2) {
            stataCodea = 2;
        } else if (cvage == 3) {
            stataCodea = 3;
        } else if (cvage == 4) {
            stataCodea = 4;
        } else if (cvage == 5) {
            stataCodea = 5;
        } else if (cvage == 6) {
            stataCodea = 8;
        } else if (cvage == 7) {
            stataCodea = 11;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvsbp == 1 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 1;
        } else if (cvage == 2) {
            stataCodea = 2;
        } else if (cvage == 3) {
            stataCodea = 3;
        } else if (cvage == 4) {
            stataCodea = 4;
        } else if (cvage == 5) {
            stataCodea = 6;
        } else if (cvage == 6) {
            stataCodea = 8;
        } else if (cvage == 7) {
            stataCodea = 11;
        }
    }
    //เปรียบเทียบค่า sdp2 bmi1
    else if (cvsex == 0 && cvsmk == 0 && cvsbp == 2 && cvbmi == 1) {
        if (cvage == 1 || cvage == 2) {
            stataCodea = 2;
        } else if (cvage == 3) {
            stataCodea = 3;
        } else if (cvage == 4) {
            stataCodea = 4;
        } else if (cvage == 5) {
            stataCodea = 6;
        } else if (cvage == 6) {
            stataCodea = 9;
        } else if (cvage == 7) {
            stataCodea = 12;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 2 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 2;
        } else if (cvage == 2) {
            stataCodea = 2;
        } else if (cvage == 3) {
            stataCodea = 3;
        } else if (cvage == 4) {
            stataCodea = 5;
        } else if (cvage == 5) {
            stataCodea = 6;
        } else if (cvage == 6) {
            stataCodea = 9;
        } else if (cvage == 7) {
            stataCodea = 12;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvsbp == 2 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 2;
        } else if (cvage == 2) {
            stataCodea = 2;
        } else if (cvage == 3) {
            stataCodea = 3;
        } else if (cvage == 4) {
            stataCodea = 5;
        } else if (cvage == 5) {
            stataCodea = 7;
        } else if (cvage == 6) {
            stataCodea = 9;
        } else if (cvage == 7) {
            stataCodea = 13;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 2 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 2;
        } else if (cvage == 2) {
            stataCodea = 3;
        } else if (cvage == 3) {
            stataCodea = 4;
        } else if (cvage == 4) {
            stataCodea = 5;
        } else if (cvage == 5) {
            stataCodea = 7;
        } else if (cvage == 6) {
            stataCodea = 10;
        } else if (cvage == 7) {
            stataCodea = 13;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 2 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 2;
        } else if (cvage == 2) {
            stataCodea = 3;
        } else if (cvage == 3) {
            stataCodea = 4;
        } else if (cvage == 4) {
            stataCodea = 5;
        } else if (cvage == 5) {
            stataCodea = 7;
        } else if (cvage == 6) {
            stataCodea = 10;
        } else if (cvage == 7) {
            stataCodea = 14;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 3 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 2;
        } else if (cvage == 2) {
            stataCodea = 3;
        } else if (cvage == 3) {
            stataCodea = 4;
        } else if (cvage == 4) {
            stataCodea = 6;
        } else if (cvage == 5) {
            stataCodea = 8;
        } else if (cvage == 6) {
            stataCodea = 11;
        } else if (cvage == 7) {
            stataCodea = 15;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 3 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 2;
        } else if (cvage == 2) {
            stataCodea = 3;
        } else if (cvage == 3) {
            stataCodea = 4;
        } else if (cvage == 4) {
            stataCodea = 6;
        } else if (cvage == 5) {
            stataCodea = 8;
        } else if (cvage == 6) {
            stataCodea = 11;
        } else if (cvage == 7) {
            stataCodea = 15;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 3 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 3;
        } else if (cvage == 3) {
            stataCodea = 5;
        } else if (cvage == 4) {
            stataCodea = 6;
        } else if (cvage == 5) {
            stataCodea = 8;
        } else if (cvage == 6) {
            stataCodea = 11;
        } else if (cvage == 7) {
            stataCodea = 16;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 3 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 4;
        } else if (cvage == 3) {
            stataCodea = 5;
        } else if (cvage == 4) {
            stataCodea = 7;
        } else if (cvage == 5) {
            stataCodea = 9
        } else if (cvage == 6) {
            stataCodea = 12;
        } else if (cvage == 7) {
            stataCodea = 16;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 3 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 4;
        } else if (cvage == 3) {
            stataCodea = 5;
        } else if (cvage == 4) {
            stataCodea = 7;
        } else if (cvage == 5) {
            stataCodea = 9;
        } else if (cvage == 6) {
            stataCodea = 12;
        } else if (cvage == 7) {
            stataCodea = 17;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 4 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 4;
        } else if (cvage == 3) {
            stataCodea = 6;
        } else if (cvage == 4) {
            stataCodea = 8;
        } else if (cvage == 5) {
            stataCodea = 10;
        } else if (cvage == 6) {
            stataCodea = 13;
        } else if (cvage == 7) {
            stataCodea = 17;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 4 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 5;
        } else if (cvage == 3) {
            stataCodea = 6;
        } else if (cvage == 4) {
            stataCodea = 8;
        } else if (cvage == 5) {
            stataCodea = 10;
        } else if (cvage == 6) {
            stataCodea = 14;
        } else if (cvage == 7) {
            stataCodea = 18;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 4 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 4;
        } else if (cvage == 2) {
            stataCodea = 5;
        } else if (cvage == 3) {
            stataCodea = 6;
        } else if (cvage == 4) {
            stataCodea = 8;
        } else if (cvage == 5) {
            stataCodea = 11;
        } else if (cvage == 6) {
            stataCodea = 14;
        } else if (cvage == 7) {
            stataCodea = 19;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 4 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 4;
        } else if (cvage == 2) {
            stataCodea = 5;
        } else if (cvage == 3) {
            stataCodea = 7;
        } else if (cvage == 4) {
            stataCodea = 9;
        } else if (cvage == 5) {
            stataCodea = 11;
        } else if (cvage == 6) {
            stataCodea = 15;
        } else if (cvage == 7) {
            stataCodea = 19;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 4 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 4;
        } else if (cvage == 2) {
            stataCodea = 5;
        } else if (cvage == 3) {
            stataCodea = 7;
        } else if (cvage == 4) {
            stataCodea = 9;
        } else if (cvage == 5) {
            stataCodea = 12;
        } else if (cvage == 6) {
            stataCodea = 15;
        } else if (cvage == 7) {
            stataCodea = 20;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 5 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 5;
        } else if (cvage == 2) {
            stataCodea = 6;
        } else if (cvage == 3) {
            stataCodea = 8;
        } else if (cvage == 4) {
            stataCodea = 19;
        } else if (cvage == 5) {
            stataCodea = 13;
        } else if (cvage == 6) {
            stataCodea = 16;
        } else if (cvage == 7) {
            stataCodea = 21;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 5 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 5;
        } else if (cvage == 2) {
            stataCodea = 6;
        } else if (cvage == 3) {
            stataCodea = 8;
        } else if (cvage == 4) {
            stataCodea = 10;
        } else if (cvage == 5) {
            stataCodea = 13;
        } else if (cvage == 6) {
            stataCodea = 17;
        } else if (cvage == 7) {
            stataCodea = 22;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 5 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 5;
        } else if (cvage == 2) {
            stataCodea = 7;
        } else if (cvage == 3) {
            stataCodea = 8;
        } else if (cvage == 4) {
            stataCodea = 11;
        } else if (cvage == 5) {
            stataCodea = 14;
        } else if (cvage == 6) {
            stataCodea = 18;
        } else if (cvage == 7) {
            stataCodea = 22;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 5 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 5;
        } else if (cvage == 2) {
            stataCodea = 7;
        } else if (cvage == 3) {
            stataCodea = 9;
        } else if (cvage == 4) {
            stataCodea = 11;
        } else if (cvage == 5) {
            stataCodea = 14;
        } else if (cvage == 6) {
            stataCodea = 18;
        } else if (cvage == 7) {
            stataCodea = 23;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvsbp == 5 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 6;
        } else if (cvage == 2) {
            stataCodea = 7;
        } else if (cvage == 3) {
            stataCodea = 9;
        } else if (cvage == 4) {
            stataCodea = 12;
        } else if (cvage == 5) {
            stataCodea = 15;
        } else if (cvage == 6) {
            stataCodea = 19;
        } else if (cvage == 7) {
            stataCodea = 24;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 1 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 4;
        } else if (cvage == 3) {
            stataCodea = 5;
        } else if (cvage == 4) {
            stataCodea = 6;
        } else if (cvage == 5) {
            stataCodea = 8;
        } else if (cvage == 6) {
            stataCodea = 11;
        } else if (cvage == 7) {
            stataCodea = 14;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 1 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 4;
        } else if (cvage == 3) {
            stataCodea = 4;
        } else if (cvage == 4) {
            stataCodea = 7;
        } else if (cvage == 5) {
            stataCodea = 9;
        } else if (cvage == 6) {
            stataCodea = 11;
        } else if (cvage == 7) {
            stataCodea = 15;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 1 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 4;
        } else if (cvage == 3) {
            stataCodea = 5;
        } else if (cvage == 4) {
            stataCodea = 7;
        } else if (cvage == 5) {
            stataCodea = 9;
        } else if (cvage == 6) {
            stataCodea = 12;
        } else if (cvage == 7) {
            stataCodea = 15;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 1 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 4;
        } else if (cvage == 3) {
            stataCodea = 6;
        } else if (cvage == 4) {
            stataCodea = 7;
        } else if (cvage == 5) {
            stataCodea = 10;
        } else if (cvage == 6) {
            stataCodea = 12;
        } else if (cvage == 7) {
            stataCodea = 16;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 1 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 4;
        } else if (cvage == 2) {
            stataCodea = 5;
        } else if (cvage == 3) {
            stataCodea = 6;
        } else if (cvage == 4) {
            stataCodea = 8;
        } else if (cvage == 5) {
            stataCodea = 10;
        } else if (cvage == 6) {
            stataCodea = 13;
        } else if (cvage == 7) {
            stataCodea = 17;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 2 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 4;
        } else if (cvage == 2) {
            stataCodea = 5;
        } else if (cvage == 3) {
            stataCodea = 6;
        } else if (cvage == 4) {
            stataCodea = 8;
        } else if (cvage == 5) {
            stataCodea = 11;
        } else if (cvage == 6) {
            stataCodea = 14;
        } else if (cvage == 7) {
            stataCodea = 17;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 2 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 4;
        } else if (cvage == 2) {
            stataCodea = 5;
        } else if (cvage == 3) {
            stataCodea = 7;
        } else if (cvage == 4) {
            stataCodea = 9;
        } else if (cvage == 5) {
            stataCodea = 11;
        } else if (cvage == 6) {
            stataCodea = 14;
        } else if (cvage == 7) {
            stataCodea = 18;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 2 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 4;
        } else if (cvage == 2) {
            stataCodea = 6;
        } else if (cvage == 3) {
            stataCodea = 7;
        } else if (cvage == 4) {
            stataCodea = 9;
        } else if (cvage == 5) {
            stataCodea = 12;
        } else if (cvage == 6) {
            stataCodea = 15;
        } else if (cvage == 7) {
            stataCodea = 19;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 2 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 5;
        } else if (cvage == 2) {
            stataCodea = 6;
        } else if (cvage == 3) {
            stataCodea = 8;
        } else if (cvage == 4) {
            stataCodea = 10;
        } else if (cvage == 5) {
            stataCodea = 12;
        } else if (cvage == 6) {
            stataCodea = 15;
        } else if (cvage == 7) {
            stataCodea = 19;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 2 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 5;
        } else if (cvage == 2) {
            stataCodea = 6;
        } else if (cvage == 3) {
            stataCodea = 8;
        } else if (cvage == 4) {
            stataCodea = 10;
        } else if (cvage == 5) {
            stataCodea = 13;
        } else if (cvage == 6) {
            stataCodea = 16;
        } else if (cvage == 7) {
            stataCodea = 20;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 3 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 5;
        } else if (cvage == 2) {
            stataCodea = 7;
        } else if (cvage == 3) {
            stataCodea = 9;
        } else if (cvage == 4) {
            stataCodea = 11;
        } else if (cvage == 5) {
            stataCodea = 13;
        } else if (cvage == 6) {
            stataCodea = 17;
        } else if (cvage == 7) {
            stataCodea = 21;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 3 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 6;
        } else if (cvage == 2) {
            stataCodea = 7;
        } else if (cvage == 3) {
            stataCodea = 9;
        } else if (cvage == 4) {
            stataCodea = 11;
        } else if (cvage == 5) {
            stataCodea = 14;
        } else if (cvage == 6) {
            stataCodea = 18;
        } else if (cvage == 7) {
            stataCodea = 22;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 3 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 6;
        } else if (cvage == 2) {
            stataCodea = 8;
        } else if (cvage == 3) {
            stataCodea = 10;
        } else if (cvage == 4) {
            stataCodea = 12;
        } else if (cvage == 5) {
            stataCodea = 15;
        } else if (cvage == 6) {
            stataCodea = 18;
        } else if (cvage == 7) {
            stataCodea = 22;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 3 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 7;
        } else if (cvage == 2) {
            stataCodea = 8;
        } else if (cvage == 3) {
            stataCodea = 10;
        } else if (cvage == 4) {
            stataCodea = 13;
        } else if (cvage == 5) {
            stataCodea = 16;
        } else if (cvage == 6) {
            stataCodea = 19;
        } else if (cvage == 7) {
            stataCodea = 23;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 3 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 7;
        } else if (cvage == 2) {
            stataCodea = 9;
        } else if (cvage == 3) {
            stataCodea = 11;
        } else if (cvage == 4) {
            stataCodea = 13;
        } else if (cvage == 5) {
            stataCodea = 16;
        } else if (cvage == 6) {
            stataCodea = 20;
        } else if (cvage == 7) {
            stataCodea = 24;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 4 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 8;
        } else if (cvage == 2) {
            stataCodea = 9;
        } else if (cvage == 3) {
            stataCodea = 11;
        } else if (cvage == 4) {
            stataCodea = 14;
        } else if (cvage == 5) {
            stataCodea = 17;
        } else if (cvage == 6) {
            stataCodea = 21;
        } else if (cvage == 7) {
            stataCodea = 25;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 4 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 8;
        } else if (cvage == 2) {
            stataCodea = 10;
        } else if (cvage == 3) {
            stataCodea = 12;
        } else if (cvage == 4) {
            stataCodea = 15;
        } else if (cvage == 5) {
            stataCodea = 18;
        } else if (cvage == 6) {
            stataCodea = 22;
        } else if (cvage == 7) {
            stataCodea = 26;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 4 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 9;
        } else if (cvage == 2) {
            stataCodea = 11;
        } else if (cvage == 3) {
            stataCodea = 13;
        } else if (cvage == 4) {
            stataCodea = 15;
        } else if (cvage == 5) {
            stataCodea = 19;
        } else if (cvage == 6) {
            stataCodea = 22;
        } else if (cvage == 7) {
            stataCodea = 27;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 4 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 9;
        } else if (cvage == 2) {
            stataCodea = 11;
        } else if (cvage == 3) {
            stataCodea = 14;
        } else if (cvage == 4) {
            stataCodea = 16;
        } else if (cvage == 5) {
            stataCodea = 20;
        } else if (cvage == 6) {
            stataCodea = 23;
        } else if (cvage == 7) {
            stataCodea = 28;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 4 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 10;
        } else if (cvage == 2) {
            stataCodea = 12;
        } else if (cvage == 3) {
            stataCodea = 14;
        } else if (cvage == 4) {
            stataCodea = 17;
        } else if (cvage == 5) {
            stataCodea = 21;
        } else if (cvage == 6) {
            stataCodea = 24;
        } else if (cvage == 7) {
            stataCodea = 29;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 5 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 11;
        } else if (cvage == 2) {
            stataCodea = 13;
        } else if (cvage == 3) {
            stataCodea = 15;
        } else if (cvage == 4) {
            stataCodea = 18;
        } else if (cvage == 5) {
            stataCodea = 21;
        } else if (cvage == 6) {
            stataCodea = 25;
        } else if (cvage == 7) {
            stataCodea = 30;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 5 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 11;
        } else if (cvage == 2) {
            stataCodea = 14;
        } else if (cvage == 3) {
            stataCodea = 16;
        } else if (cvage == 4) {
            stataCodea = 19;
        } else if (cvage == 5) {
            stataCodea = 22;
        } else if (cvage == 6) {
            stataCodea = 26;
        } else if (cvage == 7) {
            stataCodea = 31;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 5 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 12;
        } else if (cvage == 2) {
            stataCodea = 14;
        } else if (cvage == 3) {
            stataCodea = 17;
        } else if (cvage == 4) {
            stataCodea = 20;
        } else if (cvage == 5) {
            stataCodea = 23;
        } else if (cvage == 6) {
            stataCodea = 27;
        } else if (cvage == 7) {
            stataCodea = 32;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 5 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 13;
        } else if (cvage == 2) {
            stataCodea = 15;
        } else if (cvage == 3) {
            stataCodea = 18;
        } else if (cvage == 4) {
            stataCodea = 21;
        } else if (cvage == 5) {
            stataCodea = 25;
        } else if (cvage == 6) {
            stataCodea = 29;
        } else if (cvage == 7) {
            stataCodea = 33;
        }
    } else if (cvsex == 0 && cvsmk == 1 && cvsbp == 5 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 14;
        } else if (cvage == 2) {
            stataCodea = 16;
        } else if (cvage == 3) {
            stataCodea = 19;
        } else if (cvage == 4) {
            stataCodea = 22;
        } else if (cvage == 5) {
            stataCodea = 26;
        } else if (cvage == 6) {
            stataCodea = 30;
        } else if (cvage == 7) {
            stataCodea = 34;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 1 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 1;
        } else if (cvage == 2) {
            stataCodea = 2;
        } else if (cvage == 3) {
            stataCodea = 2;
        } else if (cvage == 4) {
            stataCodea = 4;
        } else if (cvage == 5) {
            stataCodea = 5;
        } else if (cvage == 6) {
            stataCodea = 8;
        } else if (cvage == 7) {
            stataCodea = 11;
        }
    }
    else if (cvsex == 1 && cvsmk == 0 && cvsbp == 1 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 1;
        } else if (cvage == 2) {
            stataCodea = 2;
        } else if (cvage == 3) {
            stataCodea = 3;
        } else if (cvage == 4) {
            stataCodea = 4;
        } else if (cvage == 5) {
            stataCodea = 6;
        } else if (cvage == 6) {
            stataCodea = 8;
        } else if (cvage == 7) {
            stataCodea = 12;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 1 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 2;
        } else if (cvage == 2) {
            stataCodea = 2;
        } else if (cvage == 3) {
            stataCodea = 3;
        } else if (cvage == 4) {
            stataCodea = 4;
        } else if (cvage == 5) {
            stataCodea = 6;
        } else if (cvage == 6) {
            stataCodea = 9;
        } else if (cvage == 7) {
            stataCodea = 13;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 1 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 2;
        } else if (cvage == 2) {
            stataCodea = 2;
        } else if (cvage == 3) {
            stataCodea = 4;
        } else if (cvage == 4) {
            stataCodea = 5;
        } else if (cvage == 5) {
            stataCodea = 7;
        } else if (cvage == 6) {
            stataCodea = 10;
        } else if (cvage == 7) {
            stataCodea = 14;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 1 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 2;
        } else if (cvage == 2) {
            stataCodea = 3;
        } else if (cvage == 3) {
            stataCodea = 4;
        } else if (cvage == 4) {
            stataCodea = 6;
        } else if (cvage == 5) {
            stataCodea = 8;
        } else if (cvage == 6) {
            stataCodea = 11;
        } else if (cvage == 7) {
            stataCodea = 15;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 2 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 2;
        } else if (cvage == 2) {
            stataCodea = 2;
        } else if (cvage == 3) {
            stataCodea = 3;
        } else if (cvage == 4) {
            stataCodea = 5;
        } else if (cvage == 5) {
            stataCodea = 7;
        } else if (cvage == 6) {
            stataCodea = 10;
        } else if (cvage == 7) {
            stataCodea = 14;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 2 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 2;
        } else if (cvage == 2) {
            stataCodea = 3;
        } else if (cvage == 3) {
            stataCodea = 4;
        } else if (cvage == 4) {
            stataCodea = 5;
        } else if (cvage == 5) {
            stataCodea = 8;
        } else if (cvage == 6) {
            stataCodea = 11;
        } else if (cvage == 7) {
            stataCodea = 15;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 2 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 2;
        } else if (cvage == 2) {
            stataCodea = 3;
        } else if (cvage == 3) {
            stataCodea = 4;
        } else if (cvage == 4) {
            stataCodea = 6;
        } else if (cvage == 5) {
            stataCodea = 8;
        } else if (cvage == 6) {
            stataCodea = 12;
        } else if (cvage == 7) {
            stataCodea = 16;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 2 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 4;
        } else if (cvage == 3) {
            stataCodea = 5;
        } else if (cvage == 4) {
            stataCodea = 7;
        } else if (cvage == 5) {
            stataCodea = 9;
        } else if (cvage == 6) {
            stataCodea = 13;
        } else if (cvage == 7) {
            stataCodea = 17;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 2 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 4;
        } else if (cvage == 3) {
            stataCodea = 6;
        } else if (cvage == 4) {
            stataCodea = 8;
        } else if (cvage == 5) {
            stataCodea = 10;
        } else if (cvage == 6) {
            stataCodea = 14;
        } else if (cvage == 7) {
            stataCodea = 18;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 3 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 2;
        } else if (cvage == 2) {
            stataCodea = 3;
        } else if (cvage == 3) {
            stataCodea = 5;
        } else if (cvage == 4) {
            stataCodea = 7;
        } else if (cvage == 5) {
            stataCodea = 9;
        } else if (cvage == 6) {
            stataCodea = 12;
        } else if (cvage == 7) {
            stataCodea = 17;
        }
    }
    else if (cvsex == 1 && cvsmk == 0 && cvsbp == 3 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 4;
        } else if (cvage == 3) {
            stataCodea = 5;
        } else if (cvage == 4) {
            stataCodea = 7;
        } else if (cvage == 5) {
            stataCodea = 10;
        } else if (cvage == 6) {
            stataCodea = 14;
        } else if (cvage == 7) {
            stataCodea = 19;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 3 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 4;
        } else if (cvage == 3) {
            stataCodea = 6;
        } else if (cvage == 4) {
            stataCodea = 8;
        } else if (cvage == 5) {
            stataCodea = 11;
        } else if (cvage == 6) {
            stataCodea = 15;
        } else if (cvage == 7) {
            stataCodea = 20;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 3 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 4;
        } else if (cvage == 2) {
            stataCodea = 5;
        } else if (cvage == 3) {
            stataCodea = 7;
        } else if (cvage == 4) {
            stataCodea = 9;
        } else if (cvage == 5) {
            stataCodea = 12;
        } else if (cvage == 6) {
            stataCodea = 16;
        } else if (cvage == 7) {
            stataCodea = 21;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 3 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 4;
        } else if (cvage == 2) {
            stataCodea = 6;
        } else if (cvage == 3) {
            stataCodea = 8;
        } else if (cvage == 4) {
            stataCodea = 10;
        } else if (cvage == 5) {
            stataCodea = 14;
        } else if (cvage == 6) {
            stataCodea = 18;
        } else if (cvage == 7) {
            stataCodea = 23;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 4 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 4;
        } else if (cvage == 2) {
            stataCodea = 5;
        } else if (cvage == 3) {
            stataCodea = 7;
        } else if (cvage == 4) {
            stataCodea = 9;
        } else if (cvage == 5) {
            stataCodea = 12;
        } else if (cvage == 6) {
            stataCodea = 16;
        } else if (cvage == 7) {
            stataCodea = 21;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 4 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 4;
        } else if (cvage == 2) {
            stataCodea = 6;
        } else if (cvage == 3) {
            stataCodea = 7;
        } else if (cvage == 4) {
            stataCodea = 10;
        } else if (cvage == 5) {
            stataCodea = 13;
        } else if (cvage == 6) {
            stataCodea = 17;
        } else if (cvage == 7) {
            stataCodea = 23;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 4 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 5;
        } else if (cvage == 2) {
            stataCodea = 6;
        } else if (cvage == 3) {
            stataCodea = 8;
        } else if (cvage == 4) {
            stataCodea = 11;
        } else if (cvage == 5) {
            stataCodea = 14;
        } else if (cvage == 6) {
            stataCodea = 19;
        } else if (cvage == 7) {
            stataCodea = 25;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 4 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 6;
        } else if (cvage == 2) {
            stataCodea = 7;
        } else if (cvage == 3) {
            stataCodea = 9;
        } else if (cvage == 4) {
            stataCodea = 12;
        } else if (cvage == 5) {
            stataCodea = 16;
        } else if (cvage == 6) {
            stataCodea = 21;
        } else if (cvage == 7) {
            stataCodea = 26;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 4 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 7;
        } else if (cvage == 2) {
            stataCodea = 8;
        } else if (cvage == 3) {
            stataCodea = 11;
        } else if (cvage == 4) {
            stataCodea = 14;
        } else if (cvage == 5) {
            stataCodea = 18;
        } else if (cvage == 6) {
            stataCodea = 22;
        } else if (cvage == 7) {
            stataCodea = 28;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 5 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 5;
        } else if (cvage == 2) {
            stataCodea = 7;
        } else if (cvage == 3) {
            stataCodea = 9;
        } else if (cvage == 4) {
            stataCodea = 12;
        } else if (cvage == 5) {
            stataCodea = 15;
        } else if (cvage == 6) {
            stataCodea = 20;
        } else if (cvage == 7) {
            stataCodea = 26;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 5 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 6;
        } else if (cvage == 2) {
            stataCodea = 8;
        } else if (cvage == 3) {
            stataCodea = 10;
        } else if (cvage == 4) {
            stataCodea = 13;
        } else if (cvage == 5) {
            stataCodea = 17;
        } else if (cvage == 6) {
            stataCodea = 22;
        } else if (cvage == 7) {
            stataCodea = 28;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 5 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 7;
        } else if (cvage == 2) {
            stataCodea = 9;
        } else if (cvage == 3) {
            stataCodea = 11;
        } else if (cvage == 4) {
            stataCodea = 15;
        } else if (cvage == 5) {
            stataCodea = 19;
        } else if (cvage == 6) {
            stataCodea = 24;
        } else if (cvage == 7) {
            stataCodea = 30;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 5 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 8;
        } else if (cvage == 2) {
            stataCodea = 10;
        } else if (cvage == 3) {
            stataCodea = 13;
        } else if (cvage == 4) {
            stataCodea = 16;
        } else if (cvage == 5) {
            stataCodea = 21;
        } else if (cvage == 6) {
            stataCodea = 26;
        } else if (cvage == 7) {
            stataCodea = 32;
        }
    } else if (cvsex == 1 && cvsmk == 0 && cvsbp == 5 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 10;
        } else if (cvage == 2) {
            stataCodea = 12;
        } else if (cvage == 3) {
            stataCodea = 15;
        } else if (cvage == 4) {
            stataCodea = 18;
        } else if (cvage == 5) {
            stataCodea = 23;
        } else if (cvage == 6) {
            stataCodea = 28;
        } else if (cvage == 7) {
            stataCodea = 34;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 1 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 2;
        } else if (cvage == 2) {
            stataCodea = 3;
        } else if (cvage == 3) {
            stataCodea = 4;
        } else if (cvage == 4) {
            stataCodea = 6;
        } else if (cvage == 5) {
            stataCodea = 8;
        } else if (cvage == 6) {
            stataCodea = 11;
        } else if (cvage == 7) {
            stataCodea = 15;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 1 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 4;
        } else if (cvage == 3) {
            stataCodea = 5;
        } else if (cvage == 4) {
            stataCodea = 7;
        } else if (cvage == 5) {
            stataCodea = 9;
        } else if (cvage == 6) {
            stataCodea = 12;
        } else if (cvage == 7) {
            stataCodea = 16;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 1 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 4;
        } else if (cvage == 3) {
            stataCodea = 6;
        } else if (cvage == 4) {
            stataCodea = 7;
        } else if (cvage == 5) {
            stataCodea = 10;
        } else if (cvage == 6) {
            stataCodea = 13;
        } else if (cvage == 7) {
            stataCodea = 17;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 1 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 4;
        } else if (cvage == 2) {
            stataCodea = 5;
        } else if (cvage == 3) {
            stataCodea = 7;
        } else if (cvage == 4) {
            stataCodea = 8;
        } else if (cvage == 5) {
            stataCodea = 11;
        } else if (cvage == 6) {
            stataCodea = 14;
        } else if (cvage == 7) {
            stataCodea = 18;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 1 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 5;
        } else if (cvage == 2) {
            stataCodea = 6;
        } else if (cvage == 3) {
            stataCodea = 8;
        } else if (cvage == 4) {
            stataCodea = 10;
        } else if (cvage == 5) {
            stataCodea = 12;
        } else if (cvage == 6) {
            stataCodea = 16;
        } else if (cvage == 7) {
            stataCodea = 20;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 2 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 3;
        } else if (cvage == 2) {
            stataCodea = 4;
        } else if (cvage == 3) {
            stataCodea = 6;
        } else if (cvage == 4) {
            stataCodea = 8;
        } else if (cvage == 5) {
            stataCodea = 10;
        } else if (cvage == 6) {
            stataCodea = 14;
        } else if (cvage == 7) {
            stataCodea = 18;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 2 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 4;
        } else if (cvage == 2) {
            stataCodea = 5;
        } else if (cvage == 3) {
            stataCodea = 7;
        } else if (cvage == 4) {
            stataCodea = 9;
        } else if (cvage == 5) {
            stataCodea = 12;
        } else if (cvage == 6) {
            stataCodea = 15;
        } else if (cvage == 7) {
            stataCodea = 20;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 2 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 5;
        } else if (cvage == 2) {
            stataCodea = 6;
        } else if (cvage == 3) {
            stataCodea = 8;
        } else if (cvage == 4) {
            stataCodea = 10;
        } else if (cvage == 5) {
            stataCodea = 13;
        } else if (cvage == 6) {
            stataCodea = 16;
        } else if (cvage == 7) {
            stataCodea = 21;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 2 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 6;
        } else if (cvage == 2) {
            stataCodea = 7;
        } else if (cvage == 3) {
            stataCodea = 9;
        } else if (cvage == 4) {
            stataCodea = 11;
        } else if (cvage == 5) {
            stataCodea = 14;
        } else if (cvage == 6) {
            stataCodea = 18;
        } else if (cvage == 7) {
            stataCodea = 23;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 2 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 7;
        } else if (cvage == 2) {
            stataCodea = 8;
        } else if (cvage == 3) {
            stataCodea = 11;
        } else if (cvage == 4) {
            stataCodea = 13;
        } else if (cvage == 5) {
            stataCodea = 16;
        } else if (cvage == 6) {
            stataCodea = 20;
        } else if (cvage == 7) {
            stataCodea = 24;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 3 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 5;
        } else if (cvage == 2) {
            stataCodea = 6;
        } else if (cvage == 3) {
            stataCodea = 8;
        } else if (cvage == 4) {
            stataCodea = 11;
        } else if (cvage == 5) {
            stataCodea = 14;
        } else if (cvage == 6) {
            stataCodea = 18;
        } else if (cvage == 7) {
            stataCodea = 23;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 3 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 6;
        } else if (cvage == 2) {
            stataCodea = 7;
        } else if (cvage == 3) {
            stataCodea = 9;
        } else if (cvage == 4) {
            stataCodea = 12;
        } else if (cvage == 5) {
            stataCodea = 15;
        } else if (cvage == 6) {
            stataCodea = 19;
        } else if (cvage == 7) {
            stataCodea = 24;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 3 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 7;
        } else if (cvage == 2) {
            stataCodea = 9;
        } else if (cvage == 3) {
            stataCodea = 11;
        } else if (cvage == 4) {
            stataCodea = 13;
        } else if (cvage == 5) {
            stataCodea = 17;
        } else if (cvage == 6) {
            stataCodea = 21;
        } else if (cvage == 7) {
            stataCodea = 26;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 3 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 8;
        } else if (cvage == 2) {
            stataCodea = 10;
        } else if (cvage == 3) {
            stataCodea = 12;
        } else if (cvage == 4) {
            stataCodea = 15;
        } else if (cvage == 5) {
            stataCodea = 19;
        } else if (cvage == 6) {
            stataCodea = 23;
        } else if (cvage == 7) {
            stataCodea = 28;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 3 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 10;
        } else if (cvage == 2) {
            stataCodea = 12;
        } else if (cvage == 3) {
            stataCodea = 14;
        } else if (cvage == 4) {
            stataCodea = 17;
        } else if (cvage == 5) {
            stataCodea = 21;
        } else if (cvage == 6) {
            stataCodea = 25;
        } else if (cvage == 7) {
            stataCodea = 30;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 4 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 7;
        } else if (cvage == 2) {
            stataCodea = 9;
        } else if (cvage == 3) {
            stataCodea = 11;
        } else if (cvage == 4) {
            stataCodea = 14;
        } else if (cvage == 5) {
            stataCodea = 18;
        } else if (cvage == 6) {
            stataCodea = 22;
        } else if (cvage == 7) {
            stataCodea = 28;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 4 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 8;
        } else if (cvage == 2) {
            stataCodea = 10;
        } else if (cvage == 3) {
            stataCodea = 13;
        } else if (cvage == 4) {
            stataCodea = 16;
        } else if (cvage == 5) {
            stataCodea = 20;
        } else if (cvage == 6) {
            stataCodea = 24;
        } else if (cvage == 7) {
            stataCodea = 30;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 4 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 10;
        } else if (cvage == 2) {
            stataCodea = 12;
        } else if (cvage == 3) {
            stataCodea = 15;
        } else if (cvage == 4) {
            stataCodea = 18;
        } else if (cvage == 5) {
            stataCodea = 22;
        } else if (cvage == 6) {
            stataCodea = 26;
        } else if (cvage == 7) {
            stataCodea = 32;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 4 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 12;
        } else if (cvage == 2) {
            stataCodea = 14;
        } else if (cvage == 3) {
            stataCodea = 17;
        } else if (cvage == 4) {
            stataCodea = 20;
        } else if (cvage == 5) {
            stataCodea = 24;
        } else if (cvage == 6) {
            stataCodea = 29;
        } else if (cvage == 7) {
            stataCodea = 34;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 4 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 14;
        } else if (cvage == 2) {
            stataCodea = 17;
        } else if (cvage == 3) {
            stataCodea = 20;
        } else if (cvage == 4) {
            stataCodea = 23;
        } else if (cvage == 5) {
            stataCodea = 27;
        } else if (cvage == 6) {
            stataCodea = 31;
        } else if (cvage == 7) {
            stataCodea = 36;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 5 && cvbmi == 1) {
        if (cvage == 1) {
            stataCodea = 10;
        } else if (cvage == 2) {
            stataCodea = 13;
        } else if (cvage == 3) {
            stataCodea = 15;
        } else if (cvage == 4) {
            stataCodea = 19;
        } else if (cvage == 5) {
            stataCodea = 23;
        } else if (cvage == 6) {
            stataCodea = 28;
        } else if (cvage == 7) {
            stataCodea = 34;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 5 && cvbmi == 2) {
        if (cvage == 1) {
            stataCodea = 12;
        } else if (cvage == 2) {
            stataCodea = 15;
        } else if (cvage == 3) {
            stataCodea = 18;
        } else if (cvage == 4) {
            stataCodea = 21;
        } else if (cvage == 5) {
            stataCodea = 25;
        } else if (cvage == 6) {
            stataCodea = 30;
        } else if (cvage == 7) {
            stataCodea = 36;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 5 && cvbmi == 3) {
        if (cvage == 1) {
            stataCodea = 14;
        } else if (cvage == 2) {
            stataCodea = 17;
        } else if (cvage == 3) {
            stataCodea = 20;
        } else if (cvage == 4) {
            stataCodea = 24;
        } else if (cvage == 5) {
            stataCodea = 28;
        } else if (cvage == 6) {
            stataCodea = 33;
        } else if (cvage == 7) {
            stataCodea = 39;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 5 && cvbmi == 4) {
        if (cvage == 1) {
            stataCodea = 17;
        } else if (cvage == 2) {
            stataCodea = 20;
        } else if (cvage == 3) {
            stataCodea = 23;
        } else if (cvage == 4) {
            stataCodea = 27;
        } else if (cvage == 5) {
            stataCodea = 31;
        } else if (cvage == 6) {
            stataCodea = 36;
        } else if (cvage == 7) {
            stataCodea = 41;
        }
    } else if (cvsex == 1 && cvsmk == 1 && cvsbp == 5 && cvbmi == 5) {
        if (cvage == 1) {
            stataCodea = 20;
        } else if (cvage == 2) {
            stataCodea = 23;
        } else if (cvage == 3) {
            stataCodea = 27;
        } else if (cvage == 4) {
            stataCodea = 30;
        } else if (cvage == 5) {
            stataCodea = 34;
        } else if (cvage == 6) {
            stataCodea = 39;
        } else if (cvage == 7) {
            stataCodea = 44;
        }
    }
    else {
        stataCodea += "* ไม่มีเงื่อนไขที่ตรงกับข้อมูลที่ป้อน\n";
    }
    // else if (cvsex == 1 && cvsmk == 0 && cvsbp == 1 && cvbmi == 2) {
    //     if (cvage == 1) {
    //         stataCodea = ;
    //     } else if ( cvage == 2){
    //         stataCodea = ;
    //     } else if (cvage == 3) {
    //         stataCodea = ;
    //     } else if (cvage == 4) {
    //         stataCodea = ;
    //     } else if (cvage == 5) {
    //         stataCodea = ;
    //     } else if (cvage == 6) {
    //         stataCodea = ;
    //     } else if (cvage == 7) {
    //         stataCodea = ;
    //     }
    // }


    var statasNon = "";
    if (stataCodea <= 5) {
        statasNon = " เสี่ยงน้อยมาก";
    } else if (stataCodea > 5 && stataCodea <= 10) {
        statasNon = "เสี่ยงน้อย";
    } else if (stataCodea > 10 && stataCodea <= 20) {
        statasNon = "เสี่ยงปานกลาง";
    } else if (stataCodea > 20 && stataCodea <= 30) {
        statasNon = "เสี่ยงสูง";
    } else if (stataCodea > 30) {
        statasNon = "เสี่ยงสูงมาก";
    } else {
        statasNon = "ไม่ตรงเงื่อนไข";
    }

    document.cookie = `name=${name}; path=/`;
    document.cookie = `lastname=${lastname}; path=/`;
    document.cookie = `cvsex=${cvsex}; path=/`;
    document.cookie = `cvsmk=${cvsmk}; path=/`;
    document.cookie = `cvbmi=${cvbmi}; path=/`;
    document.cookie = `cvsbp=${cvsbp}; path=/`;
    document.cookie = `cvage=${cvage}; path=/`;
    document.cookie = `age=${age}; path=/`;
    document.cookie = `stataCodea=${stataCodea}; path=/`;
    document.cookie = `statasNon=${statasNon}; path=/`;
    document.cookie = `sbp=${sbp}; path=/`;
    document.cookie = `bmi2=${bmi2}; path=/`;


    // ส่งไปยังหน้า result.html
    window.location.href = "resultNon.html";
    //window.location.href = "long.html";
    // ล้างค่าในฟอร์ม
    resetForm();
}

// ฟังก์ชันสำหรับล้างค่าในฟอร์ม
function resetForm() {
    document.getElementById("stataFormNon").reset();



}
