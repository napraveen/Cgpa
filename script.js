function calculate()
{
    let answer, total_credit, cgpa;
    let prp,ec2,lic,ct,ds,cs,dslab,eclab ;
    let prp_cr = 4, ec2_cr = 3 , lic_cr =3 , ct_cr =3 , ds_cr=3 , cs_cr=3, dslab_cr =2, eclab_cr =2;
    var dict = {
        '1' : 1, '2': 2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10,
        O : 10,
        o : 10,
        'A+' : 9,
        'a+' : 9,
        A : 8,
        a : 8,
        'B+': 7,
        'b+' : 7,
        B : 6,
        b : 6


    }

    prp = document.getElementById("prp").value;
    ec2 = document.getElementById("ec2").value;
    lic = document.getElementById("lic").value;
    ct = document.getElementById("ct").value;
    ds = document.getElementById("ds").value;
    cs = document.getElementById("cs").value;
    dslab = document.getElementById("dslab").value;
    eclab = document.getElementById("eclab").value;

    prp = dict[prp];
    ec2 = dict[ec2];
    lic = dict[lic];
    ct = dict[ct];
    ds = dict[ds];
    cs = dict[cs];
    dslab = dict[dslab];
    eclab = dict[eclab];

    answer = (prp*prp_cr) + (ec2*ec2_cr) + (lic*lic_cr) + (ct*ct_cr) + (ds*ds_cr) + (cs*cs_cr) + (dslab*dslab_cr) + (eclab*eclab_cr);
    total_credit = prp_cr + ec2_cr + lic_cr + ct_cr + ds_cr + cs_cr + dslab_cr + eclab_cr;
    cgpa = answer/total_credit;
    if(isNaN(cgpa))
    {
    document.getElementById("result").innerHTML ="Some Typo Error. Please Re-verify / Try Typing Grade Points";
    }

    else{
        document.getElementById("result").innerHTML =cgpa;
    }

    
}
