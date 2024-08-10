document.getElementById("callab").addEventListener("click", function () {
    generateStataCode();
});
function generateStataCode() {
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var cvsex = document.getElementById("cvsex").value;
    console.log(cvsex);  // 1 หรือ 0 ขึ้นอยู่กับการเลือก
    // var cvsmk = document.querySelector('input[name="cvsmk"]:checked').value;
    var cvsmk = document.getElementById("cvsmk").value;
    console.log(cvsmk);  // 1 หรือ 0 ขึ้นอยู่กับการเลือก
    
    // var cvdm = document.querySelector('input[name="cvdm"]:checked').value;
    var cvdm = document.getElementById("cvdm").value;
    console.log(cvdm);  // 1 หรือ 0 ขึ้นอยู่กับการเลือก
    
    
    var age = document.getElementById('age').value;
    //tc
    var tc = parseFloat(document.getElementById('tc').value);
    var tccal = (tc * 0.02586);
    //sbp
    var sbp1 = parseFloat(document.getElementById('sbp1').value);
    var sbp2 = parseFloat(document.getElementById('sbp2').value);
    var sbp = ((sbp1 + sbp2) / 2);

    //age
    var age = document.getElementById('age').value;

    //หยุดการทำงานหากข้อมูลไม่ครบ
    if (!cvsex || !cvsmk || !cvdm || !tc || !sbp1 || !sbp2 || !age) {
        alert("โปรดกรอกข้อมูลให้ครบทุกช่อง");
        return; // หยุดการทำงานที่นี่
        window.location.reload(); // รีโหลดหน้าเว็บ

    }
    //กำหนดอายุ
    if (age < 40) {
        alert("โปรดกรอกอายุให้อยู่ใครช่วงที่กำหนด");
        return;
    } else if (age > 74) {
        alert("โปรดกรอกอายุให้อยู่ใครช่วงที่กำหนด");
        return;
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
    //หาcvtc
    var cvtc;
    if (tccal < 4) {
        cvtc = 1;
    } else if (tccal >= 4 && tccal < 5) {
        cvtc = 2;
    } else if (tccal >= 5 && tccal < 6) {
        cvtc = 3;
    } else if (tccal >= 6 && tccal < 7) {
        cvtc = 4;
    } else if (tccal >= 7) {
        cvtc = 5;
    } else {
        cvtc = "ไม่ตรงเงื่อนไข";
    }
    //ส่งค่าไปที่หน้าเว็บตามid
    /*

    document.getElementById('cvsexOutput').textContent = cvsex;
    document.getElementById('cvsmkOutput').textContent = cvsmk;
    document.getElementById('cvdmOutput').textContent = cvdm;
    document.getElementById('sbpOutput').textContent = sbp;
    document.getElementById('cvsbpOutput').textContent = cvsbp;
    document.getElementById('ageOutput').textContent = cvage;
    document.getElementById('tcOutput').textContent = tccal;
    document.getElementById('cvtcOutput').textContent = cvtc;
*/

    var stataCode;
    // เปรียบเทียบค่า Age1-7
    if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvtc == 1 && cvsbp == 1) {
        if (cvage == 1 || cvage == 2) {
            stataCode = 1;
        } else if (cvage == 3) {
            stataCode = 2;
        } else if (cvage == 4) {
            stataCode = 3;
        } else if (cvage == 5) {
            stataCode = 4;
        } else if (cvage == 6) {
            stataCode = 6;
        } else if (cvage == 7) {
            stataCode = 9;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 1 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 1;
        } else if (cvage == 2 || cvage == 3) {
            stataCode = 2;
        } else if (cvage == 4) {
            stataCode = 3;
        } else if (cvage == 5) {
            stataCode = 5;
        } else if (cvage == 6) {
            stataCode = 7;
        } else if (cvage == 7) {
            stataCode = 9;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 1 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 1;
        } else if (cvage == 2) {
            stataCode = 2;
        } else if (cvage == 3) {
            stataCode = 2;
        } else if (cvage == 4) {
            stataCode = 3;
        } else if (cvage == 5) {
            stataCode = 5;
        } else if (cvage == 6) {
            stataCode = 7;
        } else if (cvage == 7) {
            stataCode = 10;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 1 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 1;
        } else if (cvage == 2) {
            stataCode = 2;
        } else if (cvage == 3) {
            stataCode = 3;
        } else if (cvage == 4) {
            stataCode = 4;
        } else if (cvage == 5) {
            stataCode = 5;
        } else if (cvage == 6) {
            stataCode = 7;
        } else if (cvage == 7) {
            stataCode = 10;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 1 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 1;
        } else if (cvage == 2) {
            stataCode = 2;
        } else if (cvage == 3) {
            stataCode = 3;
        } else if (cvage == 4) {
            stataCode = 4;
        } else if (cvage == 5) {
            stataCode = 6;
        } else if (cvage == 6) {
            stataCode = 8;
        } else if (cvage == 7) {
            stataCode = 11;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 2 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 1;
        } else if (cvage == 2) {
            stataCode = 2;
        } else if (cvage == 3) {
            stataCode = 3;
        } else if (cvage == 4) {
            stataCode = 4;
        } else if (cvage == 5) {
            stataCode = 5;
        } else if (cvage == 6) {
            stataCode = 8;
        } else if (cvage == 7) {
            stataCode = 11;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 2 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 1;
        } else if (cvage == 2) {
            stataCode = 2;
        } else if (cvage == 3) {
            stataCode = 3;
        } else if (cvage == 4) {
            stataCode = 4;
        } else if (cvage == 5) {
            stataCode = 6;
        } else if (cvage == 6) {
            stataCode = 8;
        } else if (cvage == 7) {
            stataCode = 11;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 2 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 2;
        } else if (cvage == 3) {
            stataCode = 3;
        } else if (cvage == 4) {
            stataCode = 4;
        } else if (cvage == 5) {
            stataCode = 6;
        } else if (cvage == 6) {
            stataCode = 9;
        } else if (cvage == 7) {
            stataCode = 12;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 2 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 2;
        } else if (cvage == 3) {
            stataCode = 3;
        } else if (cvage == 4) {
            stataCode = 5;
        } else if (cvage == 5) {
            stataCode = 7;
        } else if (cvage == 6) {
            stataCode = 9;
        } else if (cvage == 7) {
            stataCode = 12;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 2 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 4;
        } else if (cvage == 4) {
            stataCode = 5;
        } else if (cvage == 5) {
            stataCode = 7;
        } else if (cvage == 6) {
            stataCode = 10;
        } else if (cvage == 7) {
            stataCode = 13;
        }
    }
    //p2
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 3 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 4;
        } else if (cvage == 4) {
            stataCode = 5;
        } else if (cvage == 5) {
            stataCode = 7;
        } else if (cvage == 6) {
            stataCode = 9;
        } else if (cvage == 7) {
            stataCode = 13;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 3 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 4;
        } else if (cvage == 4) {
            stataCode = 5;
        } else if (cvage == 5) {
            stataCode = 7;
        } else if (cvage == 6) {
            stataCode = 10;
        } else if (cvage == 7) {
            stataCode = 14;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 3 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 4;
        } else if (cvage == 4) {
            stataCode = 6;
        } else if (cvage == 5) {
            stataCode = 8;
        } else if (cvage == 6) {
            stataCode = 10;
        } else if (cvage == 7) {
            stataCode = 14;
        }
    } else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 3 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 6;
        } else if (cvage == 5) {
            stataCode = 8;
        } else if (cvage == 6) {
            stataCode = 11;
        } else if (cvage == 7) {
            stataCode = 15;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 3 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 7;
        } else if (cvage == 5) {
            stataCode = 9;
        } else if (cvage == 6) {
            stataCode = 12;
        } else if (cvage == 7) {
            stataCode = 15;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 4 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 6;
        } else if (cvage == 5) {
            stataCode = 9;
        } else if (cvage == 6) {
            stataCode = 12;
        } else if (cvage == 7) {
            stataCode = 16;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 4 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 7;
        } else if (cvage == 5) {
            stataCode = 9;
        } else if (cvage == 6) {
            stataCode = 12;
        } else if (cvage == 7) {
            stataCode = 16;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 4 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 7;
        } else if (cvage == 5) {
            stataCode = 10;
        } else if (cvage == 6) {
            stataCode = 13;
        } else if (cvage == 7) {
            stataCode = 17;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 4 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 8;
        } else if (cvage == 5) {
            stataCode = 10;
        } else if (cvage == 6) {
            stataCode = 13;
        } else if (cvage == 7) {
            stataCode = 18;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 4 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 8;
        } else if (cvage == 5) {
            stataCode = 11;
        } else if (cvage == 6) {
            stataCode = 14;
        } else if (cvage == 7) {
            stataCode = 18;
        }
    }
    //p3
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 5 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 8;
        } else if (cvage == 5) {
            stataCode = 11;
        } else if (cvage == 6) {
            stataCode = 14;
        } else if (cvage == 7) {
            stataCode = 18;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 5 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 9;
        } else if (cvage == 5) {
            stataCode = 11;
        } else if (cvage == 6) {
            stataCode = 15;
        } else if (cvage == 7) {
            stataCode = 19;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 5 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 9;
        } else if (cvage == 5) {
            stataCode = 12;
        } else if (cvage == 6) {
            stataCode = 16;
        } else if (cvage == 7) {
            stataCode = 20;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 5 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 9;
        } else if (cvage == 5) {
            stataCode = 12;
        } else if (cvage == 6) {
            stataCode = 16;
        } else if (cvage == 7) {
            stataCode = 20;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 5 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 10;
        } else if (cvage == 5) {
            stataCode = 13;
        } else if (cvage == 6) {
            stataCode = 16;
        } else if (cvage == 7) {
            stataCode = 21;
        }
    }
    else if (cvsex == 0 && cvsmk == 0 && cvdm == 0 && cvsbp == 5 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 7;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 11;
        } else if (cvage == 5) {
            stataCode = 14;
        } else if (cvage == 6) {
            stataCode = 17;
        } else if (cvage == 7) {
            stataCode = 22;
        }
    }//smk1
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 1 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 4;
        } else if (cvage == 4) {
            stataCode = 5;
        } else if (cvage == 5) {
            stataCode = 7;
        } else if (cvage == 6) {
            stataCode = 10;
        } else if (cvage == 7) {
            stataCode = 13;
        }
    } else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 1 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 4;
        } else if (cvage == 4) {
            stataCode = 6;
        } else if (cvage == 5) {
            stataCode = 8;
        } else if (cvage == 6) {
            stataCode = 10;
        } else if (cvage == 7) {
            stataCode = 13;
        }
    }
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 1 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 6;
        } else if (cvage == 5) {
            stataCode = 8;
        } else if (cvage == 6) {
            stataCode = 11;
        } else if (cvage == 7) {
            stataCode = 14;
        }
    }
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 1 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 7;
        } else if (cvage == 5) {
            stataCode = 9;
        } else if (cvage == 6) {
            stataCode = 12;
        } else if (cvage == 7) {
            stataCode = 15;
        }
    }
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 1 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 8;
        } else if (cvage == 5) {
            stataCode = 10;
        } else if (cvage == 6) {
            stataCode = 12;
        } else if (cvage == 7) {
            stataCode = 16;
        }
    }//p4
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 2 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 7;
        } else if (cvage == 5) {
            stataCode = 9;
        } else if (cvage == 6) {
            stataCode = 12;
        } else if (cvage == 7) {
            stataCode = 15;
        }
    }
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 2 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 8;
        } else if (cvage == 5) {
            stataCode = 10;
        } else if (cvage == 6) {
            stataCode = 13;
        } else if (cvage == 7) {
            stataCode = 16;
        }
    }
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 2 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 8;
        } else if (cvage == 5) {
            stataCode = 10;
        } else if (cvage == 6) {
            stataCode = 13;
        } else if (cvage == 7) {
            stataCode = 17;
        }
    }
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 2 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 9;
        } else if (cvage == 5) {
            stataCode = 11;
        } else if (cvage == 6) {
            stataCode = 14;
        } else if (cvage == 7) {
            stataCode = 18;
        }
    }
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 2 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 10;
        } else if (cvage == 5) {
            stataCode = 12;
        } else if (cvage == 6) {
            stataCode = 15;
        } else if (cvage == 7) {
            stataCode = 19;
        }
    }
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 3 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 9;
        } else if (cvage == 5) {
            stataCode = 11;
        } else if (cvage == 6) {
            stataCode = 15;
        } else if (cvage == 7) {
            stataCode = 18;
        }
    } else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 3 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 10;
        } else if (cvage == 5) {
            stataCode = 12;
        } else if (cvage == 6) {
            stataCode = 15;
        } else if (cvage == 7) {
            stataCode = 19;
        }
    }
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 3 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 7;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 10;
        } else if (cvage == 5) {
            stataCode = 13;
        } else if (cvage == 6) {
            stataCode = 16;
        } else if (cvage == 7) {
            stataCode = 20;
        }
    } else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 3 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 7;
        } else if (cvage == 3) {
            stataCode = 9;
        } else if (cvage == 4) {
            stataCode = 11;
        } else if (cvage == 5) {
            stataCode = 14;
        } else if (cvage == 6) {
            stataCode = 17;
        } else if (cvage == 7) {
            stataCode = 21;
        }
    } else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 3 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 7;
        } else if (cvage == 2) {
            stataCode = 8;
        } else if (cvage == 3) {
            stataCode = 10;
        } else if (cvage == 4) {
            stataCode = 12;
        } else if (cvage == 5) {
            stataCode = 15;
        } else if (cvage == 6) {
            stataCode = 18;
        } else if (cvage == 7) {
            stataCode = 22;
        }
    }
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 4 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 7;
        } else if (cvage == 3) {
            stataCode = 9;
        } else if (cvage == 4) {
            stataCode = 11;
        } else if (cvage == 5) {
            stataCode = 14;
        } else if (cvage == 6) {
            stataCode = 18;
        } else if (cvage == 7) {
            stataCode = 22;
        }
    }
    //p5
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 4 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 7;
        } else if (cvage == 2) {
            stataCode = 8;
        } else if (cvage == 3) {
            stataCode = 10;
        } else if (cvage == 4) {
            stataCode = 12;
        } else if (cvage == 5) {
            stataCode = 15;
        } else if (cvage == 6) {
            stataCode = 19;
        } else if (cvage == 7) {
            stataCode = 23;
        }
    } else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 4 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 7;
        } else if (cvage == 2) {
            stataCode = 9;
        } else if (cvage == 3) {
            stataCode = 11;
        } else if (cvage == 4) {
            stataCode = 13;
        } else if (cvage == 5) {
            stataCode = 16;
        } else if (cvage == 6) {
            stataCode = 20;
        } else if (cvage == 7) {
            stataCode = 24;
        }
        else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 4 && cvtc == 4) {
            if (cvage == 1) {
                stataCode = 8;
            } else if (cvage == 2) {
                stataCode = 10;
            } else if (cvage == 3) {
                stataCode = 12;
            } else if (cvage == 4) {
                stataCode = 14;
            } else if (cvage == 5) {
                stataCode = 17;
            } else if (cvage == 6) {
                stataCode = 21;
            } else if (cvage == 7) {
                stataCode = 25;
            }
        }
    } else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 4 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 9;
        } else if (cvage == 2) {
            stataCode = 11;
        } else if (cvage == 3) {
            stataCode = 13;
        } else if (cvage == 4) {
            stataCode = 16;
        } else if (cvage == 5) {
            stataCode = 19;
        } else if (cvage == 6) {
            stataCode = 22;
        } else if (cvage == 7) {
            stataCode = 26;
        }
    } else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 5 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 8;
        } else if (cvage == 2) {
            stataCode = 10;
        } else if (cvage == 3) {
            stataCode = 12;
        } else if (cvage == 4) {
            stataCode = 15;
        } else if (cvage == 5) {
            stataCode = 18;
        } else if (cvage == 6) {
            stataCode = 21;
        } else if (cvage == 7) {
            stataCode = 26;
        }
    }
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 5 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 9;
        } else if (cvage == 2) {
            stataCode = 11;
        } else if (cvage == 3) {
            stataCode = 13;
        } else if (cvage == 4) {
            stataCode = 16;
        } else if (cvage == 5) {
            stataCode = 19;
        } else if (cvage == 6) {
            stataCode = 23;
        } else if (cvage == 7) {
            stataCode = 27;
        }
    } else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 5 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 10;
        } else if (cvage == 2) {
            stataCode = 12;
        } else if (cvage == 3) {
            stataCode = 14;
        } else if (cvage == 4) {
            stataCode = 17;
        } else if (cvage == 5) {
            stataCode = 20;
        } else if (cvage == 6) {
            stataCode = 24;
        } else if (cvage == 7) {
            stataCode = 28;
        }
    }
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 5 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 11;
        } else if (cvage == 2) {
            stataCode = 13;
        } else if (cvage == 3) {
            stataCode = 15;
        } else if (cvage == 4) {
            stataCode = 18;
        } else if (cvage == 5) {
            stataCode = 21;
        } else if (cvage == 6) {
            stataCode = 25;
        } else if (cvage == 7) {
            stataCode = 30;
        }
    }
    else if (cvsex == 0 && cvdm == 0 && cvsmk == 1 && cvsbp == 5 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 12;
        } else if (cvage == 2) {
            stataCode = 14;
        } else if (cvage == 3) {
            stataCode = 17;
        } else if (cvage == 4) {
            stataCode = 20;
        } else if (cvage == 5) {
            stataCode = 23;
        } else if (cvage == 6) {
            stataCode = 27;
        } else if (cvage == 7) {
            stataCode = 31;
        }
    }//dm1
    else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 1 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 4;
        } else if (cvage == 4) {
            stataCode = 6;
        } else if (cvage == 5) {
            stataCode = 8;
        } else if (cvage == 6) {
            stataCode = 10;
        } else if (cvage == 7) {
            stataCode = 14;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 1 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 6;
        } else if (cvage == 5) {
            stataCode = 8;
        } else if (cvage == 6) {
            stataCode = 11;
        } else if (cvage == 7) {
            stataCode = 15;
        }
    }//p6
    else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 1 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 7;
        } else if (cvage == 5) {
            stataCode = 9;
        } else if (cvage == 6) {
            stataCode = 12;
        } else if (cvage == 7) {
            stataCode = 15;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 1 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 7;
        } else if (cvage == 5) {
            stataCode = 9;
        } else if (cvage == 6) {
            stataCode = 12;
        } else if (cvage == 7) {
            stataCode = 16;
        }
    }
    else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 1 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 8;
        } else if (cvage == 5) {
            stataCode = 10;
        } else if (cvage == 6) {
            stataCode = 13;
        } else if (cvage == 7) {
            stataCode = 17;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 2 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 7;
        } else if (cvage == 5) {
            stataCode = 10;
        } else if (cvage == 6) {
            stataCode = 13;
        } else if (cvage == 7) {
            stataCode = 17;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 2 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 8;
        } else if (cvage == 5) {
            stataCode = 10;
        } else if (cvage == 6) {
            stataCode = 13;
        } else if (cvage == 7) {
            stataCode = 17;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 2 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 8;
        } else if (cvage == 5) {
            stataCode = 11;
        } else if (cvage == 6) {
            stataCode = 14;
        } else if (cvage == 7) {
            stataCode = 18;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 2 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 9;
        } else if (cvage == 5) {
            stataCode = 12;
        } else if (cvage == 6) {
            stataCode = 15;
        } else if (cvage == 7) {
            stataCode = 19;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 2 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 10;
        } else if (cvage == 5) {
            stataCode = 13;
        } else if (cvage == 6) {
            stataCode = 16;
        } else if (cvage == 7) {
            stataCode = 20;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 3 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 9;
        } else if (cvage == 5) {
            stataCode = 12;
        } else if (cvage == 6) {
            stataCode = 15;
        } else if (cvage == 7) {
            stataCode = 20;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 3 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 10;
        } else if (cvage == 5) {
            stataCode = 13;
        } else if (cvage == 6) {
            stataCode = 16;
        } else if (cvage == 7) {
            stataCode = 21;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 3 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 7;
        } else if (cvage == 3) {
            stataCode = 9;
        } else if (cvage == 4) {
            stataCode = 11;
        } else if (cvage == 5) {
            stataCode = 14;
        } else if (cvage == 6) {
            stataCode = 17;
        } else if (cvage == 7) {
            stataCode = 22;
        }
    }
    //p7
    else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 3 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 7;
        } else if (cvage == 3) {
            stataCode = 9;
        } else if (cvage == 4) {
            stataCode = 12;
        } else if (cvage == 5) {
            stataCode = 15;
        } else if (cvage == 6) {
            stataCode = 18;
        } else if (cvage == 7) {
            stataCode = 23;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 3 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 7;
        } else if (cvage == 2) {
            stataCode = 8;
        } else if (cvage == 3) {
            stataCode = 10;
        } else if (cvage == 4) {
            stataCode = 13;
        } else if (cvage == 5) {
            stataCode = 16;
        } else if (cvage == 6) {
            stataCode = 19;
        } else if (cvage == 7) {
            stataCode = 24;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 4 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 8;
        } else if (cvage == 3) {
            stataCode = 9;
        } else if (cvage == 4) {
            stataCode = 12;
        } else if (cvage == 5) {
            stataCode = 15;
        } else if (cvage == 6) {
            stataCode = 19;
        } else if (cvage == 7) {
            stataCode = 23;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 4 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 7;
        } else if (cvage == 2) {
            stataCode = 8;
        } else if (cvage == 3) {
            stataCode = 10;
        } else if (cvage == 4) {
            stataCode = 13;
        } else if (cvage == 5) {
            stataCode = 16;
        } else if (cvage == 6) {
            stataCode = 20;
        } else if (cvage == 7) {
            stataCode = 25;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 4 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 7;
        } else if (cvage == 2) {
            stataCode = 9;
        } else if (cvage == 3) {
            stataCode = 11;
        } else if (cvage == 4) {
            stataCode = 14;
        } else if (cvage == 5) {
            stataCode = 17;
        } else if (cvage == 6) {
            stataCode = 21;
        } else if (cvage == 7) {
            stataCode = 26;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 4 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 8;
        } else if (cvage == 2) {
            stataCode = 10;
        } else if (cvage == 3) {
            stataCode = 12;
        } else if (cvage == 4) {
            stataCode = 15;
        } else if (cvage == 5) {
            stataCode = 18;
        } else if (cvage == 6) {
            stataCode = 22;
        } else if (cvage == 7) {
            stataCode = 27;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 4 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 9;
        } else if (cvage == 2) {
            stataCode = 11;
        } else if (cvage == 3) {
            stataCode = 13;
        } else if (cvage == 4) {
            stataCode = 16;
        } else if (cvage == 5) {
            stataCode = 20;
        } else if (cvage == 6) {
            stataCode = 24;
        } else if (cvage == 7) {
            stataCode = 28;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 5 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 8;
        } else if (cvage == 2) {
            stataCode = 10;
        } else if (cvage == 3) {
            stataCode = 12;
        } else if (cvage == 4) {
            stataCode = 15;
        } else if (cvage == 5) {
            stataCode = 19;
        } else if (cvage == 6) {
            stataCode = 23;
        } else if (cvage == 7) {
            stataCode = 28;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 5 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 9;
        } else if (cvage == 2) {
            stataCode = 11;
        } else if (cvage == 3) {
            stataCode = 13;
        } else if (cvage == 4) {
            stataCode = 16;
        } else if (cvage == 5) {
            stataCode = 20;
        } else if (cvage == 6) {
            stataCode = 24;
        } else if (cvage == 7) {
            stataCode = 29;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 5 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 10;
        } else if (cvage == 2) {
            stataCode = 12;
        } else if (cvage == 3) {
            stataCode = 14;
        } else if (cvage == 4) {
            stataCode = 17;
        } else if (cvage == 5) {
            stataCode = 21;
        } else if (cvage == 6) {
            stataCode = 25;
        } else if (cvage == 7) {
            stataCode = 30;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 5 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 11;
        } else if (cvage == 2) {
            stataCode = 13;
        } else if (cvage == 3) {
            stataCode = 16;
        } else if (cvage == 4) {
            stataCode = 19;
        } else if (cvage == 5) {
            stataCode = 22;
        } else if (cvage == 6) {
            stataCode = 27;
        } else if (cvage == 7) {
            stataCode = 32;
        }
    }//P8
    else if (cvsex == 0 && cvdm == 1 && cvsmk == 0 && cvsbp == 5 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 12;
        } else if (cvage == 2) {
            stataCode = 15;
        } else if (cvage == 3) {
            stataCode = 17;
        } else if (cvage == 4) {
            stataCode = 20;
        } else if (cvage == 5) {
            stataCode = 24;
        } else if (cvage == 6) {
            stataCode = 28;
        } else if (cvage == 7) {
            stataCode = 33;
        }
    }//dm1smk1
    else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 1 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 7;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 10;
        } else if (cvage == 5) {
            stataCode = 13;
        } else if (cvage == 6) {
            stataCode = 16;
        } else if (cvage == 7) {
            stataCode = 20;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 1 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 8;
        } else if (cvage == 3) {
            stataCode = 9;
        } else if (cvage == 4) {
            stataCode = 11;
        } else if (cvage == 5) {
            stataCode = 14;
        } else if (cvage == 6) {
            stataCode = 17;
        } else if (cvage == 7) {
            stataCode = 21;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 1 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 7;
        } else if (cvage == 2) {
            stataCode = 9;
        } else if (cvage == 3) {
            stataCode = 10;
        } else if (cvage == 4) {
            stataCode = 13;
        } else if (cvage == 5) {
            stataCode = 15;
        } else if (cvage == 6) {
            stataCode = 18;
        } else if (cvage == 7) {
            stataCode = 22;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 1 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 8;
        } else if (cvage == 2) {
            stataCode = 10;
        } else if (cvage == 3) {
            stataCode = 12;
        } else if (cvage == 4) {
            stataCode = 14;
        } else if (cvage == 5) {
            stataCode = 16;
        } else if (cvage == 6) {
            stataCode = 19;
        } else if (cvage == 7) {
            stataCode = 23;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 1 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 9;
        } else if (cvage == 2) {
            stataCode = 11;
        } else if (cvage == 3) {
            stataCode = 13;
        } else if (cvage == 4) {
            stataCode = 15;
        } else if (cvage == 5) {
            stataCode = 18;
        } else if (cvage == 6) {
            stataCode = 21;
        } else if (cvage == 7) {
            stataCode = 24;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 2 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 7;
        } else if (cvage == 2) {
            stataCode = 9;
        } else if (cvage == 3) {
            stataCode = 11;
        } else if (cvage == 4) {
            stataCode = 13;
        } else if (cvage == 5) {
            stataCode = 16;
        } else if (cvage == 6) {
            stataCode = 20;
        } else if (cvage == 7) {
            stataCode = 23;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 2 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 8;
        } else if (cvage == 2) {
            stataCode = 10;
        } else if (cvage == 3) {
            stataCode = 12;
        } else if (cvage == 4) {
            stataCode = 15;
        } else if (cvage == 5) {
            stataCode = 17;
        } else if (cvage == 6) {
            stataCode = 21;
        } else if (cvage == 7) {
            stataCode = 25;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 2 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 10;
        } else if (cvage == 2) {
            stataCode = 11;
        } else if (cvage == 3) {
            stataCode = 13;
        } else if (cvage == 4) {
            stataCode = 16;
        } else if (cvage == 5) {
            stataCode = 19;
        } else if (cvage == 6) {
            stataCode = 22;
        } else if (cvage == 7) {
            stataCode = 26;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 2 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 11;
        } else if (cvage == 2) {
            stataCode = 13;
        } else if (cvage == 3) {
            stataCode = 15;
        } else if (cvage == 4) {
            stataCode = 16;
        } else if (cvage == 5) {
            stataCode = 20;
        } else if (cvage == 6) {
            stataCode = 24;
        } else if (cvage == 7) {
            stataCode = 27;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 2 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 13;
        } else if (cvage == 2) {
            stataCode = 15;
        } else if (cvage == 3) {
            stataCode = 17;
        } else if (cvage == 4) {
            stataCode = 19;
        } else if (cvage == 5) {
            stataCode = 22;
        } else if (cvage == 6) {
            stataCode = 25;
        } else if (cvage == 7) {
            stataCode = 29;
        }
    }//p9
    else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 3 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 10;
        } else if (cvage == 2) {
            stataCode = 12;
        } else if (cvage == 3) {
            stataCode = 14;
        } else if (cvage == 4) {
            stataCode = 17;
        } else if (cvage == 5) {
            stataCode = 20;
        } else if (cvage == 6) {
            stataCode = 24;
        } else if (cvage == 7) {
            stataCode = 28;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 3 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 11;
        } else if (cvage == 2) {
            stataCode = 13;
        } else if (cvage == 3) {
            stataCode = 16;
        } else if (cvage == 4) {
            stataCode = 18;
        } else if (cvage == 5) {
            stataCode = 21;
        } else if (cvage == 6) {
            stataCode = 25;
        } else if (cvage == 7) {
            stataCode = 29;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 3 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 13;
        } else if (cvage == 2) {
            stataCode = 15;
        } else if (cvage == 3) {
            stataCode = 17;
        } else if (cvage == 4) {
            stataCode = 20;
        } else if (cvage == 5) {
            stataCode = 23;
        } else if (cvage == 6) {
            stataCode = 27;
        } else if (cvage == 7) {
            stataCode = 31;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 3 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 15;
        } else if (cvage == 2) {
            stataCode = 17;
        } else if (cvage == 3) {
            stataCode = 19;
        } else if (cvage == 4) {
            stataCode = 22;
        } else if (cvage == 5) {
            stataCode = 25;
        } else if (cvage == 6) {
            stataCode = 28;
        } else if (cvage == 7) {
            stataCode = 32;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 3 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 17;
        } else if (cvage == 2) {
            stataCode = 19;
        } else if (cvage == 3) {
            stataCode = 21;
        } else if (cvage == 4) {
            stataCode = 24;
        } else if (cvage == 5) {
            stataCode = 27;
        } else if (cvage == 6) {
            stataCode = 30;
        } else if (cvage == 7) {
            stataCode = 34;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 4 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 14;
        } else if (cvage == 2) {
            stataCode = 16;
        } else if (cvage == 3) {
            stataCode = 18;
        } else if (cvage == 4) {
            stataCode = 21;
        } else if (cvage == 5) {
            stataCode = 25;
        } else if (cvage == 6) {
            stataCode = 28;
        } else if (cvage == 7) {
            stataCode = 33;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 4 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 15;
        } else if (cvage == 2) {
            stataCode = 18;
        } else if (cvage == 3) {
            stataCode = 20;
        } else if (cvage == 4) {
            stataCode = 23;
        } else if (cvage == 5) {
            stataCode = 26;
        } else if (cvage == 6) {
            stataCode = 30;
        } else if (cvage == 7) {
            stataCode = 34;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 4 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 17;
        } else if (cvage == 2) {
            stataCode = 20;
        } else if (cvage == 3) {
            stataCode = 22;
        } else if (cvage == 4) {
            stataCode = 25;
        } else if (cvage == 5) {
            stataCode = 28;
        } else if (cvage == 6) {
            stataCode = 32;
        } else if (cvage == 7) {
            stataCode = 36;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 4 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 19;
        } else if (cvage == 2) {
            stataCode = 22;
        } else if (cvage == 3) {
            stataCode = 24;
        } else if (cvage == 4) {
            stataCode = 27;
        } else if (cvage == 5) {
            stataCode = 31;
        } else if (cvage == 6) {
            stataCode = 34;
        } else if (cvage == 7) {
            stataCode = 38;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 4 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 22;
        } else if (cvage == 2) {
            stataCode = 25;
        } else if (cvage == 3) {
            stataCode = 27;
        } else if (cvage == 4) {
            stataCode = 30;
        } else if (cvage == 5) {
            stataCode = 33;
        } else if (cvage == 6) {
            stataCode = 36;
        } else if (cvage == 7) {
            stataCode = 40;
        }
    }//p10
    else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 5 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 18;
        } else if (cvage == 2) {
            stataCode = 21;
        } else if (cvage == 3) {
            stataCode = 24;
        } else if (cvage == 4) {
            stataCode = 27;
        } else if (cvage == 5) {
            stataCode = 30;
        } else if (cvage == 6) {
            stataCode = 34;
        } else if (cvage == 7) {
            stataCode = 38;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 5 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 20;
        } else if (cvage == 2) {
            stataCode = 23;
        } else if (cvage == 3) {
            stataCode = 26;
        } else if (cvage == 4) {
            stataCode = 29;
        } else if (cvage == 5) {
            stataCode = 32;
        } else if (cvage == 6) {
            stataCode = 36;
        } else if (cvage == 7) {
            stataCode = 40;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 5 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 23;
        } else if (cvage == 2) {
            stataCode = 25;
        } else if (cvage == 3) {
            stataCode = 28;
        } else if (cvage == 4) {
            stataCode = 31;
        } else if (cvage == 5) {
            stataCode = 34;
        } else if (cvage == 6) {
            stataCode = 38;
        } else if (cvage == 7) {
            stataCode = 42;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 5 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 26;
        } else if (cvage == 2) {
            stataCode = 28;
        } else if (cvage == 3) {
            stataCode = 31;
        } else if (cvage == 4) {
            stataCode = 34;
        } else if (cvage == 5) {
            stataCode = 37;
        } else if (cvage == 6) {
            stataCode = 40;
        } else if (cvage == 7) {
            stataCode = 44;
        }
    } else if (cvsex == 0 && cvdm == 1 && cvsmk == 1 && cvsbp == 5 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 29;
        } else if (cvage == 2) {
            stataCode = 32;
        } else if (cvage == 3) {
            stataCode = 34;
        } else if (cvage == 4) {
            stataCode = 37;
        } else if (cvage == 5) {
            stataCode = 40;
        } else if (cvage == 6) {
            stataCode = 43;
        } else if (cvage == 7) {
            stataCode = 46;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 1 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 1;
        } else if (cvage == 2) {
            stataCode = 2;
        } else if (cvage == 3) {
            stataCode = 2;
        } else if (cvage == 4) {
            stataCode = 3;
        } else if (cvage == 5) {
            stataCode = 5;
        } else if (cvage == 6) {
            stataCode = 7;
        } else if (cvage == 7) {
            stataCode = 10;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 1 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 1;
        } else if (cvage == 2) {
            stataCode = 2;
        } else if (cvage == 3) {
            stataCode = 3;
        } else if (cvage == 4) {
            stataCode = 4;
        } else if (cvage == 5) {
            stataCode = 5;
        } else if (cvage == 6) {
            stataCode = 8;
        } else if (cvage == 7) {
            stataCode = 11;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 1 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 1;
        } else if (cvage == 2) {
            stataCode = 2;
        } else if (cvage == 3) {
            stataCode = 3;
        } else if (cvage == 4) {
            stataCode = 4;
        } else if (cvage == 5) {
            stataCode = 6;
        } else if (cvage == 6) {
            stataCode = 9;
        } else if (cvage == 7) {
            stataCode = 12;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 1 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 2;
        } else if (cvage == 3) {
            stataCode = 3;
        } else if (cvage == 4) {
            stataCode = 5;
        } else if (cvage == 5) {
            stataCode = 7;
        } else if (cvage == 6) {
            stataCode = 10;
        } else if (cvage == 7) {
            stataCode = 14;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 1 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 4;
        } else if (cvage == 4) {
            stataCode = 6;
        } else if (cvage == 5) {
            stataCode = 8;
        } else if (cvage == 6) {
            stataCode = 11;
        } else if (cvage == 7) {
            stataCode = 15;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 2 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 2;
        } else if (cvage == 3) {
            stataCode = 3;
        } else if (cvage == 4) {
            stataCode = 5;
        } else if (cvage == 5) {
            stataCode = 6;
        } else if (cvage == 6) {
            stataCode = 9;
        } else if (cvage == 7) {
            stataCode = 13;
        }
    }//p11
    else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 2 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 4;
        } else if (cvage == 4) {
            stataCode = 5;
        } else if (cvage == 5) {
            stataCode = 7;
        } else if (cvage == 6) {
            stataCode = 10;
        } else if (cvage == 7) {
            stataCode = 14;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 2 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 4;
        } else if (cvage == 4) {
            stataCode = 6;
        } else if (cvage == 5) {
            stataCode = 8;
        } else if (cvage == 6) {
            stataCode = 11;
        } else if (cvage == 7) {
            stataCode = 15;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 2 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 6;
        } else if (cvage == 5) {
            stataCode = 9;
        } else if (cvage == 6) {
            stataCode = 12;
        } else if (cvage == 7) {
            stataCode = 17;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 2 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 7;
        } else if (cvage == 5) {
            stataCode = 10;
        } else if (cvage == 6) {
            stataCode = 14;
        } else if (cvage == 7) {
            stataCode = 19;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 3 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 4;
        } else if (cvage == 4) {
            stataCode = 6;
        } else if (cvage == 5) {
            stataCode = 8;
        } else if (cvage == 6) {
            stataCode = 11;
        } else if (cvage == 7) {
            stataCode = 16;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 3 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 7;
        } else if (cvage == 5) {
            stataCode = 9;
        } else if (cvage == 6) {
            stataCode = 13;
        } else if (cvage == 7) {
            stataCode = 17;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 3 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 8;
        } else if (cvage == 5) {
            stataCode = 10;
        } else if (cvage == 6) {
            stataCode = 14;
        } else if (cvage == 7) {
            stataCode = 19;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 3 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 9;
        } else if (cvage == 5) {
            stataCode = 12;
        } else if (cvage == 6) {
            stataCode = 16;
        } else if (cvage == 7) {
            stataCode = 21;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 3 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 10;
        } else if (cvage == 5) {
            stataCode = 13;
        } else if (cvage == 6) {
            stataCode = 18;
        } else if (cvage == 7) {
            stataCode = 23;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 4 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 8;
        } else if (cvage == 5) {
            stataCode = 11;
        } else if (cvage == 6) {
            stataCode = 15;
        } else if (cvage == 7) {
            stataCode = 19;
        }
    }//p12
    else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 4 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 9;
        } else if (cvage == 5) {
            stataCode = 12;
        } else if (cvage == 6) {
            stataCode = 16;
        } else if (cvage == 7) {
            stataCode = 21;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 4 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 10;
        } else if (cvage == 5) {
            stataCode = 13;
        } else if (cvage == 6) {
            stataCode = 18;
        } else if (cvage == 7) {
            stataCode = 23;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 4 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 9;
        } else if (cvage == 4) {
            stataCode = 11;
        } else if (cvage == 5) {
            stataCode = 15;
        } else if (cvage == 6) {
            stataCode = 20;
        } else if (cvage == 7) {
            stataCode = 26;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 4 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 8;
        } else if (cvage == 3) {
            stataCode = 10;
        } else if (cvage == 4) {
            stataCode = 13;
        } else if (cvage == 5) {
            stataCode = 17;
        } else if (cvage == 6) {
            stataCode = 22;
        } else if (cvage == 7) {
            stataCode = 29;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 5 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 7;
        } else if (cvage == 3) {
            stataCode = 9;
        } else if (cvage == 4) {
            stataCode = 11;
        } else if (cvage == 5) {
            stataCode = 14;
        } else if (cvage == 6) {
            stataCode = 19;
        } else if (cvage == 7) {
            stataCode = 24;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 5 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 7;
        } else if (cvage == 3) {
            stataCode = 9;
        } else if (cvage == 4) {
            stataCode = 12;
        } else if (cvage == 5) {
            stataCode = 16;
        } else if (cvage == 6) {
            stataCode = 20;
        } else if (cvage == 7) {
            stataCode = 26;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 5 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 8;
        } else if (cvage == 3) {
            stataCode = 10;
        } else if (cvage == 4) {
            stataCode = 13;
        } else if (cvage == 5) {
            stataCode = 17;
        } else if (cvage == 6) {
            stataCode = 22;
        } else if (cvage == 7) {
            stataCode = 29;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 5 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 7;
        } else if (cvage == 2) {
            stataCode = 9;
        } else if (cvage == 3) {
            stataCode = 12;
        } else if (cvage == 4) {
            stataCode = 15;
        } else if (cvage == 5) {
            stataCode = 19;
        } else if (cvage == 6) {
            stataCode = 25;
        } else if (cvage == 7) {
            stataCode = 32;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 0 && cvsbp == 5 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 8;
        } else if (cvage == 2) {
            stataCode = 10;
        } else if (cvage == 3) {
            stataCode = 13;
        } else if (cvage == 4) {
            stataCode = 17;
        } else if (cvage == 5) {
            stataCode = 22;
        } else if (cvage == 6) {
            stataCode = 28;
        } else if (cvage == 7) {
            stataCode = 35;
        }
    }//mk1
    else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 1 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 4;
        } else if (cvage == 4) {
            stataCode = 5;
        } else if (cvage == 5) {
            stataCode = 7;
        } else if (cvage == 6) {
            stataCode = 10;
        } else if (cvage == 7) {
            stataCode = 13;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 1 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 4;
        } else if (cvage == 4) {
            stataCode = 6;
        } else if (cvage == 5) {
            stataCode = 8;
        } else if (cvage == 6) {
            stataCode = 11;
        } else if (cvage == 7) {
            stataCode = 15;
        }
    }//13
    else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 1 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 7;
        } else if (cvage == 5) {
            stataCode = 9;
        } else if (cvage == 6) {
            stataCode = 12;
        } else if (cvage == 7) {
            stataCode = 16;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 1 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 8;
        } else if (cvage == 5) {
            stataCode = 10;
        } else if (cvage == 6) {
            stataCode = 14;
        } else if (cvage == 7) {
            stataCode = 18;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 1 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 9;
        } else if (cvage == 5) {
            stataCode = 12;
        } else if (cvage == 6) {
            stataCode = 16;
        } else if (cvage == 7) {
            stataCode = 20;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 2 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 7;
        } else if (cvage == 5) {
            stataCode = 9;
        } else if (cvage == 6) {
            stataCode = 12;
        } else if (cvage == 7) {
            stataCode = 16;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 2 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 8;
        } else if (cvage == 5) {
            stataCode = 11;
        } else if (cvage == 6) {
            stataCode = 14;
        } else if (cvage == 7) {
            stataCode = 18;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 2 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 9;
        } else if (cvage == 5) {
            stataCode = 12;
        } else if (cvage == 6) {
            stataCode = 15;
        } else if (cvage == 7) {
            stataCode = 20;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 2 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 11;
        } else if (cvage == 5) {
            stataCode = 14;
        } else if (cvage == 6) {
            stataCode = 17;
        } else if (cvage == 7) {
            stataCode = 22;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 2 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 8;
        } else if (cvage == 3) {
            stataCode = 10;
        } else if (cvage == 4) {
            stataCode = 12;
        } else if (cvage == 5) {
            stataCode = 16;
        } else if (cvage == 6) {
            stataCode = 20;
        } else if (cvage == 7) {
            stataCode = 25;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 3 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 10;
        } else if (cvage == 5) {
            stataCode = 12;
        } else if (cvage == 6) {
            stataCode = 16;
        } else if (cvage == 7) {
            stataCode = 20;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 3 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 11;
        } else if (cvage == 5) {
            stataCode = 14;
        } else if (cvage == 6) {
            stataCode = 18;
        } else if (cvage == 7) {
            stataCode = 22;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 3 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 7;
        } else if (cvage == 3) {
            stataCode = 10;
        } else if (cvage == 4) {
            stataCode = 12;
        } else if (cvage == 5) {
            stataCode = 15;
        } else if (cvage == 6) {
            stataCode = 20;
        } else if (cvage == 7) {
            stataCode = 25;
        }
    }//p14
    else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 3 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 7;
        } else if (cvage == 2) {
            stataCode = 9;
        } else if (cvage == 3) {
            stataCode = 11;
        } else if (cvage == 4) {
            stataCode = 14;
        } else if (cvage == 5) {
            stataCode = 18;
        } else if (cvage == 6) {
            stataCode = 22;
        } else if (cvage == 7) {
            stataCode = 27;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 3 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 8;
        } else if (cvage == 2) {
            stataCode = 10;
        } else if (cvage == 3) {
            stataCode = 13;
        } else if (cvage == 4) {
            stataCode = 16;
        } else if (cvage == 5) {
            stataCode = 20;
        } else if (cvage == 6) {
            stataCode = 25;
        } else if (cvage == 7) {
            stataCode = 30;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 4 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 8;
        } else if (cvage == 3) {
            stataCode = 10;
        } else if (cvage == 4) {
            stataCode = 13;
        } else if (cvage == 5) {
            stataCode = 16;
        } else if (cvage == 6) {
            stataCode = 20;
        } else if (cvage == 7) {
            stataCode = 25;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 4 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 7;
        } else if (cvage == 2) {
            stataCode = 9;
        } else if (cvage == 3) {
            stataCode = 11;
        } else if (cvage == 4) {
            stataCode = 14;
        } else if (cvage == 5) {
            stataCode = 18;
        } else if (cvage == 6) {
            stataCode = 22;
        } else if (cvage == 7) {
            stataCode = 27;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 4 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 8;
        } else if (cvage == 2) {
            stataCode = 10;
        } else if (cvage == 3) {
            stataCode = 13;
        } else if (cvage == 4) {
            stataCode = 16;
        } else if (cvage == 5) {
            stataCode = 20;
        } else if (cvage == 6) {
            stataCode = 25;
        } else if (cvage == 7) {
            stataCode = 30;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 4 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 10;
        } else if (cvage == 2) {
            stataCode = 12;
        } else if (cvage == 3) {
            stataCode = 15;
        } else if (cvage == 4) {
            stataCode = 18;
        } else if (cvage == 5) {
            stataCode = 23;
        } else if (cvage == 6) {
            stataCode = 27;
        } else if (cvage == 7) {
            stataCode = 33;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 4 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 12;
        } else if (cvage == 2) {
            stataCode = 14;
        } else if (cvage == 3) {
            stataCode = 18;
        } else if (cvage == 4) {
            stataCode = 21;
        } else if (cvage == 5) {
            stataCode = 26;
        } else if (cvage == 6) {
            stataCode = 31;
        } else if (cvage == 7) {
            stataCode = 37;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 5 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 9;
        } else if (cvage == 2) {
            stataCode = 11;
        } else if (cvage == 3) {
            stataCode = 14;
        } else if (cvage == 4) {
            stataCode = 17;
        } else if (cvage == 5) {
            stataCode = 21;
        } else if (cvage == 6) {
            stataCode = 25;
        } else if (cvage == 7) {
            stataCode = 30;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 5 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 10;
        } else if (cvage == 2) {
            stataCode = 13;
        } else if (cvage == 3) {
            stataCode = 15;
        } else if (cvage == 4) {
            stataCode = 19;
        } else if (cvage == 5) {
            stataCode = 23;
        } else if (cvage == 6) {
            stataCode = 28;
        } else if (cvage == 7) {
            stataCode = 33;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 5 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 12;
        } else if (cvage == 2) {
            stataCode = 14;
        } else if (cvage == 3) {
            stataCode = 18;
        } else if (cvage == 4) {
            stataCode = 21;
        } else if (cvage == 5) {
            stataCode = 26;
        } else if (cvage == 6) {
            stataCode = 31;
        } else if (cvage == 7) {
            stataCode = 36;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 5 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 14;
        } else if (cvage == 2) {
            stataCode = 17;
        } else if (cvage == 3) {
            stataCode = 20;
        } else if (cvage == 4) {
            stataCode = 24;
        } else if (cvage == 5) {
            stataCode = 29;
        } else if (cvage == 6) {
            stataCode = 34;
        } else if (cvage == 7) {
            stataCode = 40;
        }
    } else if (cvsex == 1 && cvdm == 0 && cvsmk == 1 && cvsbp == 5 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 17;
        } else if (cvage == 2) {
            stataCode = 20;
        } else if (cvage == 3) {
            stataCode = 23;
        } else if (cvage == 4) {
            stataCode = 28;
        } else if (cvage == 5) {
            stataCode = 33;
        } else if (cvage == 6) {
            stataCode = 38;
        } else if (cvage == 7) {
            stataCode = 44;
        }
    }//p15
    else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 1 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 2;
        } else if (cvage == 2) {
            stataCode = 3;
        } else if (cvage == 3) {
            stataCode = 4;
        } else if (cvage == 4) {
            stataCode = 6;
        } else if (cvage == 5) {
            stataCode = 8;
        } else if (cvage == 6) {
            stataCode = 10;
        } else if (cvage == 7) {
            stataCode = 14;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 1 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 5;
        } else if (cvage == 4) {
            stataCode = 7;
        } else if (cvage == 5) {
            stataCode = 9;
        } else if (cvage == 6) {
            stataCode = 12;
        } else if (cvage == 7) {
            stataCode = 16;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 1 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 3;
        } else if (cvage == 2) {
            stataCode = 4;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 7;
        } else if (cvage == 5) {
            stataCode = 10;
        } else if (cvage == 6) {
            stataCode = 13;
        } else if (cvage == 7) {
            stataCode = 17;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 1 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 9;
        } else if (cvage == 5) {
            stataCode = 11;
        } else if (cvage == 6) {
            stataCode = 15;
        } else if (cvage == 7) {
            stataCode = 19;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 1 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 10;
        } else if (cvage == 5) {
            stataCode = 13;
        } else if (cvage == 6) {
            stataCode = 17;
        } else if (cvage == 7) {
            stataCode = 22;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 2 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 6;
        } else if (cvage == 4) {
            stataCode = 8;
        } else if (cvage == 5) {
            stataCode = 10;
        } else if (cvage == 6) {
            stataCode = 13;
        } else if (cvage == 7) {
            stataCode = 17;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 2 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 5;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 9;
        } else if (cvage == 5) {
            stataCode = 11;
        } else if (cvage == 6) {
            stataCode = 15;
        } else if (cvage == 7) {
            stataCode = 19;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 2 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 4;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 10;
        } else if (cvage == 5) {
            stataCode = 13;
        } else if (cvage == 6) {
            stataCode = 17;
        } else if (cvage == 7) {
            stataCode = 22;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 2 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 7;
        } else if (cvage == 3) {
            stataCode = 9;
        } else if (cvage == 4) {
            stataCode = 11;
        } else if (cvage == 5) {
            stataCode = 15;
        } else if (cvage == 6) {
            stataCode = 19;
        } else if (cvage == 7) {
            stataCode = 24;
        }
    }//p16
    else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 2 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 8;
        } else if (cvage == 3) {
            stataCode = 10;
        } else if (cvage == 4) {
            stataCode = 13;
        } else if (cvage == 5) {
            stataCode = 17;
        } else if (cvage == 6) {
            stataCode = 21;
        } else if (cvage == 7) {
            stataCode = 27;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 3 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 7;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 10;
        } else if (cvage == 5) {
            stataCode = 13;
        } else if (cvage == 6) {
            stataCode = 17;
        } else if (cvage == 7) {
            stataCode = 22;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 3 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 7;
        } else if (cvage == 3) {
            stataCode = 9;
        } else if (cvage == 4) {
            stataCode = 12;
        } else if (cvage == 5) {
            stataCode = 15;
        } else if (cvage == 6) {
            stataCode = 19;
        } else if (cvage == 7) {
            stataCode = 24;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 3 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 8;
        } else if (cvage == 3) {
            stataCode = 10;
        } else if (cvage == 4) {
            stataCode = 13;
        } else if (cvage == 5) {
            stataCode = 17;
        } else if (cvage == 6) {
            stataCode = 21;
        } else if (cvage == 7) {
            stataCode = 26;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 3 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 8;
        } else if (cvage == 2) {
            stataCode = 10;
        } else if (cvage == 3) {
            stataCode = 12;
        } else if (cvage == 4) {
            stataCode = 15;
        } else if (cvage == 5) {
            stataCode = 19;
        } else if (cvage == 6) {
            stataCode = 24;
        } else if (cvage == 7) {
            stataCode = 29;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 3 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 9;
        } else if (cvage == 2) {
            stataCode = 11;
        } else if (cvage == 3) {
            stataCode = 14;
        } else if (cvage == 4) {
            stataCode = 18;
        } else if (cvage == 5) {
            stataCode = 22;
        } else if (cvage == 6) {
            stataCode = 27;
        } else if (cvage == 7) {
            stataCode = 33;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 4 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 7;
        } else if (cvage == 2) {
            stataCode = 9;
        } else if (cvage == 3) {
            stataCode = 11;
        } else if (cvage == 4) {
            stataCode = 14;
        } else if (cvage == 5) {
            stataCode = 17;
        } else if (cvage == 6) {
            stataCode = 21;
        } else if (cvage == 7) {
            stataCode = 27;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 4 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 8;
        } else if (cvage == 2) {
            stataCode = 10;
        } else if (cvage == 3) {
            stataCode = 13;
        } else if (cvage == 4) {
            stataCode = 15;
        } else if (cvage == 5) {
            stataCode = 19;
        } else if (cvage == 6) {
            stataCode = 24;
        } else if (cvage == 7) {
            stataCode = 29;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 4 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 9;
        } else if (cvage == 2) {
            stataCode = 11;
        } else if (cvage == 3) {
            stataCode = 14;
        } else if (cvage == 4) {
            stataCode = 17;
        } else if (cvage == 5) {
            stataCode = 21;
        } else if (cvage == 6) {
            stataCode = 26;
        } else if (cvage == 7) {
            stataCode = 32;
        }
    }
    else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 4 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 11;
        } else if (cvage == 2) {
            stataCode = 13;
        } else if (cvage == 3) {
            stataCode = 16;
        } else if (cvage == 4) {
            stataCode = 20;
        } else if (cvage == 5) {
            stataCode = 24;
        } else if (cvage == 6) {
            stataCode = 30;
        } else if (cvage == 7) {
            stataCode = 36;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 4 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 13;
        } else if (cvage == 2) {
            stataCode = 16;
        } else if (cvage == 3) {
            stataCode = 19;
        } else if (cvage == 4) {
            stataCode = 23;
        } else if (cvage == 5) {
            stataCode = 28;
        } else if (cvage == 6) {
            stataCode = 33;
        } else if (cvage == 7) {
            stataCode = 40;
        }
    }//p17
    else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 5 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 11;
        } else if (cvage == 2) {
            stataCode = 13;
        } else if (cvage == 3) {
            stataCode = 15;
        } else if (cvage == 4) {
            stataCode = 18;
        } else if (cvage == 5) {
            stataCode = 22;
        } else if (cvage == 6) {
            stataCode = 27;
        } else if (cvage == 7) {
            stataCode = 32;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 5 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 12;
        } else if (cvage == 2) {
            stataCode = 14;
        } else if (cvage == 3) {
            stataCode = 17;
        } else if (cvage == 4) {
            stataCode = 20;
        } else if (cvage == 5) {
            stataCode = 25;
        } else if (cvage == 6) {
            stataCode = 30;
        } else if (cvage == 7) {
            stataCode = 36;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 5 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 13;
        } else if (cvage == 2) {
            stataCode = 16;
        } else if (cvage == 3) {
            stataCode = 19;
        } else if (cvage == 4) {
            stataCode = 23;
        } else if (cvage == 5) {
            stataCode = 27;
        } else if (cvage == 6) {
            stataCode = 33;
        } else if (cvage == 7) {
            stataCode = 39;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 5 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 15;
        } else if (cvage == 2) {
            stataCode = 18;
        } else if (cvage == 3) {
            stataCode = 22;
        } else if (cvage == 4) {
            stataCode = 26;
        } else if (cvage == 5) {
            stataCode = 31;
        } else if (cvage == 6) {
            stataCode = 37;
        } else if (cvage == 7) {
            stataCode = 43;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 0 && cvsbp == 5 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 18;
        } else if (cvage == 2) {
            stataCode = 21;
        } else if (cvage == 3) {
            stataCode = 25;
        } else if (cvage == 4) {
            stataCode = 30;
        } else if (cvage == 5) {
            stataCode = 35;
        } else if (cvage == 6) {
            stataCode = 41;
        } else if (cvage == 7) {
            stataCode = 47;
        }
    }//mk1
    else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 1 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 6;
        } else if (cvage == 3) {
            stataCode = 7;
        } else if (cvage == 4) {
            stataCode = 9;
        } else if (cvage == 5) {
            stataCode = 12;
        } else if (cvage == 6) {
            stataCode = 15;
        } else if (cvage == 7) {
            stataCode = 18;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 1 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 5;
        } else if (cvage == 2) {
            stataCode = 7;
        } else if (cvage == 3) {
            stataCode = 8;
        } else if (cvage == 4) {
            stataCode = 11;
        } else if (cvage == 5) {
            stataCode = 13;
        } else if (cvage == 6) {
            stataCode = 16;
        } else if (cvage == 7) {
            stataCode = 20;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 1 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 6;
        } else if (cvage == 2) {
            stataCode = 8;
        } else if (cvage == 3) {
            stataCode = 10;
        } else if (cvage == 4) {
            stataCode = 12;
        } else if (cvage == 5) {
            stataCode = 15;
        } else if (cvage == 6) {
            stataCode = 19;
        } else if (cvage == 7) {
            stataCode = 23;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 1 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 8;
        } else if (cvage == 2) {
            stataCode = 10;
        } else if (cvage == 3) {
            stataCode = 12;
        } else if (cvage == 4) {
            stataCode = 14;
        } else if (cvage == 5) {
            stataCode = 17;
        } else if (cvage == 6) {
            stataCode = 21;
        } else if (cvage == 7) {
            stataCode = 25;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 1 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 10;
        } else if (cvage == 2) {
            stataCode = 12;
        } else if (cvage == 3) {
            stataCode = 14;
        } else if (cvage == 4) {
            stataCode = 17;
        } else if (cvage == 5) {
            stataCode = 20;
        } else if (cvage == 6) {
            stataCode = 24;
        } else if (cvage == 7) {
            stataCode = 29;
        }
    }//p18
    else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 2 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 7;
        } else if (cvage == 2) {
            stataCode = 8;
        } else if (cvage == 3) {
            stataCode = 10;
        } else if (cvage == 4) {
            stataCode = 12;
        } else if (cvage == 5) {
            stataCode = 15;
        } else if (cvage == 6) {
            stataCode = 19;
        } else if (cvage == 7) {
            stataCode = 23;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 2 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 8;
        } else if (cvage == 2) {
            stataCode = 9;
        } else if (cvage == 3) {
            stataCode = 12;
        } else if (cvage == 4) {
            stataCode = 14;
        } else if (cvage == 5) {
            stataCode = 27;
        } else if (cvage == 6) {
            stataCode = 21;
        } else if (cvage == 7) {
            stataCode = 25;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 2 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 9;
        } else if (cvage == 2) {
            stataCode = 11;
        } else if (cvage == 3) {
            stataCode = 13;
        } else if (cvage == 4) {
            stataCode = 16;
        } else if (cvage == 5) {
            stataCode = 19;
        } else if (cvage == 6) {
            stataCode = 23;
        } else if (cvage == 7) {
            stataCode = 28;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 2 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 11;
        } else if (cvage == 2) {
            stataCode = 13;
        } else if (cvage == 3) {
            stataCode = 16;
        } else if (cvage == 4) {
            stataCode = 19;
        } else if (cvage == 5) {
            stataCode = 22;
        } else if (cvage == 6) {
            stataCode = 26;
        } else if (cvage == 7) {
            stataCode = 31;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 2 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 14;
        } else if (cvage == 2) {
            stataCode = 16;
        } else if (cvage == 3) {
            stataCode = 19;
        } else if (cvage == 4) {
            stataCode = 22;
        } else if (cvage == 5) {
            stataCode = 26;
        } else if (cvage == 6) {
            stataCode = 30;
        } else if (cvage == 7) {
            stataCode = 35;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 3 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 10;
        } else if (cvage == 2) {
            stataCode = 12;
        } else if (cvage == 3) {
            stataCode = 14;
        } else if (cvage == 4) {
            stataCode = 16;
        } else if (cvage == 5) {
            stataCode = 20;
        } else if (cvage == 6) {
            stataCode = 23;
        } else if (cvage == 7) {
            stataCode = 28;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 3 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 11;
        } else if (cvage == 2) {
            stataCode = 13;
        } else if (cvage == 3) {
            stataCode = 16;
        } else if (cvage == 4) {
            stataCode = 19;
        } else if (cvage == 5) {
            stataCode = 22;
        } else if (cvage == 6) {
            stataCode = 26;
        } else if (cvage == 7) {
            stataCode = 31;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 3 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 13;
        } else if (cvage == 2) {
            stataCode = 15;
        } else if (cvage == 3) {
            stataCode = 18;
        } else if (cvage == 4) {
            stataCode = 21;
        } else if (cvage == 5) {
            stataCode = 25;
        } else if (cvage == 6) {
            stataCode = 29;
        } else if (cvage == 7) {
            stataCode = 34;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 3 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 15;
        } else if (cvage == 2) {
            stataCode = 18;
        } else if (cvage == 3) {
            stataCode = 21;
        } else if (cvage == 4) {
            stataCode = 25;
        } else if (cvage == 5) {
            stataCode = 28;
        } else if (cvage == 6) {
            stataCode = 33;
        } else if (cvage == 7) {
            stataCode = 38;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 3 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 19;
        } else if (cvage == 2) {
            stataCode = 22;
        } else if (cvage == 3) {
            stataCode = 25;
        } else if (cvage == 4) {
            stataCode = 29;
        } else if (cvage == 5) {
            stataCode = 33;
        } else if (cvage == 6) {
            stataCode = 37;
        } else if (cvage == 7) {
            stataCode = 42;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 4 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 14;
        } else if (cvage == 2) {
            stataCode = 16;
        } else if (cvage == 3) {
            stataCode = 19;
        } else if (cvage == 4) {
            stataCode = 22;
        } else if (cvage == 5) {
            stataCode = 25;
        } else if (cvage == 6) {
            stataCode = 29;
        } else if (cvage == 7) {
            stataCode = 34;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 4 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 16;
        } else if (cvage == 2) {
            stataCode = 18;
        } else if (cvage == 3) {
            stataCode = 21;
        } else if (cvage == 4) {
            stataCode = 24;
        } else if (cvage == 5) {
            stataCode = 28;
        } else if (cvage == 6) {
            stataCode = 32;
        } else if (cvage == 7) {
            stataCode = 37;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 4 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 18;
        } else if (cvage == 2) {
            stataCode = 21;
        } else if (cvage == 3) {
            stataCode = 24;
        } else if (cvage == 4) {
            stataCode = 28;
        } else if (cvage == 5) {
            stataCode = 32;
        } else if (cvage == 6) {
            stataCode = 36;
        } else if (cvage == 7) {
            stataCode = 41;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 4 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 21;
        } else if (cvage == 2) {
            stataCode = 24;
        } else if (cvage == 3) {
            stataCode = 28;
        } else if (cvage == 4) {
            stataCode = 32;
        } else if (cvage == 5) {
            stataCode = 36;
        } else if (cvage == 6) {
            stataCode = 40;
        } else if (cvage == 7) {
            stataCode = 45;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 4 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 26;
        } else if (cvage == 2) {
            stataCode = 29;
        } else if (cvage == 3) {
            stataCode = 33;
        } else if (cvage == 4) {
            stataCode = 37;
        } else if (cvage == 5) {
            stataCode = 41;
        } else if (cvage == 6) {
            stataCode = 45;
        } else if (cvage == 7) {
            stataCode = 50;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 5 && cvtc == 1) {
        if (cvage == 1) {
            stataCode = 19;
        } else if (cvage == 2) {
            stataCode = 22;
        } else if (cvage == 3) {
            stataCode = 25;
        } else if (cvage == 4) {
            stataCode = 28;
        } else if (cvage == 5) {
            stataCode = 32;
        } else if (cvage == 6) {
            stataCode = 36;
        } else if (cvage == 7) {
            stataCode = 41;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 5 && cvtc == 2) {
        if (cvage == 1) {
            stataCode = 22;
        } else if (cvage == 2) {
            stataCode = 25;
        } else if (cvage == 3) {
            stataCode = 28;
        } else if (cvage == 4) {
            stataCode = 31;
        } else if (cvage == 5) {
            stataCode = 35;
        } else if (cvage == 6) {
            stataCode = 40;
        } else if (cvage == 7) {
            stataCode = 45;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 5 && cvtc == 3) {
        if (cvage == 1) {
            stataCode = 25;
        } else if (cvage == 2) {
            stataCode = 28;
        } else if (cvage == 3) {
            stataCode = 32;
        } else if (cvage == 4) {
            stataCode = 35;
        } else if (cvage == 5) {
            stataCode = 40;
        } else if (cvage == 6) {
            stataCode = 44;
        } else if (cvage == 7) {
            stataCode = 49;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 5 && cvtc == 4) {
        if (cvage == 1) {
            stataCode = 29;
        } else if (cvage == 2) {
            stataCode = 33;
        } else if (cvage == 3) {
            stataCode = 36;
        } else if (cvage == 4) {
            stataCode = 40;
        } else if (cvage == 5) {
            stataCode = 44;
        } else if (cvage == 6) {
            stataCode = 49;
        } else if (cvage == 7) {
            stataCode = 54;
        }
    } else if (cvsex == 1 && cvdm == 1 && cvsmk == 1 && cvsbp == 5 && cvtc == 5) {
        if (cvage == 1) {
            stataCode = 35;
        } else if (cvage == 2) {
            stataCode = 38;
        } else if (cvage == 3) {
            stataCode = 42;
        } else if (cvage == 4) {
            stataCode = 46;
        } else if (cvage == 5) {
            stataCode = 50;
        } else if (cvage == 6) {
            stataCode = 54;
        } else if (cvage == 7) {
            stataCode = 59;
        }
    } else {
        stataCode += "* ไม่มีเงื่อนไขที่ตรงกับข้อมูลที่ป้อน\n";
    } var t = stataCode
    var rSult = "";
    if (stataCode > 0) {
        rSult = "ความเสี่ยงต่อการป่วยหรือเสียชีวิตจากโรคหัวใจและหลอดเลือด เช่น กล้ามเนื้อหัวใจขาดเลือดและโรคเส้นเลือดสมองตีบในระยะ 10 ปีข้างหน้าของท่าน";
    } else {
        rSult = "";
    }
    //ปริ้นสี
    var statas = "";;
    if (stataCode <= 5) {
        statas = " เสี่ยงน้อยมาก";
    } else if (stataCode > 5 && stataCode <= 10) {
        statas = "เสี่ยงน้อย";
    } else if (stataCode > 10 && stataCode <= 20) {
        statas = "เสี่ยงปานกลาง";
    } else if (stataCode > 20 && stataCode <= 30) {
        statas = "เสี่ยงสูง";
    } else if (stataCode > 30) {
        statas = "เสี่ยงสูงมาก";
    } else {
        statas = "ไม่ตรงเงื่อนไข";
    }
    //document.getElementById('statasOutput').textContent = statas;

    /**
     * 
      else if (cvsex == 1  && cvdm == 1 && cvsmk == 1 && cvsbp ==  && cvtc ==  ) {
        if (cvage == 1  ) {
            stataCode = ;
        } else if (cvage == 2) {
            stataCode = ;
        } else if (cvage == 3) {
            stataCode = ;
        } else if (cvage ==4 ) {
            stataCode = ;
        } else if (cvage == 5) {
            stataCode = ;
        } else if (cvage ==6 ) {
            stataCode = ;
        } else if (cvage == 7) {
            stataCode = ;
        }
    }
     
     */

    //ส่งค่าไปที่หน้าเว็บตามid
    //document.getElementById('stataCode').textContent = stataCode;


    document.cookie = `name=${name}; path=/`;
    document.cookie = `lastname=${lastname}; path=/`;
    document.cookie = `cvsex=${cvsex}; path=/`;
    document.cookie = `cvdm=${cvdm}; path=/`;
    document.cookie = `cvsmk=${cvsmk}; path=/`;
    document.cookie = `cvsbp=${cvsbp}; path=/`;
    document.cookie = `cvtc=${cvtc}; path=/`;
    document.cookie = `cvage=${cvage}; path=/`;
    document.cookie = `age=${age}; path=/`;
    document.cookie = `stataCode=${stataCode}; path=/`;
    document.cookie = `statas=${statas}; path=/`;
    document.cookie = `sbp=${sbp}; path=/`;
    document.cookie = `tc=${tc}; path=/`;
    

    // ส่งไปยังหน้า result.html
    window.location.href = "result.html";
    //window.location.href = "long.html";
    // ล้างค่าในฟอร์ม
    resetForm();
}

// ฟังก์ชันสำหรับล้างค่าในฟอร์ม
function resetForm() {
    document.getElementById("stataForm").reset();



}
